import {
  TvIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
  FingerPrintIcon,
  UserPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();

  console.log(router.pathname);
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            href="/"
            className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            KO[L/C]S MANAGEMENT
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-slate-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    href="/"
                    className="md:block text-left md:pb-2 text-slate-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                  >
                    Notus NextJS
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-slate-500 placeholder-slate-300 text-slate-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  href="/"
                  className={
                    "flex flex-row text-xs uppercase py-3 font-bold" +
                    (router.pathname === "/"
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                >
                  <TvIcon
                    className={
                      "h-4 w-4" +
                      (router.pathname === "/"
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  />
                  <span className="ml-2">Dashboard</span>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/settings"
                  className={
                    "text-xs uppercase py-3 font-bold flex flex-row " +
                    (router.pathname.indexOf("/settings") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                >
                  <WrenchScrewdriverIcon
                    className={
                      "h-4 w-4 mr-2" +
                      (router.pathname === "/"
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  />
                  <span className="ml-2">Settings</span>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/tables"
                  className={
                    "text-xs uppercase py-3 font-bold flex flex-row " +
                    (router.pathname.indexOf("/tables") !== -1
                      ? "text-sky-500 hover:text-sky-600"
                      : "text-slate-700 hover:text-slate-500")
                  }
                >
                  <CircleStackIcon
                    className={
                      "h-4 w-4" +
                      (router.pathname === "/"
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  />
                  <span className="ml-2">Tables</span>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  href="/auth/login"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold flex flex-row"
                >
                  <FingerPrintIcon
                    className={
                      "h-4 w-4" +
                      (router.pathname === "/"
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  />
                  <span className="ml-2">Login</span>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  href="/auth/register"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold flex flex-row"
                >
                  <UserPlusIcon
                    className={
                      "h-4 w-4" +
                      (router.pathname === "/"
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  />
                  <span className="ml-2">Register</span>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-slate-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  href="/profile"
                  className="text-slate-700 hover:text-slate-500 text-xs uppercase py-3 font-bold flex flex-row"
                >
                  <UserCircleIcon
                    className={
                      "h-4 w-4" +
                      (router.pathname === "/"
                        ? "text-sky-500 hover:text-sky-600"
                        : "text-slate-700 hover:text-slate-500")
                    }
                  />
                  <span className="ml-2">Profile Page</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
