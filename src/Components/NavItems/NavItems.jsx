const NavItems = ({navItems}) => {

    const {path, route} = navItems;

    return (
        <li className="hover:bg-[#1c9ec9] hover:lg:bg-white lg:hover:border-b-[2px] lg:hover:border-[#1c9ec9] py-1 px-10 lg:px-3 rounded-lg duration-700 lg:border-b-2 lg:border-[#55181800]">
            <a href={path}>{route}</a>
        </li>
    );
};

export default NavItems;