import React from 'react';
import "./step.scss"

interface ConfirmStepProps {
    onPrevious: () => void;
    onSubmit: () => void;
}

const ConfirmStep: React.FC<ConfirmStepProps> = ({ onPrevious, onSubmit }) => {
    const handlePrevious = () => {
        onPrevious();
    };

    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <div className={"step"}>
            <h2>Step 3: Confirm</h2>
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleSubmit}>Confirm</button>
        </div>
    );
};

export default ConfirmStep;
