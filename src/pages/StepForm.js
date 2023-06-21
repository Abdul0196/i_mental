import { useState } from 'react';

import StepBarContent from '../components/StepBarContent/StepBarContent';
import ProgressBar from '../components/ProgressBar/PorgressBar';
import StepFormContent from '../components/StepForm/StepForm';

import '../style.css';

const StepForm = () => {
    const [stepNumber, setStepNumber] = useState(1)
    const stepNumberHandler = (num) => {
        setStepNumber(num)
    }

    return (
        <div className='wrapper position-relative'>
            <div className='container-fluid px-5'>
                <StepBarContent />
                <ProgressBar step={stepNumber} />
                <StepFormContent step={stepNumberHandler} />
            </div>
        </div>
    );
}

export default StepForm;