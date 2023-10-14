import React, {useState} from 'react';
import "./step.scss"

interface AddressStepProps {
    onNext: () => void;
}

const AddressStep: React.FC<AddressStepProps> = ({onNext}) => {
    const [address, setAddress] = useState('');

    const handleNext = () => {
        onNext();
    };

    return (
        <div className={"step"}>
            <h2>Step 1: Address</h2>
            <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default AddressStep;
