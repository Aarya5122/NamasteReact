const Header = () => {
    return(
        <header className="flex justify-between">
            <img 
                src="https://foodvilla.no/src/img/logo.png" 
                alt="Food Villa Logo" 
                className="logo"
            />
            <ul className="flex" style={{fontFamily: "system-ui"}}>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </header>
    )
}

export default Header