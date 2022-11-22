import styled from 'styled-components'

const StyledLabel = styled.label`
    display: block;
    font-size: 14px;
    color: #8e6ab3;
    text-align: left;
    `


function Label({children, required, forId='' }) {
  return (
    <StyledLabel htmlFor={forId}>
        {children}{required ? '*' : ''}
    </StyledLabel>
  )
}

export default Label