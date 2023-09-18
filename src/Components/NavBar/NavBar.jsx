import { useState } from "react";
import NavItems from "../NavItems/NavItems";
import { HiMenu, HiX } from 'react-icons/hi';

const navBarOptions = [
    { id: 1, path: '/', route: 'Home' },
    { id: 2, path: '/about', route: 'About Us' },
    { id: 5, path: '/contact', route: 'Contact Us' }
];

const NavBar = () => {

    const [open, setOpen] = useState(true);

    return (
        <nav className="flex justify-between items-start">

            {/* Website logo */}

            <div>
                <h1 className="text-3xl font-bold text-[gray]">GYM - Z</h1>
            </div>

            {/* Nav bar */}

            <div>
                <div onClick={() => setOpen(!open)} className="text-3xl flex justify-end items-center lg:hidden">
                    {
                        open === true ? <HiMenu /> : <HiX />
                    }
                </div>

                <ul className={`flex flex-col lg:flex-row gap-x-7 gap-y-6 font-semibold text-center lg:text-left bg-[#1c9ec9] lg:bg-white text-white lg:text-[gray] py-6 lg:py-0 rounded-lg duration-1000 mt-5 lg:mt-0 lg:static absolute ${open ? '-top-[500px] right-5': 'top-10 right-5'}`}>
                    {
                        navBarOptions.map((navItems, idx) => <NavItems
                            key={idx}
                            navItems={navItems}
                        ></NavItems>)
                    }
                </ul>
            </div>

        </nav>
    );
};

export default NavBar;