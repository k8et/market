import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebaseApp from "../firebase/config";
import Button from "./Button";
import Alert from "./Alert";

const SubscribeBtn = () => {
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubscribe = async () => {
        if (!email) {
            console.error('Email field cannot be empty');
            return;
        }

        try {
            const db = getFirestore(firebaseApp);
            const subscribersCollection = collection(db, 'Subscribers');
            await addDoc(subscribersCollection, { email });
            setShowAlert(true);
            setEmail('');
        } catch (error) {
            console.error('An error occurred while subscribing:', error);
        }
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="flex gap-2.5 items-center justify-center w-full">
            <input
                className="p-2 w-full border-2 border-g rounded text-xl"
                placeholder="Your email"
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Button text="SUBSCRIBE" onClick={handleSubscribe} />
            {showAlert && (
                <Alert
                    type="success"
                    message="Subscription successful!"
                    onClose={handleCloseAlert}
                />
            )}
        </div>
    );
};

export default SubscribeBtn;
