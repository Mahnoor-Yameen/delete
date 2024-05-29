import axios from 'axios'
import { AccountContextVariable } from '../../GlobalContext/AccountContext'
import React, { useState, useContext } from 'react'
import Swal from 'sweetalert2'
import { AppRoute } from '../../App'
import { Link } from 'react-router-dom'


export default function Register() {


    const { account_state, account_dispatch } = useContext(AccountContextVariable)
    //for form
    const [UserName, setUserName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
  const [errors, setErrors] = useState({});     //validation k liye normal walidation


    const validateForm = () => {
        const errors = {};
    
        if ( !UserName.trim()) {
          errors.UserName = 'UserName is required';
        }
        if ( !Email.trim()) {
          errors.Email = 'Email is required';
        }
        if ( !Password.trim()) {
          errors.Password = 'Password is required';
        }
        
    
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      };

    const [loading, setLoading] = useState(false);


    const RegisterUser = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
          }

        const payload = {
            UserName: UserName,
            Email: Email,
            Password: Password
        };

        setLoading(true);

        try {
            const RegisterResponse = await axios.post(`${AppRoute}api/register-user`, payload);
            console.log("Register response:", RegisterResponse);

            const AfterRegisterLogin = {
                Email: Email,
                Password: Password
            };

            const json = await axios.post(`${AppRoute}api/login-user`, AfterRegisterLogin);
            console.log(json.data.token); // yahan hamara token agaya
            Swal.fire({
                title: 'Account Created',
                text: 'Thank you for Opening Account',
                confirmButtonText: 'Continue'
            });
            account_dispatch({
                type: "LOGIN",
                token: json.data.token,
                Email: Email,

            });


        } catch (error) {
            console.error("Account creation failed:", error);
            // Handle error if necessary
        }

        setLoading(false);
    };



    return (

        <div style={{ backgroundColor: "#ffecf1" }}>
            (

            <div className="d-flex flex-column ms-5">



                <h2 className='text-center pt-5'>Create Your Account:</h2>


                <div className='container d-flex justify-content-center my-5'>

                    <form className="" onSubmit={RegisterUser}>
                        <div className="title my-2">Username:</div>
                        <input
                            className="form-control"
                            placeholder="Name"
                            type="name"
                            value={UserName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {errors.UserName && <small className="text-danger">{errors.UserName}</small>}

                        <div className="title my-2">Email Address:</div>

                        <input
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            type="email"
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.Email && <small className="text-danger">{errors.Email}</small>}

                        <div className="title my-2">Set your Password:</div>

                        <input
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            type="password"
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.Password && <small className="text-danger">{errors.Password}</small>}

                        <div>

                            <button type="submit" disabled={loading} className='btn btn-dark me-3 mt-3 w-100'>
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </div>
                    </form>
                </div>

                <div className="text-sm text-center my-5">
                    Already have an account? {'   '}
                    <Link to={'/login'} className="text-decoration-none text-center text-sm hover:underline font-bold">Continue</Link>
                </div>


                <div className="text-center">
                <svg
  version="1.1"
  id="Layer_1"
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 512 512"
  xmlSpace="preserve"
  width="25wv"
  height="25vh"
  fill="#000000"
>
  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
  <g id="SVGRepo_iconCarrier">
    {" "}
    <rect
      x="86.204"
      y="307.785"
      style={{ fill: "#CAF9F4" }}
      width="47.02"
      height="29.257"
    />{" "}
    <path
      style={{ fill: "#ca68b8" }}
      d="M493.714,249.788h-15.673v-57.469h15.673c5.771,0,10.449,4.678,10.449,10.449v36.571 C504.163,245.11,499.485,249.788,493.714,249.788z"
    />{" "}
    <rect
      x="156.212"
      y="51.779"
      style={{ fill: "#FFFFFF" }}
      width="22.988"
      height="94.041"
    />{" "}
    <path
      style={{ fill: "#FFD85C" }}
      d="M178.155,124.922h-20.898c-5.771,0-10.449-4.678-10.449-10.449V83.126 c0-5.771,4.678-10.449,10.449-10.449h20.898c5.771,0,10.449,4.678,10.449,10.449v31.347 C188.604,120.244,183.926,124.922,178.155,124.922z"
    />{" "}
    <path
      style={{ fill: "#e5b8d7" }}
      d="M49.633,166.718v141.061h120.163v-52.245c0-11.542,9.356-20.898,20.898-20.898H336.98 c11.542,0,20.898,9.356,20.898,20.898V401.82h120.163v-256H70.531C58.989,145.82,49.633,155.176,49.633,166.718z"
    />{" "}
    <g>
      {" "}
      <circle
        style={{ fill: "#FFFFFF" }}
        cx="417.959"
        cy="221.058"
        r="22.988"
      />{" "}
      <circle style={{ fill: "#FFFFFF" }} cx="417.959" cy="304.65" r="22.988" />{" "}
    </g>{" "}
    <rect
      x="70.531"
      y="433.172"
      style={{ fill: "#ca68b8" }}
      width="407.51"
      height="27.052"
    />{" "}
    <path
      style={{ fill: "#e5b8d7" }}
      d="M478.041,433.167H23.51c-8.656,0-15.673-7.018-15.673-15.673l0,0c0-8.656,7.018-15.673,15.673-15.673 h454.531V433.167z"
    />{" "}
    <path d="M493.714,184.481h-7.837v-46.498H187.037v-7.54c5.603-3.128,9.404-9.112,9.404-15.97V83.126 c0-6.86-3.801-12.842-9.404-15.97V43.943h-38.661v23.213c-5.603,3.128-9.404,9.112-9.404,15.97v31.347 c0,6.859,3.801,12.842,9.404,15.97v7.54H70.531c-15.845,0-28.735,12.891-28.735,28.735v148.898h36.571v29.257h23.51v24.815h15.673 v-24.815h23.51v-29.257h36.571v-60.082c0-7.202,5.859-13.061,13.061-13.061H336.98c7.202,0,13.061,5.859,13.061,13.061v138.449 H23.51c-12.964,0-23.51,10.547-23.51,23.51s10.546,23.51,23.51,23.51h39.184v27.053h423.184V257.624h7.837 c10.082,0,18.286-8.204,18.286-18.286v-36.571C512,192.684,503.796,184.481,493.714,184.481z M157.257,117.086 c-1.44,0-2.612-1.171-2.612-2.612V83.126c0-1.441,1.172-2.612,2.612-2.612h20.898c1.44,0,2.612,1.171,2.612,2.612v31.347 c0,1.441-1.172,2.612-2.612,2.612H157.257z M171.363,59.616v5.224h-7.314v-5.224H171.363z M164.049,132.759h7.314v5.224h-7.314 V132.759z M125.388,329.2H94.041v-13.584h31.347V329.2z M15.673,417.494c0-4.322,3.515-7.837,7.837-7.837h446.694v15.673H23.51 C19.189,425.33,15.673,421.814,15.673,417.494z M470.204,452.383H78.367v-11.38h391.837V452.383z M365.714,393.983V255.534 c0-15.844-12.89-28.735-28.735-28.735H190.694c-15.845,0-28.735,12.891-28.735,28.735v44.408H117.9v-97.437h-15.673v97.437H57.469 V166.718c0-7.202,5.859-13.061,13.061-13.061h399.673v240.327H365.714z M496.327,239.339c0,1.441-1.172,2.612-2.612,2.612h-7.837 v-41.796h7.837c1.44,0,2.612,1.171,2.612,2.612V239.339z" />{" "}
    <path d="M417.959,251.877c16.996,0,30.824-13.827,30.824-30.824s-13.828-30.824-30.824-30.824s-30.824,13.827-30.824,30.824 S400.963,251.877,417.959,251.877z M417.959,205.902c8.354,0,15.151,6.797,15.151,15.151s-6.797,15.151-15.151,15.151 s-15.151-6.797-15.151-15.151S409.605,205.902,417.959,205.902z" />{" "}
    <path d="M417.959,273.82c-16.996,0-30.824,13.827-30.824,30.824s13.828,30.824,30.824,30.824s30.824-13.827,30.824-30.824 S434.955,273.82,417.959,273.82z M417.959,319.796c-8.354,0-15.151-6.797-15.151-15.151c0-8.354,6.797-15.151,15.151-15.151 s15.151,6.797,15.151,15.151C433.11,312.999,426.313,319.796,417.959,319.796z" />{" "}
  </g>
</svg>
                    <h4 className="mt-1 mb-5 pb-1">We are The Stichers!</h4>
                </div>
            </div>




            <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4 text-dark">We are more than just a Boutique!</h4>
                    <p className="small mb-0 text-dark">We Follow the Traditions, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

            </div>


            )
        </div>
    )
}

