"use client";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  //make hook for set themes here this useTheme()return object witch contained cureent theme
  //function for set theme and system theme
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {/* conditionally render the theme icons  */}
      {currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className=" text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className=" text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
}
