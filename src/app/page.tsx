import type { NextPage } from "next";
import MatchesList from "../components/MatchesList";
import Header from "../components/Header";
import GameBackground from "../components/GameBackground";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <GameBackground />
      <div className="container mx-auto p-8">
        <Breadcrumb>
          <BreadcrumbList className="mt-6 uppercase">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">MYEDGE</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Matches</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Rebels vs Riders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="md:flex">
          <h1 className="mt-2 text-xl font-bold uppercase tracking-tighter md:text-5xl dark:text-white">
            Upcoming League of Legends Matches
          </h1>
          <Tabs
            defaultValue="Upcoming"
            className="grow md:flex md:w-[400px] md:justify-end"
          >
            <TabsList className="mt-6 grid grid-cols-2 bg-neutral-900 px-2 uppercase md:w-[180px]">
              <TabsTrigger
                value="Upcoming"
                className="uppercase data-[state=active]:bg-cyan-300 data-[state=active]:text-black"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger
                value="Finished"
                className="uppercase data-[state=active]:bg-cyan-300 data-[state=active]:text-black"
              >
                Finished
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <MatchesList />
      </div>
    </>
  );
};

export default Home;
