import { useEffect } from 'react'
import { fabric } from 'fabric'
import { inject, observer } from 'mobx-react'

const Text =
  inject('fabric')
  (observer((props) => {
    const { uniqId, ...options } = props
    const { setTrueIsActiveObject, setFalseIsActiveObject, setFont } = props.fabric

    useEffect(() => {
      const options = {
        [uniqId]: {
          font: 'Roboto',
          fontColor: '#000'
        }
      }
      const textBox = new fabric.IText('텍스트', {
        textAlign: 'center',
        top: 60,
        left: 20,
        padding: 10,
        fontSize: 30,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        ...options
      })
      textBox.set('id', uniqId)
      textBox.on('selected', () => {
        console.log('이미지 선택')
        setTrueIsActiveObject('text')
      })
      textBox.on('deselected', () => {
        console.log('선택 취소')
        setFalseIsActiveObject()
      })
      textBox.hoverCursor = 'pointer'
      setFont(options)
      props.canvas.add(textBox)
    }, [])

    return null
  }))

export default Text
