import { AdminFrame } from "./components/AdminFrame";
import { AuthAdmin } from "./components/AuthAdmin";
import { Login } from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { info } from "./features/auth/authSlice";
import { getMe } from "./features/auth/authFetch";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";
import Profile from "./components/Profile";
import { Welcome } from "./components/Welcome.js";
import { Users } from "./components/Users";
import { Trainers } from "./components/Trainers/Trainers.js";
import TrainersProfile from "./components/Trainers/TrainersProfile";
import { TrainersCV } from "./components/Trainers/TrainersCV";

function App() {
  const dispatch = useDispatch();
  const admin_information = useSelector(info);
  const nav = useNavigate();
  const [adminInfo, setAdminInfo] = useState({});

  const cookies = new Cookies();
  const token = cookies.get("token");
  useEffect(() => {
    dispatch(getMe(token));
  }, []);

  useEffect(() => {
    setAdminInfo(admin_information);
  }, [admin_information]);

  // useEffect(() => {
  //   adminInfo.isLoggedIn ? nav("/admin") : nav("/login");
  // }, [admin_information, nav]);
  //console.log(adminInfo,21)
  return (
    <div className="App">
      <Routes>
        {!admin_information.isLoggedIn ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route
            path="/"
            element={
              <AuthAdmin propsRole={adminInfo.role}>
                <AdminFrame />
              </AuthAdmin>
            }
          >
            <Route index element={<Welcome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/profile/:id" element={<Profile />} />

            <Route path="/trainers" element={<Trainers />} />
            <Route path="/trainers/CV/:id" element={<TrainersCV />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
