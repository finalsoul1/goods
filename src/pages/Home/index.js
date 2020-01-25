import React, {useState} from 'react'
import {inject, observer} from "mobx-react"

const Home =
  inject('device')
  (observer((props) => {

    console.log(props)

    useState(() => {

    })

    const {BrowserView, MobileView} = props.device

    const getDeviceInfo = () => {
      console.log(props.device.browser)
    }

    return (
      <div>
        홈스윗홈
        <BrowserView>브라우저</BrowserView>
        <MobileView>모바일</MobileView>
        <button onClick={getDeviceInfo}>디바이스 정보</button>
      </div>
    )
  }))

export default Home
