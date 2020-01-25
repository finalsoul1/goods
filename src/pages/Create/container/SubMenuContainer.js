import React from 'react'
import CustomToggle from 'components/molecules/CustomToggle'
import { inject, observer } from 'mobx-react'

const SubMenuContainer =
  inject('fabric')
  (observer((props) => {
    const buttons = [
      { name: '전면', value: 'front' },
      { name: '후면', value: 'back' }
    ]

    const fabricChange = (type) => {
      props.fabric.setCurrentFabric(type)
    }

    return (
      <CustomToggle
        buttons={buttons}
        change={fabricChange}
      />
    )
  }))

export default SubMenuContainer
