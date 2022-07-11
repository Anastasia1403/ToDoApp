import React from 'react'
import { useSelector } from 'react-redux';
import { colorsSelector } from '../../store/colors/selectors';
import { StyledTagItem, TagCheckbox, TagCheckboxLabel } from './styled';


function TagItem({size='default', checked=true, tag, id,  onClick }) {
  const colorList = useSelector(colorsSelector)

  const {title, color: colorId} = tag;
  return (    
    <StyledTagItem  checked={checked} color={colorList[colorId].color} size={size}>
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
            color={colorList[colorId].color}>
                {title}
        </TagCheckboxLabel> 
      </>
      : title
      }
    </StyledTagItem>

  )
}

export default TagItem
