"use client";
import React, { useState, Fragment } from "react";
import { Search, Check, ChevronDown } from "lucide-react";
import { Listbox, Transition } from "@headlessui/react";
import { LeagueLogo, RocketLeagueLogo, ValorantLogo } from "@/components/Logos";

const games = [
  {
    id: 1,
    name: "League of Legends",
    image: <LeagueLogo className="w-20 fill-white" />,
  },
  {
    id: 2,
    name: "Rocket League",
    image: <RocketLeagueLogo className="w-20 fill-white" />,
  },
  {
    id: 3,
    name: "Valorant",
    image: <ValorantLogo className="w-20 fill-white" />,
  },
];

const HeaderInputs: React.FC = () => {
  const [selected, setSelected] = useState(games[0]);
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="mr-4 flex grow items-center justify-end md:mr-10">
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative lg:mr-4">
              <Listbox.Button className="relative h-[60px] scale-75 cursor-default rounded-md bg-orange-600 py-1.5 pl-6 pr-16 text-left text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-orange-500 sm:text-sm sm:leading-6 md:scale-100">
                <span className="flex items-center">
                  {selected?.image}
                  <span className="ml-3 hidden truncate">{selected?.name}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center rounded-r-md bg-gray-600 px-4">
                  <div className="h-0 w-0 border-x-4 border-t-[6px] border-x-transparent border-t-white"></div>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-auto overflow-auto rounded-md bg-orange-600 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {games.map((game) => (
                    <Listbox.Option
                      key={game.id}
                      className={({ active }) =>
                        classNames(
                          active ? "bg-orange-900 text-white" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9",
                        )
                      }
                      value={game}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            {game.image}
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "ml-3 block hidden truncate",
                              )}
                            >
                              {game.name}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-orange-200",
                                "absolute inset-y-0 right-0 flex items-center pr-4",
                              )}
                            >
                              <Check className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      <div className="relative hidden xl:block">
        <Search className="absolute right-[208px] top-1/2 -translate-y-1/2 transform text-gray-400" />
        <input
          type="text"
          placeholder="Search for player, team ..."
          className="w-[240px] rounded-lg border-[1px] border-zinc-900 bg-neutral-950 py-2 pl-10 pr-4 text-sm transition-colors hover:border-zinc-800 focus:border-zinc-800 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default HeaderInputs;
