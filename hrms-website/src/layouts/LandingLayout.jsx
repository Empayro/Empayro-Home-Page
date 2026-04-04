import { Outlet } from "react-router-dom";
import NavbarLanding from "../components/common/NavbarLanding";
import NavbarFooter from "../components/common/NavbarFooter";

export default function LandingLayout() {
  return (
    <>
      <NavbarLanding />

      <Outlet />

      <NavbarFooter />
    </>
  );
}
