import { FormEvent, useState } from "react";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [closeForm, setCloseForm] = useState(true);

  const toggleClose = () => {
    setCloseForm(false);
    navigate("/");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const bodyData = {
      username: username,
      password: password,
    };

    fetch("http://localhost:8080/login", {
      method:"post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bodyData)
    })
    .then((response) => response.json())
    .then(() => {
      if (username.trim() !== "") { 
        localStorage.setItem("username", JSON.stringify(username));
      }
      alert("Login success");
      navigate("/");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <>
      <Menu />
      {closeForm && (
        <div className="flex flex-col h-screen font-Rubik  justify-center items-center bg-container">
          <div className="border-4 rounded-xl w-96 min-h-96 relative backdrop-blur-md bg-white/60">
            <div
              className="absolute rounded-full top-2 left-2 cursor-pointer border-2 w-8 flex justify-center items-center "
              onClick={toggleClose}
            >
              X
            </div>
            <form onSubmit={handleSubmit} className="">
              <h1 className="mt-8 text-center text-4xl">Login</h1>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="mt-12">
                  <input
                    placeholder="Username"
                    type="text"
                    className="border-2 rounded-xl pl-4"
                    onChange={(event) => setUsername(event.target.value)}
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
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-right mr-14 my-2 text-xs cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="flex flex-col justify-center items-center mt-6">
                <button
                  type="submit"
                  className="border-2 rounded-xl px-28 py-1 bg-button"
                >
                  Login
                </button>
                <Link to="/Register">
                  <div className="mt-4 text-xs">
                    Don't have a account?
                    <a href="" className="font-bold">
                      Register
                    </a>
                  </div>
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
