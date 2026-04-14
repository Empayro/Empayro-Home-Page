import { Outlet } from "react-router-dom";
import NavbarLanding from "../components/common/NavbarLanding";
import NavbarFooter from "../components/common/NavbarFooter";
import { useEffect, useState } from "react";

export default function LandingLayout() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <NavbarLanding theme={theme} setTheme={setTheme} />

      <Outlet />

      <NavbarFooter />
    </>
  );
}