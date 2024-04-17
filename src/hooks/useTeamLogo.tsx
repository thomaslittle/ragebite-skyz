import React from "react";
import {
  Logo,
  FnaticLogo,
  VitalityLogo,
  SproutLogo,
  VirtusProLogo,
  SkLogo,
  NaviLogo,
} from "@/components/Logos";

export const useTeamLogo = (teamName: string) => {
  const getTeamLogo = React.useCallback(() => {
    switch (teamName) {
      case "Fnatic":
        return (
          <FnaticLogo className="h-[32px] w-[32px] rounded-lg bg-[#fe5921] p-[4px]" />
        );
      case "Team Vitality":
        return (
          <VitalityLogo className="h-[32px] w-[32px] rounded-lg bg-[#ffff37] p-[4px]" />
        );
      case "Sprout":
        return (
          <SproutLogo className="h-[32px] w-[32px] rounded-lg bg-[#19231b] p-[4px]" />
        );
      case "Virtus Pro":
        return (
          <VirtusProLogo className="h-[32px] w-[32px] rounded-lg bg-white p-[4px]" />
        );
      case "SK Gaming":
        return (
          <SkLogo className="h-[32px] w-[32px] rounded-lg bg-[#1e0660] p-[4px]" />
        );
      case "NAVI":
        return (
          <NaviLogo className="h-[32px] w-[32px] rounded-lg bg-[#ffe419] p-[4px]" />
        );
      default:
        return <Logo />; // fallback to the skyz logo
    }
  }, [teamName]);

  return getTeamLogo();
};
