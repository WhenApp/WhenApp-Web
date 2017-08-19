import firebase from 'firebase';
import Promise from 'bluebird';
const config = {
  apiKey: "AIzaSyB37srB3yv1ExSkKcqzKDAhDR8wuXZ0dqw",
  authDomain: "taskkeeperapp.firebaseapp.com",
  databaseURL: "https://taskkeeperapp.firebaseio.com",
  projectId: "taskkeeperapp",
  storageBucket: "taskkeeperapp.appspot.com",
  messagingSenderId: "227314660464"
};
firebase.initializeApp(config);
firebase.Promise = Promise;
export default firebase;