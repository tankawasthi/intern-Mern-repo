import { Formik, Form, Field, ErrorMessage } from 'formik'; 
import { useFormStore } from "../store/useformStore"
import { Step2ValidationSchema } from "../validation/schemas";


const Step2 = () => {
    const { formData, updateFormData, nextStep, previousStep } = useFormStore();

    const handleSubmit = (values) => {
        updateFormData(values);
        nextStep();
    };
    return (
        <Formik
            initialValues={formData}
            validationSchema={Step2ValidationSchema}
            onSubmit={handleSubmit}>
            <Form className="form-step">
                <h2>Step 2: Address Details</h2>
                <div className="form-field-group">
                    <label htmlFor="address">Address</label>
                    <Field name="address" type="text" />
                    <ErrorMessage name="address" component="div" className="error-message" />
                </div>
                <div className="button-group">
                    <button type="button" onClick={previousStep} className="button-secondary">
                        Previous
                    </button>
                    <button type="submit">
                        Next
                    </button>
                </div>
            </Form>

        </Formik>
    );
};
export default Step2;
