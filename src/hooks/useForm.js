import { useState, useEffect, useCallback } from 'react';

const useForm = (callback, initialValue, validate, modal, result) => {
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log('callback', callback);
  console.log('values', values);

/*   const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }; */

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }, [values]);

/*   const handleChange1 = e => {
    const { name, value } = e.target;
    setValues1({
      ...values1,
      [name]: value
    });
  }; */

/*   const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    setErrors(validate(values, modal));
    setIsSubmitting(true);
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    } 
  }; */

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log(values);
    setErrors(validate(values, modal));
    setIsSubmitting(true);
    /* if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    } */
  }, [modal, validate, values]);
  

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        console.log('callback1', callback);
        callback();
      }
    },
    [callback, errors, isSubmitting]
  );

  return { handleChange, handleSubmit, values, setValues, errors, setErrors };
};

export default useForm;