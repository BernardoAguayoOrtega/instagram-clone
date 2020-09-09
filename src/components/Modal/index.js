//import react
import React, { useState, useContext, useEffect } from 'react';
//import the context
import { Context } from '../../utils/Context';
//import auth
import { auth } from '../../utils/firebase';
//import logo
import Logo from '../../assets/Bernardogram.png';
//import styled components and logic
import {
	LogoContainer,
	Figure,
	LoginContainer,
	getModalStyle,
	useStyles,
} from './styles';
//import material ui components
import { Modal as ModalMUI, Button, Input, FormGroup } from '@material-ui/core';

export const Modal = () => {
	//use the custom hook useStyles
	const classes = useStyles();
	//use state hooks
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);
	const [OpenSignIn, setOpenSignIn] = useState(false);
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

		setOpen(false);
	};

	//signIn function
	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(error));

		setOpenSignIn(false);
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
		<>
			{/*Button to call the modal, depend of user display sign up or Log out*/}
			{user ? (
				<Button type='button' onClick={() => auth.signOut()}>
					Logout
				</Button>
			) : (
				<LoginContainer>
					<Button type='button' onClick={() => setOpenSignIn(true)}>
						Sign In
					</Button>
					<Button type='button' onClick={() => setOpen(true)}>
						Sign Up
					</Button>
				</LoginContainer>
			)}
			{/*Modal from material ui but has ModalMUI name*/}
			<ModalMUI open={open} onClose={() => setOpen(false)}>
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
			{/*Modal from material ui but has ModalMUI name and modal for sign in*/}
			<ModalMUI open={OpenSignIn} onClose={() => setOpenSignIn(false)}>
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
						<Button type='submit' onClick={signIn}>
							Sign In
						</Button>
					</FormGroup>
				</div>
			</ModalMUI>
		</>
	);
};
