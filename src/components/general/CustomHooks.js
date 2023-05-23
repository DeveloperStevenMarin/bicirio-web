import { useState } from "react";

export function useForm(callback) {
  const [register, setRegister] = useState({});
  const handleChange = (event) => {
    event.persist();
    setRegister({
      ...register,
      [event.target.name]: event.target.value,
    });
    console.log(register);
  };
  function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    callback(register);
  }
  return {
    handleSubmit,
    handleChange,
    register,
  };
}
