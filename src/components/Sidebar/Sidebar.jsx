import React, { useState } from 'react'
import { routes } from '../../routes/routes'
import Title from '../../shared/Title/Title'
import { StyledLink, StyledSidebar } from './styled'


function Sidebar() {
	const [activeLinkId, setActiveLinkId] = useState(1)

	const handleClick = (e) => {
		setActiveLinkId(Number(e.currentTarget.id))
	}
	return (
		<StyledSidebar>
			{routes.map(link => 
				<StyledLink
					key={link.id} 
					id={link.id} 
					to={link.path} 
					onClick={handleClick}
					isActive={activeLinkId === link.id}
					>
						<Title>{link.title}</Title>
				</StyledLink>) }
		</StyledSidebar>
	)
}

export default Sidebar