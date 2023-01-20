import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/index';
import  SigninPage  from "./Pages/SignIn/Signin"
import SigninPageUser from "./Pages/SignIn/SignInUser/SigninPageUser"
import SigninPagepass from "./Pages/SignIn/SignInAdmin/SigninPagepass"
import MainPage from "./Pages/Main"
import SignInAdminPage from './Pages/SignIn/SignInAdmin/SignInAdmin';
import AdminPage from './Pages/SignIn/SignInAdmin/Admin';
import Page from './Pages/Rechercheetfiltre/Lyes';
import AnnoncePage from './Pages/MyAI/annonce';
import DetailAI from './Pages/DetailAI/detailAI';
import Deposerai from './Pages/DeposerAI/deposerAI';





 function App() {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<SigninPage/>} />
      <Route path="/Signin/Signinuser" element={<SigninPageUser />} />
      <Route path="/Signin/SigninAdminPass" element={<SigninPagepass />} />
      <Route path="/Signin/SigninUser/Main" element={<MainPage />} />
      <Route path="/Signin/SigninAdminPass/SigninAdmin" element={<SignInAdminPage />} />
      <Route path="/Signin/SigninAdminPass/SigninAdmin/Admin" element={<AdminPage />} />
      <Route path="/Signin/SigninUser/Main/lyes" element={<Page />} />
      <Route path="/Signin/SigninUser/Main/annonce" element={<AnnoncePage />} /> 
      <Route path="/Signin/SigninUser/Main/lyes/detaiAI/:id" element={<DetailAI />} />
      <Route path="/Signin/SigninUser/Main/deposerai" element={<Deposerai />} />

      



    </Routes>
  );
}

export default App;
