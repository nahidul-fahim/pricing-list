import { useState } from "react";
import NavItems from "../NavItems/NavItems";
import { HiMenu, HiX } from 'react-icons/hi';

const navBarOptions = [
    { id: 1, path: '/', route: 'Home' },
    { id: 2, path: '/about', route: 'About Us' },
    { id: 3, path: '/services', route: 'Services' },
    { id: 4, path: '/portfolio', route: 'Portfolio' },
    { id: 5, path: '/contact', route: 'Contact Us' }
];

const NavBar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="text-3xl">
                {
                    open === true ? <HiMenu /> : <HiX />
                }
                
            </div>

            <ul className="flex gap-x-10 font-semibold">
                {
                    navBarOptions.map((navItems, idx) => <NavItems
                        key={idx}
                        navItems={navItems}
                    ></NavItems>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;