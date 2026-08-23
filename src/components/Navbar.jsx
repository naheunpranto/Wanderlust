import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex justify-between p-5 bg-gray-100'>
            <ul className='flex gap-3'>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/destination"}>Destination</Link></li>
                <li><Link href={"/myBookings"}>My Bookings</Link></li>
                <li><Link href={"/admin"}>Admin</Link></li>
            </ul>

            <div>
                <Image
                    src={"/assets/Wanderlast.png"}
                    height={100}
                    width={100}
                    alt=''
                />
            </div>

            <ul className='flex gap-3'>
                <li><Link href={"/profile"}>Profile</Link></li>
                <li><Link href={"/login"}>Login</Link></li>
                <li><Link href={"/signup"}>SingUp</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;