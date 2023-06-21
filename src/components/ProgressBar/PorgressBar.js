const ProgressBar = (props) => {
    return (
        <div className="progress_bar steps_bar mt-3 ps-5 d-inline-block">
            <div className={`step rounded-pill d-inline-block text-center position-relative ${props.step === 1 ? "active current" : ""}`}>1</div>
            <div className={`step rounded-pill d-inline-block text-center position-relative ${props.step === 2 ? "active current" : ""}`}>2</div>
            <div className={`step rounded-pill d-inline-block text-center position-relative ${props.step === 3 ? "active current" : ""}`}>3</div>            
            <div className={`step rounded-pill d-inline-block text-center position-relative ${props.step === 4 ? "active current" : ""}`}>4</div>
            <div className={`step rounded-pill d-inline-block text-center position-relative ${props.step === 5 ? "active current" : ""}`}>5</div>
            <div className={`step rounded-pill d-inline-block text-center position-relative ${props.step === 6 ? "active current" : ""}`}>6</div>
         </div>
    );
}

export default ProgressBar;