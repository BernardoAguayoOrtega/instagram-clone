//import styled components
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';

//create Figure component and export it
export const Figure = styled.figure`
  display:flex;
  align-items:center;
  justify-content:center;
`;

//create logo component and export it
export const LogoContainer = styled.img`
	width: 15rem;
  margin: 0 auto;
`;

//create and export login container
export const LoginContainer = styled.div`

`;

/**
 * @description: get the modal style (position)
 */
export function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

/**
 * @description: use custom hook to set the styles
 */
export const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		width: '40%',
		backgroundColor: theme.palette.background.paper,
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	input: {
		fontSize: '2rem',
	},
}));