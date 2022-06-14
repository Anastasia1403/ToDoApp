import React from 'react'
import styled from 'styled-components'

export const StyledInput = styled.input`
    width: 70%;
    min-width: 200px;
    `


function Input({type, value, onChange, placeholder}) {
  return (
   <StyledInput type={type} value={value} onChange={onChange} placeholder={placeholder}/>
  )
}

export default Input