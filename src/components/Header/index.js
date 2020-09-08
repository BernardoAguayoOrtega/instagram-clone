//import react
import React from 'react';
//import logo
import Logo from '../../assets/Bernardogram.png';
//import logo container
import { LogoContainer, HeaderContainer } from './styles';

//create and export header component
export const Header = () => {
	return (
		<HeaderContainer>
			<LogoContainer src={Logo} alt='logo' />
		</HeaderContainer>
	);
};
