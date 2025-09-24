import { useFormStore } from "../store/useformStore"

const Step3 = () => {
    const { formData, previousStep, resetForm } = useFormStore();

    const handleFinalSubmit = () => {
        console.log('final Submission:', formData);
        alert('form submitted SucessFully!');
        resetForm();
    }
    return (
        <div className="form-step">
            <h2>Step 3: Review and Submit</h2>
            <div className="review-data">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Address:</strong> {formData.address}</p>
            </div>
            <div className="button-group">
                <button onClick={previousStep} className="button-secondary">
                    Previous
                </button>
                <button onClick={handleFinalSubmit} className="button-success">
                    Submit Form
                </button>
            </div>
        </div>
    );
};

export default Step3;