import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function ActivationEmail() {
  const { activation_token } = useParams();
  console.log(activation_token);
  useEffect(() => {
    if (activation_token) {
      try {
        axios
          .post("http://localhost:8000/signupStudent/activate-email", {
            activation_token,
          })
          .then((res) => {
            console.log(res);
            toast.success(res.data.message);
            window.setTimeout(function() {
              window.location.href = '/login';
          }, 5000);
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (err) {
        //toast.error(err.response, data.message);
      }
    }
  });

  console.log(activation_token);
  return <div className="activate_page"></div>;
}

export default ActivationEmail;
