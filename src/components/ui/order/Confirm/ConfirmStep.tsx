import React, {useContext} from 'react';
import "../step.scss"
import {OrderContext} from "../../../providers/OrderProvider";
import OrderTable from "./orderTable/OrderTable";
import {useNavigate} from "react-router-dom";
import locations from "../../../../locations";

interface ConfirmStepProps {
    onPrevious: () => void;
    onSubmit: () => void;
}

const ConfirmStep: React.FC<ConfirmStepProps> = ({onPrevious, onSubmit}) => {
    const context = useContext(OrderContext)
    const navigate = useNavigate()
    const handlePrevious = () => {
        onPrevious();
    };

    const handleSubmit = () => {
        onSubmit();

        alert("Order successfully created")

        navigate(locations.rootPath)
    };

    return (
        <div className={"step"}>
            <h2>Step 3: Confirm</h2>

            {context ?
                <>
                    <OrderTable cart={context.cart}/>

                    <div>Full price {context.getCartSum()}</div>

                    <div>
                        <span>Order address: </span>
                        <span>{context.address}</span>
                    </div>

                    <div>
                        <span>Order card: </span>
                        <span>{context.card.number.trimStart()}</span>
                    </div>
                </>
                : <></>}

            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleSubmit}>Confirm</button>
        </div>
    );
};

export default ConfirmStep;
