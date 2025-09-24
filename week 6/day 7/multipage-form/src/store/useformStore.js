import { create } from "zustand";

const initialState ={
    currentStep :1,
    formData:{
        name:'',
        email:'',
        address:'',
    },
};

export const useFormStore = create((set)=>({
    ...initialState,
    nextStep:()=>set((state)=>({currentStep:state.currentStep+1})),
    previousStep:()=>set((state)=>({currentStep: state.currentStep-1})),

    updateFormData: (newData)=>
        set((state)=>({formData:{...state.formData,...newData}})),

    resetForm:()=>set(initialState),
}))