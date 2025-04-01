import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <h3>Signup</h3>
      <div className="flex flex-col p-2 gap-2">
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="border-2 rounded-2xl "
          type="text"
          placeholder=" username"
          id="username"
        />
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="border-2 rounded-2xl "
          type="text"
          placeholder=" password"
          id="password"
        />
      </div>
      <button
      onClick={() => {
        axios.post("http://localhost:3000/api/user", {
            username,
            password
        });
      }}
        type="button"
        className="mt-8 w-full text-white bg-gray-800 
             focus:ring-4 focus:ring-gray-300 
             font-medium rounded-lg text-sm px-5 py-2.5 
             me-2 mb-2"
      >
        Sign up
      </button>
    </div>
  );
}
