import { AdminFrame } from "./components/AdminFrame";
import { AuthAdmin } from "./components/AuthAdmin";
import { Login } from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { info } from "./features/auth/authSlice";
import { getMe } from "./features/auth/authFetch";
import Cookies from "universal-cookie";
import { useDispatch } from "react-redux";

import { Welcome } from "./components/Welcome.js";
import { Users } from "./components/Users";
import { TrainersReq } from "./components/Trainers/Trainer-Req/TrainersReq.js";
import { Trainers } from "./components/Trainers/Trainers/Trainers";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { TrainersCV } from "./components/Trainers/Trainer-Req/TrainersCV";
import { Subscriber } from "./Subscriber/Subscriber.js";
import SubscriberProfile from "./Subscriber/SubscriberProfile";
import { TrainerProfile } from "./components/Trainer Profile/TrainerProfile";

function App() {
  const dispatch = useDispatch();
  const admin_information = useSelector(info);

  const [adminInfo, setAdminInfo] = useState({});

  const cookies = new Cookies();
  const token = cookies.get("token");
  useEffect(() => {
    dispatch(getMe(token));
  }, []);

  useEffect(() => {
    setAdminInfo(admin_information);
  }, [admin_information]);

  return (
    <div className="App">
      <Routes>
        {!adminInfo.isLoggedIn ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route
            path="/"
            element={
              <AuthAdmin propsRole={"admin"}>
                <AdminFrame />
              </AuthAdmin>
            }
          >
            <Route index element={<Welcome />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/profile/:id" element={<ProfileCard />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="trainers/profile" element={<TrainerProfile />} />
            <Route path="/trainers-req" element={<TrainersReq />} />
            <Route path="/trainers-req/CV/:id" element={<TrainersCV />} />
            <Route path="/subscriber" element={<Subscriber />} />
            <Route
              path="/subscriber/profile/"
              element={<SubscriberProfile />}
            />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
