import { AdminFrame } from "./components/AdminFrame";
import { AuthAdmin } from "./components/AuthAdmin";
import { Login } from "./components/Login";
import { Routes, Route,useNavigate } from "react-router-dom";
import { useEffect } from "react";
function App() {

  const logged=false
  const nav = useNavigate()
  useEffect(()=>{
    logged ? nav("admin") : nav("/")
  })
  return (
    <div className="App">
      {/* <Login/>
      <AdminFrame/> */}
      <Routes>

        <Route index path="/" element={<Login />} />

        <Route path="/admin" element={<AuthAdmin />}>
          <Route index element={<AdminFrame />} />
        </Route>

       
      </Routes>
    </div>
  );
}

export default App;
