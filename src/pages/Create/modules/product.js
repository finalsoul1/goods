import { inject, observer } from 'mobx-react'
import { useEffect } from 'react'
import { fabric } from 'fabric'

const Product =
  inject('fabric')
  (observer((props) => {

    useEffect(() => {
      const { scale, ...options } = props
      fabric.Image.fromURL(props.url, img => {
        img.scale(props.scale)

        img.moveTo(-1000)
        img.selectable = false
        img.hasControls = false
        img.hasBorders = false
        img.lockMovementX = true
        img.lockMovementY = true

        props.canvas.add(img)
      }, options)
    })

    return null
  }))

export default Product
