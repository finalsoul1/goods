import { observable, action } from 'mobx'

class Image {
  @observable imageList = [
    { url: 'https://images.seoulstore.com/design/771d8e7dd01c83c513332b9f1ef2126a.png' },
    { url: 'https://images.seoulstore.com/design/abcedba611d3601e725cbe2ee1fcdeda.png' },
    { url: 'https://images.seoulstore.com/design/746ab7b1a3129262c31d0e480fc53ebd.jpg' },
    { url: 'https://images.seoulstore.com/design/3170b051a296331c4097d0bbf41b5772.jpg' },
    { url: 'https://images.seoulstore.com/design/75d41585935d7a68747453d73d60e80e.jpg' },
    { url: 'https://images.seoulstore.com/design/e0a847b66a1beb681a5e4650366d77bc.jpg' }
  ]
}

export default Image
