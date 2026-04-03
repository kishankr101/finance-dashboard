// src/App.jsx

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Firebase from 'firebase/app';
import 'firebase/auth';
import Dashboard from './Dashboard';
import Login from './Login';

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messaging-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseConfig);
}

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <Switch>
                {user ? (
                    <Route path="/" component={Dashboard} />
                ) : (
                    <Route path="/" component={Login} />
                )}
            </Switch>
        </Router>
    );
};

export default App;