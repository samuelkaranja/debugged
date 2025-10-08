import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLoginMutation } from "../store/slices/authApi";

const Login: React.FC = () => {
  const [googleLogin, { isLoading }] = useGoogleLoginMutation();

  const handleGoogleSuccess = async (credentialResponse: any) => {
    const token = credentialResponse.credential;
    if (!token) return;

    try {
      const res = await googleLogin({ token }).unwrap();
      console.log("User:", res.user);
      localStorage.setItem("access_token", res.access);
      alert(`Welcome, ${res.user.name}!`);
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] mx-auto">
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={() => console.log("Login Failed")}
      />
      {isLoading && <p className="mt-4 text-gray-500">Logging in...</p>}
    </div>
  );
};

export default Login;
