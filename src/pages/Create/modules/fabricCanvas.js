import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { fabric } from 'fabric'

const FabricCanvas =
  inject('fabric')
  (observer((props) => {
    const { fabricCanvas, setCanvas } = props.fabric
    const { width, height, type } = props
    let canvasRef = null

    useEffect(() => {
      const canvas = new fabric.Canvas(canvasRef)
      setCanvas(canvas, type)
    }, [])

    const children = React.Children.map(props.children, child => {
      console.log('fabric: ', type)
      return React.cloneElement(child, {
        canvas: fabricCanvas[type]
      })
    })

    return (
      <Fragment>
        <canvas className="canvas_main"
          ref={el => (canvasRef = el)}
          width={width}
          height={height}
        />
        {fabricCanvas && children}
      </Fragment>
    )
  }))

FabricCanvas.proptypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default FabricCanvas
