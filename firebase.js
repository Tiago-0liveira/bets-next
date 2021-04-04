import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAtM3MucRz2L0reJxtLyEZm4jHXjQRS6Ak",
	authDomain: "bets-next.firebaseapp.com",
	projectId: "bets-next",
	storageBucket: "bets-next.appspot.com",
	messagingSenderId: "662910217375",
	appId: "1:662910217375:web:c57d00107958df06a4c6aa",
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
