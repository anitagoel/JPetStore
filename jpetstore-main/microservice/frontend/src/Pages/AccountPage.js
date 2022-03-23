import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  getAccountByUserId,
  getProfileByUserId,
  updateAccount,
} from "../Store/Actions/auth.actions";

import { AccountPageForm } from "../Components";

const AccountPage = () => {
  const dispatch = useDispatch();
  const { accountDetails, cred, profileDetails, bannerData } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getAccountByUserId.request(cred.username));
    dispatch(getProfileByUserId.request(cred.username));
  }, []);

  useEffect(() => {
    setFormData({
      userId: cred.username,
      password: "",
      repeatPassword: "",
      fName: accountDetails.firstName,
      lName: accountDetails.lastName,
      email: accountDetails.email,
      phone: accountDetails.phone,
      addr1: accountDetails.address1,
      addr2: accountDetails.address2,
      city: accountDetails.city,
      state: accountDetails.state,
      zip: accountDetails.zip,
      country: accountDetails.country,
      languagePreference: profileDetails.languagePreference,
      favcategory: profileDetails.favouriteCategoryId,
      bannername: profileDetails.bannerData,
      listOption: profileDetails.listOption,
      bannerOption: profileDetails.bannerOption,
    });
  }, [accountDetails, profileDetails, bannerData]);

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password !== formData.repeatPassword) {
      alert("password and repeat password should be same");
    } else {
      // TODO: create new action "update account" to update profile instead of signup
      dispatch(updateAccount.request(formData));
    }
  };

  return (
    <>
      <AccountPageForm
        setFormData={setFormData}
        formData={formData}
        handleInputField={handleInputField}
        submitHandler={submitHandler}
        readOnly={true}
      />

      <div className="mx-auto text-center mt-4 mb-4">
        <Link
          to="/order/all"
          className="text-center btn-primary btn text-light"
        >
          My Orders
        </Link>
      </div>
    </>
  );
};

export default AccountPage;
