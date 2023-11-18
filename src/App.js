import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from'./pages/Inicio'
import DashBoard from './layout/dashboard/Dashboard' 
import {NextUIProvider} from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  </BrowserRouter>
  </NextUIProvider>
  );
}

export default App;
