import React from 'react';
import {StyledSidebar, TagsList } from './styled';
import { defaultTagsArray } from "./../../helpers/constants";
import TagItem from '../TagItem/TagItem';

const Sidebar = () => {
    return (
        <StyledSidebar>
            <div>
                <h3>Tags</h3>
                <TagsList>
                {
                    defaultTagsArray.map(tag => <TagItem color={tag.color} title={tag.title}>{tag.title}</TagItem>)
                }
                </TagsList>
            </div>
        </StyledSidebar>
    );
}

export default Sidebar;
