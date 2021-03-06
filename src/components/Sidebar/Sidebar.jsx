import React, { useState } from 'react'
import { routes } from '../../routes/routes'
import Title from '../../shared/Title/Title'
import { StyledLink, StyledSidebar } from './styled'

const INITIAL_PATH_ID = routes[2].id

function Sidebar() {

const findCurrentPathId = () => {
	return routes.find(route => route.path === window.location.pathname)?.id || INITIAL_PATH_ID
}

	const [activeLinkId, setActiveLinkId] = useState(findCurrentPathId())

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