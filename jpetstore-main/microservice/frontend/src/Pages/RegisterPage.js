import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AccountPageForm } from "../Components";
import { signUp } from "../Store/Actions/auth.actions";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signUpResult, errorInSignup } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    userId: "",
    password: "",
    repeatPassword: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    addr1: "",
    addr2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    languagePreference: "",
    favcategory: "",
    bannername: "",
    listOption: false,
    bannerOption: false,
  });

  const handleInputField = (name) => (e) => {
    e.preventDefault();
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [name]: !formData[name],
      });
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };

  useEffect(() => {
    if (errorInSignup === false && signUpResult !== null) {
      // navigate("/signin");
    }
  }, [signUpResult]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.repeatPassword === "" || formData.password === "") {
      alert("password and repeat password can't be null");
    } else if (formData.password !== formData.repeatPassword) {
      alert("password and repeat password should be same");
    } else {
      dispatch(signUp.request(formData));
    }
  };

  return (
    <>
      <AccountPageForm
        setFormData={setFormData}
        formData={formData}
        handleInputField={handleInputField}
        submitHandler={submitHandler}
        readOnly={false}
      />
    </>
  );
};

export default RegisterPage;
