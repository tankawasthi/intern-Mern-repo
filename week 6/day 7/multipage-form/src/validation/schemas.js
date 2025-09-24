import * as Yup from 'yup';

export const Step1ValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email:Yup.string().email('Invalid email').required('Email is required'),
});

export const Step2ValidationSchema = Yup.object().shape({
    address:Yup.string().required('Address is required'),
});