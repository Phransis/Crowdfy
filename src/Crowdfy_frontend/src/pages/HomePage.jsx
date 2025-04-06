import {} from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import TwoHands from "../assets/two-hands.jpg";

export default function HomePage() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <section className="bg-white">
        <div
          className="relative flex flex-col items-center justify-center h-screen  bg-cover"
          style={{ backgroundImage: `url(${TwoHands})` }}
        >
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Solve problems all around the world
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                Fund and sign campaigns and missions in all the 234 contries in
                the world.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="explore"
                  className="rounded-md bg-lime-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="about"
                  className="text-sm/6 font-semibold text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto  grid max-w-lg grid-cols-1 items-center   sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          <div className="bg-white/60 sm:mx-8 lg:mx-0">
            <h3 className="text-base/7 font-semibold">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  "text-sky",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                78
              </span>
              <span className={classNames("text-gray-400", "text-base")}>
                /month
              </span>
            </p>
            <p className={classNames("text-gray-600", "mt-6 text-base/7")}>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus.
            </p>
            <ul
              role="list"
              className={classNames(
                "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              <li className="flex gap-x-3">
                <CheckIcon
                  aria-hidden="true"
                  className={classNames("text-indigo-600", "h-6 w-5 flex-none")}
                />
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatibus.
              </li>
            </ul>
            <a
              className={classNames(
                "bg-lime-300 text-white shadow-xs hover:bg-lime-500 focus-visible:outline-indigo-500",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
