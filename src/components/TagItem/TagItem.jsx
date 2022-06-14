import React from 'react'
import { StyledTagItem } from './styled';


function TagItem({size='default', checked=true, children, color }) {
  return (    
    <StyledTagItem  checked={checked} color={color} size={size}>
        {children} 
    </StyledTagItem>

  )
}

export default TagItem
