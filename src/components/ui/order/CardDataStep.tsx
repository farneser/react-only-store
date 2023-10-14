import React, { useState } from 'react';
import "./step.scss"

interface CardDataStepProps {
    onPrevious: () => void;
    onNext: () => void;
}

const CardDataStep: React.FC<CardDataStepProps> = ({ onPrevious, onNext }) => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');

    const handlePrevious = () => {
        onPrevious();
    };

    const handleNext = () => {
        onNext();
    };

    return (
        <div className={"step"}>
            <h2>Step 2: Card Data</h2>
            <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
                type="text"
                placeholder="Expiry Date"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
            />
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default CardDataStep;
