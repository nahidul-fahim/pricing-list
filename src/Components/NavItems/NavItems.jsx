const NavItems = ({navItems}) => {

    const {path, route} = navItems;

    return (
        <li>
            <a href={path}>{route}</a>
        </li>
    );
};

export default NavItems;