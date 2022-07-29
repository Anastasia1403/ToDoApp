import React from 'react'
import { useSelector } from 'react-redux';
import { colorsSelector } from '../../store/colors/selectors';
import { StyledTagItem, TagCheckbox, TagCheckboxLabel } from './styled';


function TagItem({size='default', checked=true, tag, id, onClick}) {
  const colorList = useSelector(colorsSelector)

  const {title, colorId } = tag;
  return (    
    <StyledTagItem  checked={checked} color={colorList[colorId].color} size={size}>
      { onClick ?
      <>
        <TagCheckboxLabel
            checked={checked}
            color={colorList[colorId].color}>
          <TagCheckbox
            onClick={onClick}
            type="checkbox"
            id={id}
            title={title}
            name={title}/>
                {title}
        </TagCheckboxLabel> 
      </>
      : title
      }
    </StyledTagItem>

  )
}

export default TagItem
