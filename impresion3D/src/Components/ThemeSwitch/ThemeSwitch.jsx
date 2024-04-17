import React from "react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./MoonIcon";
import {SunIcon} from "./SunIcon";

export default function ChangeTheme({ changeTheme }) {
  return (
    <Switch
      defaultSelected
      size="lg"
      color={"secondary"}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <MoonIcon className={className} />
        ) : (
          <SunIcon className={className} />
        )
      }
      onChange={changeTheme}
    >
    
    </Switch>
  );
}
