import React, {useContext, useState} from 'react';
import AddressStep from './AddressStep';
import CardDataStep from './CardDataStep';
import ConfirmStep from './Confirm/ConfirmStep';
import './threeStepForm.scss';
import {CartContext} from "../../providers/CartProvider";

const ThreeStepForm: React.FC = () => {
    const context = useContext(CartContext)

    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleSubmit = () => {
        if (context) {
            context.updateCart([])
        }
    };

    return (
        <div className={"container"}>
            {step === 1 && <AddressStep onNext={handleNext}/>}
            {step === 2 && <CardDataStep onPrevious={handlePrevious} onNext={handleNext}/>}
            {step === 3 && <ConfirmStep onPrevious={handlePrevious} onSubmit={handleSubmit}/>}
        </div>
    );
};

export default ThreeStepForm;
