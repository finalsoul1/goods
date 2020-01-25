import { observable, action } from 'mobx'

class Product {
  @observable productImage = [
    { url: 'https://images.seoulstore.com/design/881bb6d7d73dbbb78b0a6f6bb488ed32.png' }
  ]
}

export default Product
