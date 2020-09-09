//import react
import React, { useState } from 'react';
//import logo
import Logo from '../../assets/Bernardogram.png';
//import Logo container
import { LogoContainer, Figure } from './styles';
//import material ui components
import {
	Modal as ModalMUI,
	makeStyles,
	Button,
	Input,
	FormGroup,
} from '@material-ui/core';

/**
 * @description: get the modal style (position)
 */
function getModalStyle() {
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
const useStyles = makeStyles((theme) => ({
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

export const Modal = () => {
	//use the custom hook useStyles
	const classes = useStyles();
	//use state hooks
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//handle the open to modal
	const handleOpen = () => {
		setOpen(true);
	};

	//handle the close to modal
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			{/*Button to call the modal*/}
			<Button type='button' onClick={handleOpen}>
				Sign Up
			</Button>
			{/*Modal from material ui but has ModalMUI name*/}
			<ModalMUI open={open} onClose={handleClose}>
				<div style={modalStyle} className={classes.paper}>
					{/*Figure and Logo from styled components*/}
					<Figure>
						<LogoContainer src={Logo} />
					</Figure>
					{/*Form group to style the inputs*/}
					<FormGroup>
						{/*Inputs*/}
						<Input
							className={classes.input}
							type='text'
							placeholder='User name'
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<Input
							className={classes.input}
							type='text'
							placeholder='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<Input
							className={classes.input}
							type='password'
							placeholder='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button type='button' onClick={handleClose}>
							Sign Up
						</Button>
					</FormGroup>
				</div>
			</ModalMUI>
		</div>
	);
};