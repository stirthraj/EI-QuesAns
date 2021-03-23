import { useState } from "react";
import Head from "./component/head";
import Loginform from "./component/loginform";
import "./Head.css";

function App() {
  let islogin = false;
  const user = "Raj";
  const pass = "12345";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandle = (event) => {
    event.preventDefault();
    islogin = username === user ? 1 : 0;
    islogin = password === pass ? 1 : 0;
    localStorage.setItem("key", islogin);
    localStorage.setItem("username",username);
    if (!islogin) setError("Oops,incorrect credentials.");
    window.location.reload();
  };

  if (parseInt(localStorage.getItem("key"))) {
    return (
      <>
        <Head name="EDUWHEEL INDIA" />
        <Loginform />
        <Head name="Desgin by Tirth Raj Kumar" />
      </>
    );
  } else {
    return (
      <>
        <Head name="EDUWHEEL INDIA" />
        <div className="bg-dark">
          <div className="container-fluid text-center row">
            <form onSubmit={onSubmitHandle}>
              <div className="col-lg-6 my-3 mx-auto">
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="USERNAME"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-lg-6 mb-3 mx-auto">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <h6 className="bg-danger">{error}</h6>
              </div>

              <div className="mb-3">
                <button className="btn btn-primary m-1" type="submit">
                  Submit
                </button>
                <button className="btn btn-warning m-1" type="reset">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <Head name="Desgin by Tirth Raj Kumar" />
      </>
    );
  }
}
export default App;
