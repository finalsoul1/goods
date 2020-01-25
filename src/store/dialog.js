import { observable, action } from 'mobx'

class Dialog {
  @observable open = false

  @action handleClose = () => {
    this.open = false
  }

  @action handleOpen = () => {
    this.open = true
  }
}

export default Dialog
