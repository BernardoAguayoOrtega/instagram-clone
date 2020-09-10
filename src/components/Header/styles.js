//import styled components
import styled from 'styled-components';

//create and export Header container
export const HeaderContainer = styled.div`
	background-color: white;
	padding: 1rem;
	border-bottom: 0.1rem solid lightgray;
	display:flex;
	align-items: center;
	justify-content: space-between;
	position: sticky;
	top: 0;
	z-index: 2;
`;

//create logo component and export it
export const LogoContainer = styled.img`
	width: 20rem;
`;
