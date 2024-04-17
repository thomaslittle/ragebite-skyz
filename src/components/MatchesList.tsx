import React from "react";
import { Match } from "@/types/Match";
import MatchCard from "./MatchCard";
import { Table, TableBody, TableRow } from "@/components/ui/table";

// mock data for matches
const matches: Match[] = [
  {
    id: "match-1",
    team1Name: "Fnatic",
    team2Name: "Team Vitality",
    matchType: "BO3",
    league: "ESL Challenger League Season 44 Europe",
    date: "Tuesday, December 5, 2024",
    time: "22:45 PM",
    isLive: false,
    seriesScore: "",
  },
  {
    id: "match-2",
    team1Name: "Sprout",
    team2Name: "Virtus Pro",
    matchType: "BO2",
    league: "ESL Challenger League Season 44 Europe",
    date: "Tuesday, December 5, 2024",
    time: "LIVE",
    isLive: true,
    seriesScore: "",
  },
  {
    id: "match-3",
    team1Name: "SK Gaming",
    team2Name: "NAVI",
    matchType: "BO3",
    league: "ESL Challenger League Season 44 Europe",
    date: "Tuesday, December 5, 2024",
    time: "LIVE",
    isLive: true,
    seriesScore: "4:6",
  },
];

const MatchesList: React.FC = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <div className="relative mb-4 pl-5 before:absolute before:left-0 before:top-1.5 before:h-3 before:w-3 before:bg-cyan-400 before:content-['']">
        WEDNESDAY, APRIL 17 2024
      </div>
      <Table className="w-full border-separate border-spacing-y-2 rounded-lg">
        <TableBody>
          {matches.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MatchesList;
