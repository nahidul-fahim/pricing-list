const NavItems = ({navItems}) => {

    const {path, route} = navItems;

    return (
        <li className="hover:bg-[#551818] lg:hover:bg-[#ffe2e2] py-1 px-10 lg:px-3 rounded-lg duration-300">
            <a href={path}>{route}</a>
        </li>
    );
};

export default NavItems;