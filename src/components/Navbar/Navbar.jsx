import { useState } from "react";
import Logo from "../../image/logo/shoes-1.svg";
import Style from "./Navbar.module.css";
export default function Navbar() {
    const [color, setColor] = useState(false);
    function chahngeColor() {
        if (window.scrollY > 300) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', chahngeColor)
    return (<>
        <nav className={`navbar fixed-top navbar-expand-lg navbar-light ${color ? `${Style.bg_main}` : Style.bg_transparently}`}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    <div className="d-flex align-items-center">
                        <img width={40} src={Logo} alt="VelocityFit" />
                        <span className={`${color && 'text-white'} ms-2 fw-bold`}>VelocityFit.</span>
                    </div>
                </a>
                <button className={`navbar-toggler ${color && "bg-light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className={`${color && 'text-white'} nav-link`} href="/cart">Cart</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}
