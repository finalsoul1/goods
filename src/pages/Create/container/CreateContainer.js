import React, { Fragment, useRef, useEffect, useState, useLayoutEffect } from 'react'
import FabricCanvas from '../modules/fabricCanvas'
import { inject, observer } from 'mobx-react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  block: {
    position: 'absolute',
    display: 'block'
  },
  none: {
    position: 'absolute',
    display: 'none'
  }
}))

const CreateContainer =
  inject('fabric')
  (observer((props) => {
    const classes = useStyles(props)
    const customCanvas = useRef()
    const [currentWidth, setCurrentWidth] = useState(null)
    const { currentFabric } = props.fabric

    useLayoutEffect(() => {
      setCurrentWidth(customCanvas.current.offsetWidth)
    }, [])

    return (
      <div ref={customCanvas}>
        {currentWidth && (
          <div className={classes.canvasContainer}>
            <div className={currentFabric === 'front' ? classes.block : classes.none}>
              <FabricCanvas width={currentWidth} height="800" type={'front'}>
                {props.fabric.fabricList.front}
              </FabricCanvas>
            </div>
            <div className={currentFabric === 'back' ? classes.block : classes.none}>
              <FabricCanvas width={currentWidth} height="800" type={'back'}>
                {props.fabric.fabricList.back}
              </FabricCanvas>
            </div>
          </div>
        )}
      </div>
    )
  }))

export default CreateContainer
