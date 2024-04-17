import { Match } from "@/types/Match";
import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { useTeamLogo } from "@/hooks/useTeamLogo";
import { LeagueLogo } from "./Logos";

interface MatchCardProps {
  match: Match;
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const Team1Logo = useTeamLogo(match.team1Name);
  const Team2Logo = useTeamLogo(match.team2Name);

  return (
    <TableRow key={match.id}>
      <TableCell className="hidden rounded-l-lg bg-neutral-900 md:table-cell">
        <LeagueLogo />
      </TableCell>
      <TableCell className="relative hidden bg-neutral-900 after:absolute after:right-0 after:top-[25%] after:h-[38px] after:w-[1px] after:bg-gray-600 after:content-[''] md:table-cell">
        <span className="rounded-lg bg-zinc-800 px-4 py-2">
          {match.matchType}
        </span>
      </TableCell>
      <TableCell className="bg-neutral-900">
        <div className="flex items-center">
          <span className="aspect-square p-[4px]">{Team1Logo}</span>
          <span className="mx-2">{match.team1Name}</span>
        </div>
      </TableCell>
      <TableCell className="min-w-16 bg-neutral-900">
        <div
          className={`relative text-xl font-bold before:absolute before:left-2 before:top-0.5 before:h-[25px] before:w-[1px] before:-rotate-[30deg] before:transform-gpu ${match.seriesScore ? "" : "before:bg-white"} before:font-extralight before:content-['']`}
        >
          <div>{match.seriesScore ? match.seriesScore : "VS"}</div>
          <div className="text-xs md:hidden">{match.matchType}</div>
        </div>
      </TableCell>
      <TableCell className="bg-neutral-900">
        <div className="flex items-center">
          <span className="aspect-square p-[4px]">{Team2Logo}</span>
          <span className="mx-2">{match.team2Name}</span>
        </div>
      </TableCell>
      <TableCell className="hidden bg-neutral-900 lg:table-cell">
        <span className="text-lg font-bold text-gray-600">{match.league}</span>
      </TableCell>
      <TableCell className="rounded-r-lg bg-neutral-900">
        {match.isLive ? (
          <span className="rounded-fullpx-2 flex py-1 text-xs">
            LIVE{" "}
            <div className="ml-2 mr-3 mt-1 h-2 w-2 rounded-full bg-red-500 before:absolute before:ml-[0] before:mt-[0] before:h-2 before:w-2 before:animate-ping before:rounded-full before:bg-red-500 before:content-['']"></div>
          </span>
        ) : (
          <div className="text-xs text-cyan-300">{match.time}</div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default MatchCard;
