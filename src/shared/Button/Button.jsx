import React from 'react'
import { StyledButton } from './styled'

function Button({disabled=false, children, onClick, type, icon}) {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {icon && <img src={icon} alt='icon'/>}
      {children}
      </StyledButton>
  )
}

export default Button