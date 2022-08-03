import React from "react";
import { useTheme } from "next-themes";

import { MoonIcon } from "@heroicons/react/solid";
import { MoonIcon as MoonOutlineIcon } from "@heroicons/react/outline";

function NavBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="bg-white dark:bg-darkBlue w-screen h-20 px-12 sticky top-0 p-6 z-10 dark:shadow-xl flex justify-between"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <p className="font-bold text-xl text-veryDarkBlue dark:text-white">
        Where in the world?
      </p>
      <div className="flex justify-between items-center  text-veryDarkBlue dark:text-white">
        {theme === "light" ? (
          <>
            <MoonOutlineIcon className="w-5 " />
            <p className="mx-2">Dark Mode</p>
          </>
        ) : (
          <>
            <MoonIcon className="w-5 " />
            <p className="mx-2">Dark Mode</p>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
