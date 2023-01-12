import React from 'react'
import { Link} from 'react-scroll'
import MobileMenu from '../MobileMenu/MobileMenu'
import Logo from '../../images/logo.png'
import cv from '../../images/cv.jpg'


const Header = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className="wpo-header-style-1">
            <div className="wpo-site-header">
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu/>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand site-logo" to="/"><img
                                        src={Logo} alt="" />Elito.</Link>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link activeClass="active" to="home" spy={true} smooth={true}  duration={500} >Home</Link></li>
                                        <li>
                                            <Link activeClass="active" to="about" spy={true} smooth={true}  duration={500}>About</Link>
                                        </li>
                                        <li><Link activeClass="active" to="service" spy={true} smooth={true}  duration={500}>Service</Link></li>
                                        <li>
                                            <Link activeClass="active" to="portfolio" spy={true} smooth={true}  duration={500} onClick={ClickHandler}>Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" to="contact" spy={true} smooth={true}  duration={500}>Contact</Link>
                                        </li>
                                        <li>
                                            <Link activeClass="active" to="blog" spy={true} smooth={true}  duration={500}>Blog</Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-btn">
                                        <a onClick={ClickHandler} className="theme-btn" download="My Cv" href={cv}
                                            title="ImageName">
                                            <img className="hide-img" alt="ImageName" src={cv} />
                                            Resume
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;