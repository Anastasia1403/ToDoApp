import React from 'react'
import styled from 'styled-components'

export const StyledTextarea = styled.textarea`
    width: 70%;
    min-width: 200px;
    resize: none;
    `

function Textarea({placeholder, value, onChange}) {
  return (
    <StyledTextarea value={value} placeholder={placeholder} onChange={onChange}></StyledTextarea>
  )
}

export default Textarea