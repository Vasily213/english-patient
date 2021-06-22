import { useState, useEffect, useCallback } from 'react';

const useForm1 = (callback, initialValue, validate, modal) => {
  const [values1, setValues1] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log('callback', callback);
  console.log('values1', values1);

/*   const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }; */


  const handleChange1 = useCallback((e) => {
    const { name, value } = e.target;
    setValues1({
      ...values1,
      [name]: value
    });
  }, [values1]);

  
  const handleSubmit1 = useCallback((e) => {
    e.preventDefault();
    console.log(values1);
    setErrors(validate(values1, modal));
    setIsSubmitting(true);
    /* if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    } */
  }, [modal, validate, values1]);

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange1, handleSubmit1, values1, setValues1, errors };
};

export default useForm1;