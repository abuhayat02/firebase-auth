import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Root() {
  return (
    <div className="text-center">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
