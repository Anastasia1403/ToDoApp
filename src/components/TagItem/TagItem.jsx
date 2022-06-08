import React from 'react'
import { StyledTagItem } from './styled';


function TagItem({size='default', checked=true, children, title, color }) {
  return (    
    <StyledTagItem  checked={checked} key={title} color={color} size={size}>
        {children} 
    </StyledTagItem>

  )
}

export default TagItem
