import firebaseApp from 'firebase';
import {firebaseConfig} from './firebase_constants';

const LOGIN_CACHE_KEY = 'isLoggedInV16';

const firebase = firebaseApp.initializeApp(firebaseConfig);
var db = firebase.firestore();
db.settings({timestampsInSnapshots: true}); // Disable deprecated features

const isLoggedIn = () => {
  return localStorage[LOGIN_CACHE_KEY] || false;
}

const getAllUsers = (email, password) => {
  return db.collection("users").get();
}

const signUp = ({create_first_name, create_middle_initial, create_last_name, create_email, create_password, create_company, create_street_address, create_city, create_state_address, create_zip_code, create_country}) => {
  return db.collection("users").add({
    first_name: create_first_name,
    middle_initial: create_middle_initial,
    last_name: create_last_name,
    email: create_email,
    password: create_password,
    company: create_company,
    street_address: create_street_address,
    city: create_city,
    state_address: create_state_address,
    zip_code: create_zip_code,
    country: create_country
  });
}

const handleSignInSuccess = () => {
  localStorage[LOGIN_CACHE_KEY] = true;
  window.location = "/home";
}

const handleSignOut = () => {
  localStorage[LOGIN_CACHE_KEY] = false;
  window.location = "/";
}

export default {
  isLoggedIn,
  getAllUsers,
  signUp,
  handleSignInSuccess,
  handleSignOut
};
