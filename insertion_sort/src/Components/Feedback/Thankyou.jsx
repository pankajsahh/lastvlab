import React from "react";
import email from "./images.png";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center content-center pb-5 static">
            <div className="m-0 p-2 inline-block">
                <img
                    className="h-48 text-center inline-block p-5 ml-10"
                    src={email}
                    alt="Can't load"
                ></img>
                <h1 className="text-3xl font-bold mt-4 mb-4 text-center text-slate-500 ">
                    Thanks for Submitting!
                </h1>
                <p className="text-lg text-center text-slate-700">
                    Your feedback has been sent.
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-7 mx-24"
                    onClick={() => navigate("/")}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default Thankyou;
