import { useState, useEffect } from 'react';
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from 'firebase/auth';
import swal from 'sweetalert';

initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [authToken, setAuthToken] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // signin with Google
  const signWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const redirectUrl = location?.state?.from || '/home';
        navigate(redirectUrl);

        setUser(user);
        saveUser(user.email, user.displayName, 'PUT');
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // registration for new user
  const registerNewUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        // Signed in
        setUser(newUser);
        // save user to database
        saveUser(email, name, 'POST');

        //Auth Erros
        setAuthError('');

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            // An error occurred
          });

        if (result) {
          swal('Registration Successfull', 'Please Login', 'success');
          userLogOut();
          navigate('/login');
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // login existing user

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // redirect location
        const redirectUrl = location?.state?.from || '/home';
        navigate(redirectUrl);
        // Signed in
        setUser(result.user);

        setAuthError('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setAuthToken(idToken);
        });
      } else {
        // User is signed out
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // checking admin or not
  useEffect(() => {
    fetch(`https://quiet-plains-12612.herokuapp.com/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user?.email]);

  const userLogOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // save user information to database

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://quiet-plains-12612.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then();
  };

  return {
    user,
    admin,
    authToken,
    authError,
    isLoading,
    registerNewUser,
    loginUser,
    userLogOut,
    signWithGoogle,
  };
};

export default useFirebase;
