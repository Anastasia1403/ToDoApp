import React from 'react'
import { StyledButton } from './styled'

function Button({disabled=false, title, onClick, type, icon}) {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {icon && <img src={icon} alt='icon'/>}
      {title}
      </StyledButton>
  )
}

export default Button