import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ToggleButtonGroup, ToggleButton } from '@material-ui/lab'
import FabricCanvas from '../../../pages/Create/modules/fabricCanvas'

const CustomToggle = (props) => {
  const [buttonValue, setButtonValue] = useState(props.defaultValue || props.buttons[0].value)

  const handleChange = (e, active) => {
    // toggleButton 이라 한번 더 누를 경우 null을 뱉음, 토글 기능 사용 안하려면 걸러야함
    if (active) {
      setButtonValue(active)
      props.change && props.change(active)
    }
  }

  return (
    <ToggleButtonGroup
      exclusive
      value={buttonValue}
      onChange={handleChange}
    >
      {props.buttons.map(button => (
        <ToggleButton key={button.value} value={button.value}>{button.name}</ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

FabricCanvas.proptypes = {
  buttons: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  change: PropTypes.func
}

export default CustomToggle
