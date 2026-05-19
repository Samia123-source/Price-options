import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/blog", name: "Blog" },
  { id: 5, path: "/contact", name: "Contact" }
];
    return (
        <nav>
            <div onClick={}>
                <AiOutlineMenu className="text-3xl md:hidden"></AiOutlineMenu>
            </div>
            <ul className="md:flex">
                {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            
            </ul>
            
        </nav>
    );
};

export default Navbar;