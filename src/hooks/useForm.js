import {useState, useEffect} from 'react'

function useForm(callback, validate) {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const [isSubmiting, setSubmiting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmiting) {
            callback();
        }
    }, [errors]) 

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setSubmiting(true);
    }

    const handleChange = (event) => {
        setValues(valuses => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }

}

export default useForm;