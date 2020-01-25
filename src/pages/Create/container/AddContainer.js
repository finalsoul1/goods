import React, { useState } from 'react'
import CanvasText from '../modules/text'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { CloudUpload, FolderOpen, Create } from '@material-ui/icons'
import { inject, observer } from 'mobx-react'
import uniqid from 'uniqid'
import Modal from 'components/organisms/Modal'
import ListItem from 'components/molecules/ListItem'
import ImageItem from 'components/atoms/ImageItem'
import CanvasImage from '../modules/image'

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  },
  ul: theme.noneStyledUl,
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}))

const AddContainer =
  inject(stores => ({
    fabric: stores.fabric,
    image: stores.image
  }))
  (observer((props) => {
    const classes = useStyles()
    const [modalOpen, setModalOpen] = useState(false)

    const handleClick = () => {
      pushText()
    }

    const pushText = () => {
      const id = uniqid('text-')
      props.fabric.pushImage(
        <CanvasText
          key={id}
          uniqId={id}
        />
      )
    }

    const handleModal = () => {
      setModalOpen(true)
    }

    const modalClose = () => {
      setModalOpen(false)
    }

    const clickImage = (e, url) => {
      pushFabricImage(url)
      modalClose()
    }

    const pushFabricImage = (url) => {
      props.fabric.pushImage(
        <CanvasImage
          key={uniqid('image-')}
          url={url}
          scale={0.3}
          top={50}
          left={10}
        />
      )
    }

    return (
      <div className={classes.root}>
        <ul className={classes.ul}>
          <li>
            <Button size="large">
              <CloudUpload className={classes.extendedIcon}/>
              이미지 추가하기
            </Button>
          </li>
          <li><Button size="large" onClick={handleModal}>
            <FolderOpen className={classes.extendedIcon}/>이미지 불러오기</Button>
          </li>
          <li><Button size="large" onClick={handleClick}>
            <Create className={classes.extendedIcon}/>텍스트 추가하기</Button>
          </li>
          <li><Button size="large">텍스트 추가하기</Button></li>
        </ul>
        <Modal
          open={modalOpen}
          handleClose={modalClose}
          title="이미지"
          contents={(
            <ListItem cursor="pointer">
              {props.image.imageList.map(item => {
                return (
                  <ImageItem key={item.url} imageUrl={item.url} click={clickImage}
                    width="100px"/>)
              })}
            </ListItem>
          )}
        />
      </div>
    )
  }))

export default AddContainer
