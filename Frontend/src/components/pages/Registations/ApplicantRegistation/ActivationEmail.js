import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { APIURL } from "../../../API/environment";

function ActivationEmail() {
  const { activation_token } = useParams();
  console.log(activation_token);
  useEffect(() => {
    if (activation_token) {
      try {
        axios
          .post(`${APIURL}/applicantReg/activate-email`, {
            activation_token,
          })
          .then((res) => {
            alert("Your Account is Created")
            console.log(res);
            toast.success(res.data.message);
            window.setTimeout(function() {
              window.location.href = '/login';
          }, 500);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
      }
    }
  });

  console.log(activation_token);
  return <div className="activate_page"></div>;
}

export default ActivationEmail;
