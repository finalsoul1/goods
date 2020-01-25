import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { fabric } from 'fabric'
import { inject, observer } from 'mobx-react'

const Image =
  inject('fabric')
  (observer((props) => {

    const { setTrueIsActiveObject, setFalseIsActiveObject } = props.fabric

    useEffect(() => {
      const { scale, ...options } = props
      fabric.Image.fromURL(props.url, img => {
        img.scale(props.scale)
        img.hoverCursor = 'pointer'

        // add select, deselect event
        img.on('selected', () => {
          console.log('이미지 선택')
          setTrueIsActiveObject('image')
        })
        img.on('deselected', () => {
          console.log('선택 취소')
          setFalseIsActiveObject()
        })
        img.on('mousedown', (e) => {
          console.log('mouse:down')
          animate(e, 1, img)
        })
        img.on('mouseup', (e) => {
          console.log('mouse:up')
          animate(e, 0, img)
        })

        // fabricCanvas 모듈에서 image 객체를 생성할때 props에 canvas 객체를 참조시킴
        props.canvas.add(img)
      }, options)
    }, [])

    // 움직일때 확대축소
    const animate = (e, dir, canvas) => {
      if (e.target) {
        e.target.opacity = dir ? 0.3 : 1
      }
    }

    return null
  }))

Image.propTypes = {
  canvas: PropTypes.object,
  url: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired
}

export default Image
