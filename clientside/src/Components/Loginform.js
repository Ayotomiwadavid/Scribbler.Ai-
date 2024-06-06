import React, { useRef, useState } from "react";
import Button from "./ui/Button";
import Input from "./forms/Input";
import Container from "./global/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Loginform = () => {
  let authForm = useRef();

  let [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Debugging statements
    console.log(`Field name: ${name}, Field value: ${value}`);

    // Ensure name is a valid property in userDetails
    if (name in userDetails) {
      setUserDetails((prevValue) => ({
        ...prevValue,
        [name]: value,
      }));
    } else {
      console.warn(`Unhandled field: ${name}`);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(userDetails);
    // Add form submission logic here
  };

  return (
    <Container>
      <div className="flex justify-center items-center -mx-3 py-10">
        <div className="w-full flex items-center justify-center xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3">
          <section className="w-full bg-white rounded-md flex flex-col px-4 items-center justify-center">
            <div className="w-full py-3 items-start flex flex-col justify-center">
              <h1 className="text-lg capitalize font-bold font-sans text-[#334155]">
                login
              </h1>
              <p className="font-semibold text-[13px] text-[#64748B]">
                With valid credentials
              </p>
            </div>
            <form className="w-full">
              <Input
                labelText="email address"
                inputId="emailAdress"
                inputName="email"
                inputType="email"
                inputPlaceholder="Example@email.com"
                inputValue="hshshsh"
                formType='login'
              />
              <Input
                labelText="password"
                inputId="password"
                inputName="password"
                inputType="password"
                inputPlaceholder="password"
                inputValue="ddjdjdj"
                formType='login'
              />
              <Button buttonType="submit" buttonContent="account login" />
              <div className="mt-5 mb-2">
                <h6 className="text-slate-400 text-[11px] uppercase text-center font-bold tracking-wider">
                LOGIN WITH
                </h6>
              </div>
              <div className="flex w-full items-center gap-4 py-4 mb-4 justify-between">
                <button className="w-[45%] flex items-center justify-center gap-3 py-1 outline-none h-[35px] rounded-md border-[1px] border-[#475569]">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    style={{
                      color: "#475569",
                      fontSize: "15px",
                    }}
                  />
                  <p>Google</p>
                </button>
                <button className="w-[45%] flex items-center justify-center gap-3 py-1 outline-none h-[35px] rounded-md border-[1px] border-[#475569]">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{
                      color: "#475569",
                      fontSize: "15px",
                    }}
                  />
                  <p>Facebook</p>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Loginform;
