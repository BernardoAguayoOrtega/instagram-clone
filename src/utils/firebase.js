//import everything as firebase
import * as firebase from 'firebase/app';
//import firebase dependencies
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

firebase.initializeApp({
	apiKey: 'AIzaSyAku9_PcVLMnxG8fdrgD4BWADFaHgf3xrU',
	authDomain: 'instagram-c4b27.firebaseapp.com',
	databaseURL: 'https://instagram-c4b27.firebaseio.com',
	projectId: 'instagram-c4b27',
	storageBucket: 'instagram-c4b27.appspot.com',
	messagingSenderId: '211353144273',
	appId: '1:211353144273:web:a8950cbd81ded6b5f0eef0',
});

//export data base
export const db = firebase.firestore();

//export data base
export const storage = firebase.storage();

//export data base
export const auth = firebase.auth();

//export timestamp
export const timestamp = firebase.firestore.FieldValue.serverTimestamp