//import react
import React from 'react';
//import logo
import Logo from '../../assets/Bernardogram.png';
//import logo container
import { LogoContainer } from './styles';

//create and export header component
export const Header = () => {
	return (
		<>
			<LogoContainer src={Logo} alt='logo' />
		</>
	);
};
