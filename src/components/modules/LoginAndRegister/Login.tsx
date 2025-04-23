import React from "react";

type Props = {
    setisLogin : React.Dispatch<React.SetStateAction<boolean>>
};

function Login({setisLogin}: Props) {
  return (
    <div className="gap-4 flex flex-col">
      {" "}
      <p className="text-white text-center text-xl font-bold">
        welcome back <br />
        to A-<span className="text-green-400">Potify</span>
      </p>
      <input
        type="text"
        className="w-full h-10 rounded-md bg-black border border-gray-600 outline-none px-3 text-white"
        placeholder="username or gmail"
      />
      <input
        type="text"
        className="w-full h-10 rounded-md bg-black border border-gray-600 outline-none px-3 text-white"
        placeholder="password"
      />
      <input
        type="subit"
        className="w-full h-10 rounded-md bg-green-400 border border-gray-600 outline-none px-3  placeholder:text-black text-center"
        placeholder="login"
      />
      <p className="text-white text-center">
        Dont have an account?{" "}
        <span className="text-green-400 cursor-pointer" onClick={()=>setisLogin(false)}>Sign up</span>
      </p>
    </div>
  );
}

export default Login;
