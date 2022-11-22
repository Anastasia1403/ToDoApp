import React from 'react'
import { useSelector } from 'react-redux';
import { colorByIdSelector } from '../../store/colors/selectors';
import { StyledTagItem, TagCheckbox, TagCheckboxLabel } from './styled';


function TagItem({size='default', checked=true, tag, id, onClick}) {

  const {title, colorId} = tag;
  const color = useSelector(colorByIdSelector(colorId))

  return (    
    <StyledTagItem  checked={checked} color={color} size={size}>
      { onClick ?
      <>
        <TagCheckboxLabel
        data-testid='tag-checkbox-label'
            checked={checked}
            color={color}>
          <TagCheckbox
            data-testid='tag-checkbox'
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
