import React from "react";
import { useState } from "react";
import InputComponent from "../../common/Input";
import Button from "../../common/Button";
import { auth, db, storage } from "../../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUser } from "../../../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm() {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async () => {
    console.log("Handling");
    setLoading(true);
    if (password == confirmPassword && password.length >= 6 && fullname && email) {
      try {
        //Creating users account
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log(user);

        //saving users account
        await setDoc(doc(db, "users", user.uid), {
          name: fullname,
          email: user.email,
          uid: user.uid,
          // profilePic: fileURL,
        });

        //save the data in redux, call the redux action
        dispatch(
          setUser({
            name: fullname,
            email: user.email,
            uid: user.uid,
          })
        );
        toast.success("User has been created!");
        setLoading(false);
        navigate("/profile");
      } catch (e) {
        console.log("error", e);
        toast.error(e.message);
        setLoading(false);
      }
    } else {
      if (password != confirmPassword) {
        toast.error("Ensure Password and Confirm Password match!");
      } else if (password.length > 6) {
        toast.error("Ensure Password length is greater than 6");
      }
      setLoading(false);
    }
  };

  return (
    <>
      <InputComponent
        state={fullname}
        setState={setFullName}
        placeholder="Full Name"
        type="text"
        required={true}
      />
      <InputComponent
        state={email}
        setState={setEmail}
        placeholder="Email"
        type="text"
        required={true}
      />
      <InputComponent
        state={password}
        setState={setPassword}
        placeholder="Password"
        type="password"
        required={true}
      />
      <InputComponent
        state={confirmPassword}
        setState={setConfirmPassword}
        placeholder="Confirm Password"
        type="password"
        required={true}
      />
      <Button text={loading ? "Loading..." : "Sign Up"} disabled={loading} onClick={handleSignUp} />
    </>
  );
}

export default SignupForm;
