import styled from 'styled-components'

const StyledLabel = styled.label`
    display: block;
    font-size: 14px;
    color: #8e6ab3;
    text-align: left;
    `


function Label({children, required, }) {
  return (
    <StyledLabel>
        {children}{required ? '*' : ''}
    </StyledLabel>
  )
}

export default Label