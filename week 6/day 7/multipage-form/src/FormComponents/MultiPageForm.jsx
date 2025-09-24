import { useFormStore } from "../store/useformStore";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiPageForm = () => {
    const { currentStep } = useFormStore();

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            default:
                return null;
        }
    };
    return (
        <div className="multi-page-form-container">
            <div className="form-header">
                <h1>Multi-Page Form</h1>
                <div className="step-indicator">Step {currentStep} of 3</div>
            </div>
            {renderStep()}
        </div>
    );
};
export default MultiPageForm;