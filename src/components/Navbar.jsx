function Navbar ({links}) {
    return(
        <nav>
            {links.map(({href, text, id}) =>(
                <a key={id} href={href}>{text}</a>

            ))}
        </nav>

    )
    
}
export default Navbar;