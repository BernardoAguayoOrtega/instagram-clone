//import react
import React, { useState, useContext, useEffect } from 'react';
//import the context
import { Context } from '../../utils/Context';
//import auth
import { auth } from '../../utils/firebase';
//import logo
import Logo from '../../assets/Bernardogram.png';
//import Logo container
import { LogoContainer, Figure, getModalStyle, useStyles } from './styles';
//import material ui components
import { Modal as ModalMUI, Button, Input, FormGroup } from '@material-ui/core';

export const Modal = () => {
	//use the custom hook useStyles
	const classes = useStyles();
	//use state hooks
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
	//use context hook
	const {
		userName,
		setUserName,
		email,
		setEmail,
		password,
		setPassword,
		user,
		setUser,
	} = useContext(Context);

	//handle the open to modal
	const handleOpen = () => {
		setOpen(true);
	};

	//handle the close to modal
	const handleClose = () => {
		setOpen(false);
	};

	//signUp function
	const signUp = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((authUser) => {
				return authUser.user.updateProfile({
					displayName: userName,
				});
			})
			.catch((error) => alert(error.message));
	};

	//listen the user
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				//user has logged in
				setUser(authUser);
			} else {
				//user has logged out
				setUser(null);
			}
		});

		return () => {
			//perform some cleanup actions
			unsubscribe();
		};
	}, [setUser, userName]);

	return (
		<div>
			{/*Button to call the modal, depend of user display sign up or Log out*/}
			{user ? (
				<Button type='button' onClick={() => auth.signOut()}>
					Logout
				</Button>
			) : (
				<Button type='button' onClick={handleOpen}>
					Sign Up
				</Button>
			)}
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
						<Button type='submit' onClick={signUp}>
							Sign Up
						</Button>
					</FormGroup>
				</div>
			</ModalMUI>
		</div>
	);
};
