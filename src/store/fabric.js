import { observable, action, computed } from 'mobx'

class Fabric {
  // canvas
  @observable fabricCanvas = { front: null, back: null }
  // display 되는 canvas
  @observable currentFabric = 'front'

  // 현재 캔버스 (앞, 뒤)
  @computed get currentCanvas () {
    return this.fabricCanvas[this.currentFabric]
  }

  @observable fabricList = { front: [], back: [] }
  @observable isActiveObject = false

  // fabric obj
  @observable fabricType = 'text'
  // fabric obj options
  @observable options = {}

  @action setCurrentFabric = (type) => {
    this.currentFabric = type
  }

  @action getActiveObject = () => {
    if (!this.isActiveObject) return ''
    return this.currentCanvas.getActiveObject()
  }

  @action doFlip = (type) => {
    const obj = this.getActiveObject()
    const flip = obj.get(type)
    obj.set(type, !flip)
    this.currentCanvas.requestRenderAll()
  }

  @action setFont = (data) => {
    this.options = Object.assign(this.options, data)
  }

  @action getActiveId = (type = 'font') => {
    if (!this.isActiveObject) return ''
    return this.options[this.getActiveObject().get('id')][type]
  }

  @action setFabricFont = (font, type = 'font') => {
    let setType = 'fontFamily'
    switch (type) {
      case 'font':
        setType = 'fontFamily'
        break
      case 'fontColor':
        setType = 'fill'
        break
      default:
    }
    const obj = this.getActiveObject()

    this.options[obj.get('id')][type] = font
    obj.set(setType, font)
    this.currentCanvas.requestRenderAll()
  }

  @action setTrueIsActiveObject = (type) => {
    this.isActiveObject = true
    this.fabricType = type
  }
  @action setFalseIsActiveObject = () => {
    this.isActiveObject = false
  }

  @action setCanvas = (canvas, type) => {
    this.fabricCanvas[type] = canvas
  }

  @action resetCanvas = () => {
    this.currentCanvas.remove(...this.currentCanvas.getObjects())
  }

  @action activeObjectRemove = () => {
    this.currentCanvas.remove(this.currentCanvas.getActiveObject())
  }

  @action pushImage = (image) => {
    const type = this.currentFabric
    this.fabricList[type] = [
      ...this.fabricList[type],
      image
    ]
  }

  @action resetFabric = () => {
    const type = this.currentFabric
    this.fabricList[type] = []
  }
}

export default Fabric
