//import react
import React, { createContext, useState } from 'react';

//create context and export it
export const Context = createContext();

//create functional component context provider and export it
export const ContextProvider = ({ children }) => {
	//use state
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [user, setUser] = useState(null);

	return (
		<Context.Provider
			value={{
				userName,
				setUserName,
				email,
				setEmail,
				password,
				setPassword,
				user,
				setUser,
			}}>
			{children}
		</Context.Provider>
	);
};
