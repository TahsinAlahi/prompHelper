"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProviders, signIn, signOut } from "next-auth/react";

function Nav() {
  // i don't know what type it will be
  const [providers, setProviders] = useState<unknown>();
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const isUserLoggedIn = true;

  useEffect(() => {
    async function getProviderData() {
      const response = await getProviders();
      setProviders(response);
      console.log(response);
    }
    getProviderData();
  }, []);

  return (
    <nav className="w-full flex justify-between mb-10 pt-3">
      <Link href="/" className="flex items-center justify-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width="30"
          height="30"
          objectFit="contain"
        />
        <p className="logo_text">PrompHelper</p>
      </Link>

      {/* desktop nav */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex justify-between items-center gap-5">
            <Link href="/create-post" className="black_btn">
              Create Post
            </Link>

            <button className="signout_btn" onClick={() => signOut()}>
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/assets/images/profile.jpeg"
                alt="Profile Picture"
                width={40}
                height={40}
                className="rounded-full border border-black"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* mobile nav */}
      <div className="sm:hidden flex relative">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src="/assets/images/profile.jpeg"
              alt="Profile Picture"
              width={40}
              height={40}
              className="rounded-full border border-black"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown  ">
                <Link
                  href="/profile"
                  onClick={() => setToggleDropdown(false)}
                  className="dropdown_link"
                >
                  My Profile
                </Link>

                <Link
                  href="/create-prompt"
                  onClick={() => setToggleDropdown(false)}
                  className="dropdown_link"
                >
                  Create Prompt
                </Link>

                <button
                  className="black_btn w-full mt-5"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                >
                  {" "}
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
