import Fabric from './fabric'
import Image from './image'
import Dialog from './dialog'
import Product from './product'
import Device from './device'

let store
export default () => {
  const fabric = new Fabric()
  const image = new Image()
  const dialog = new Dialog()
  const product = new Product()
  const device = new Device()

  store = {
    fabric,
    image,
    dialog,
    product,
    device
  }

  return store
}
