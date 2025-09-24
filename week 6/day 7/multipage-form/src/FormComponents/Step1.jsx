import { Formik, Form, Field, ErrorMessage } from "formik";
import { useFormStore } from "../store/useformStore";
import { Step1ValidationSchema } from "../validation/schemas";

const Step1 = () => {
    const { formData, updateFormData, nextStep } = useFormStore();


    const handleSubmit = (values) => {
        updateFormData(values);
        nextStep();
    }
    return (
        <Formik
            initialValues={formData}
            validationSchema={Step1ValidationSchema}
            onSubmit={handleSubmit}>
            <Form className="form-step">
                <h2>Step 1 Personal Information</h2>
                <div className="form-field-group">
                    <label htmlFor="name">Name</label>
                    <Field name="name" type="text" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                </div>

                <div className="form-field-group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                </div>
                <button type="submit">Next</button>
            </Form>
        </Formik>
    )

}
    export default Step1;