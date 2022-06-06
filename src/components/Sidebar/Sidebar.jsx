import React from 'react';
import {StyledSidebar, TagsList, TagItem} from './styled'

const Sidebar = ({ tagsTypes }) => {
    return (  
        <StyledSidebar>
            <div>
                <h3>Tags</h3>
                <TagsList>
                {
                    tagsTypes.map(tag => <TagItem key={tag.title}
                                                color={tag.color}>{tag.title}
                                    </TagItem>
                    )
                }
                </TagsList>
            </div>
        </StyledSidebar>
    );
}
 
export default Sidebar;