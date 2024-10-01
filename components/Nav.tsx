import React from "react";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  const isUserLoggedIn = false;

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

            <button className="signout_btn">Sign Out</button>

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
          <button></button>
        )}
      </div>
    </nav>
  );
}

export default Nav;
