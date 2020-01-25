import React, { useState } from 'react'
import { SettingsBackupRestore, DeleteOutline } from '@material-ui/icons'
import { Button, Input, Select, Grid } from '@material-ui/core'
import {
  FontDownloadRounded,
  ExpandMore,
  ChevronRight,
  Flip,
  ImportExport
} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Grow } from '@material-ui/core'
import { inject, observer } from 'mobx-react'
import ColorPicker from 'components/atoms/ColorPicker'
import CustomDialog from 'components/organisms/Dialog'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
    flexGrow: 1
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  swatch: {
    display: 'inline-block',
    padding: '5px',
    cursor: 'pointer',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)'
  }
}))

const MenuContainer =
  inject('fabric')
  (observer((props) => {
    const classes = useStyles()
    const [font, setFont] = useState('Roboto')
    const [open, setOpen] = useState(false)
    const [fontColor, setFontColor] = useState('#000')

    const { isActiveObject, resetFabric, resetCanvas, activeObjectRemove, fabricType, setFabricFont, getActiveId, doFlip } = props.fabric

    const reset = (e) => {
      resetFabric()
      resetCanvas()
    }

    const activeRemove = () => {
      activeObjectRemove()
    }

    const clickOpen = () => {
      setOpen(true)
    }
    const handleClose = () => {
      setFont(getActiveId())
      setOpen(false)
    }

    const handleChange = ({ target: { value } }) => {
      setFont(value)
      setFabricFont(value)
    }

    const changeColor = (color) => {
      setFontColor(color.hex)
      setFabricFont(color.hex, 'fontColor')
    }

    const clickFlip = (type) => () => {
      doFlip(type)
    }

    return (
      <div className={classes.root}>
        <Button onClick={reset}>
          <SettingsBackupRestore className={classes.extendedIcon}/> RESET
        </Button>

        <div>
          <Button disabled={!isActiveObject}>
            {isActiveObject ?
              (<ExpandMore className={classes.extendedIcon}/>) :
              (<ChevronRight className={classes.extendedIcon}/>)}
            MENU
          </Button>
          <Grow in={isActiveObject}>
            <Button onClick={activeRemove}>
              <DeleteOutline className={classes.extendedIcon}/>REMOVE
            </Button>
          </Grow>
          <Grow
            in={isActiveObject}
            style={{ transformOrigin: '0 0 0' }}
            {...(isActiveObject ? { timeout: 1000 } : {})}
          >
            <Button onClick={clickFlip('flipY')}>
              <ImportExport className={classes.extendedIcon}/>상하반전
            </Button>
          </Grow><br/>
          <Grow
            in={isActiveObject}
            style={{ transformOrigin: '0 0 0' }}
            {...(isActiveObject ? { timeout: 1750 } : {})}
          >
            <Button onClick={clickFlip('flipX')}>
              <Flip className={classes.extendedIcon}/>좌우반전
            </Button>
          </Grow><br/>
          {fabricType === 'text' && (
            <Grow
              in={isActiveObject}
              style={{ transformOrigin: '0 0 0' }}
              {...(isActiveObject ? { timeout: 2000 } : {})}
            >
              <Button onClick={clickOpen}>
                <FontDownloadRounded className={classes.extendedIcon}/>FONT
              </Button>
            </Grow>)}
        </div>
        <CustomDialog open={open} handleClose={handleClose} drag={true}
          title={'폰트변경'}
          contents={(
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <label>폰트</label>
                </Grid>
                <Grid item xs={6}>
                  <Select
                    native
                    value={font}
                    onChange={handleChange}
                    input={<Input id="demo-dialog-native"/>}
                  >
                    <option value="Roboto">Roboto</option>
                    <option value="Dokdo">Dokdo</option>
                    <option value="Gugi">Gugi</option>
                    <option value="Kirang Haerang">Kirang Haerang</option>
                    <option value="Yeon Sung">Yeon Sung</option>
                  </Select>
                </Grid>
                <Grid item xs={6}>
                  <label>색</label>
                </Grid>
                <Grid item xs={6}>
                  <ColorPicker color={fontColor} changeColor={changeColor}/>
                </Grid>
              </Grid>
            </div>
          )}
          actions={(
            <Button onClick={handleClose}>확인</Button>
          )}
        />
      </div>
    )
  }))

export default MenuContainer
