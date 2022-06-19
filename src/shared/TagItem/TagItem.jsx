import React from 'react'
import { StyledTagItem, TagCheckbox, TagCheckboxLabel } from './styled';


function TagItem({size='default', checked=true, title, id, color, onClick }) {
  return (    
    <StyledTagItem  checked={checked} color={color} size={size}>
      { onClick ?
      <>
        <TagCheckbox
            onClick={onClick}
            type="checkbox"
            id={id}
            title={title}
            name={title}/>
        <TagCheckboxLabel
            htmlFor={id}
            checked={checked}
            color={color}>
                {title}
        </TagCheckboxLabel> 
      </>
      : title
      }
    </StyledTagItem>

  )
}

export default TagItem
