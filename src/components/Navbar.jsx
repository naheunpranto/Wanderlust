"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;
  console.log(user);

  return (
    <nav className="bg-gray-100 p-5">
      <div className="flex justify-between container mx-auto items-center">
        <ul className="flex gap-3">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/destination"}>Destination</Link>
          </li>
          <li>
            <Link href={"/myBookings"}>My Bookings</Link>
          </li>
          <li>
            <Link href={"/addDestination"}>Add Destination</Link>
          </li>
        </ul>

        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            height={100}
            width={100}
            alt=""
          />
        </div>

        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                  />
                  <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                </Avatar>
              </li>
              <li>
                <Button variant="danger" className={"rounded-none"}>Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/signup"}>SingUp</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
