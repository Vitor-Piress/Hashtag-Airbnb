import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <Link to="/" id="logo" className="flex items-center">
          <img
            className="h-10"
            src="https://images.icon-icons.com/1826/PNG/512/4202033airairbnbbnblogosocialsocialmedia-115655_115646.png"
            alt="logo airbnb"
          />
          <p className="text-airbnb text-2xl font-bold">Airbnb</p>
        </Link>

        <Link
          to="/"
          id="middle-filter"
          className="hidden rounded-full border border-gray-300 px-4 py-2 shadow-sm lg:flex"
        >
          <p className="pl- border-r border-r-gray-300 pr-4 pl-1">
            Qualquer lugar
          </p>
          <p className="border-r border-r-gray-300 px-4 pr-4">
            Qualquer semana
          </p>
          <p className="px-4 pr-3">Hóspedes</p>
          <div className="bg-airbnb rounded-full p-1 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </Link>

        <Link
          to="/login"
          id="user-component"
          className="flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 shadow-sm"
        >
          {/* <div className="" id="menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div> */}
          <div className="items-center rounded-full text-white" id="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="max-w-20 truncate pr-1 sm:max-w-32">Vitor S. Pires</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
