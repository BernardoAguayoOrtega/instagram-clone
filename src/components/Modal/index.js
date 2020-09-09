//import react
import React, { useState } from 'react';
//import material ui components
import { Modal as ModalMUI, makeStyles } from '@material-ui/core';

//modal logic
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


//create and export modal component
export const Modal = () => {
  //use state hook
  const [open, setOpen] = useState(false);
  //use styles hook
  const classes = useStyles();

	return (
		<ModalMUI open={open} onClose={() => setOpen(false)}>
			<>
				<h1>I'm the modal</h1>
			</>
		</ModalMUI>
	);
};
