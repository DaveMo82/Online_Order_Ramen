import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { FormEvent, useState } from "react";

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [closeForm, setCloseForm] = useState(true);


   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("http://localhost:8080/user", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then((response) => {
      alert("User created");
      setCloseForm(true);
      navigate("/login");
    });
  };
  
  

    const toggleClose = () => {
      setCloseForm(false);
      navigate("/");
    };

    return (
        <>
        <Menu />
        <div className="flex flex-col h-screen font-Rubik  justify-center items-center bg-container">
        <div className="border-4 rounded-xl w-96 min-h-96 relative backdrop-blur-md bg-white/60">
        <div
              className="absolute rounded-full top-2 left-2 cursor-pointer border-2 w-8 flex justify-center items-center "
              onClick={toggleClose}
            >
              X
            </div>
          <form onSubmit={handleSubmit} className="">
            <h1 className="mt-12 text-center text-4xl">Register</h1>
            <div className="flex flex-col justify-center items-center gap-4">
            <div className="mt-10">
                <input
                  placeholder="Name"
                  type="text"
                  className="border-2 rounded-xl pl-4"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="">
                <input
                  placeholder="E-Mail"
                  type="email"
                  className="border-2 rounded-xl pl-4"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <input
                  placeholder="Password"
                  type="password"
                  className="border-2 rounded-xl pl-4"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-12">
              <button type="submit" className="border-2 rounded-xl px-24 py-1 bg-button">
                Register
              </button>
              <Link to="/Login">
              <div className="mt-4 text-xs">
                Already have a account?<a href="" className="font-bold">Login</a>
              </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
      </>
    )
}

export default Register;