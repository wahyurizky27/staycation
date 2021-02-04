import React from 'react'
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'

export default function Header(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : "";
    };

    if  (props.isCentered)
    return (
        <Fade>
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Button className="brand-text-icon mx-auto" href="" type="link">
                        Stay<span className="text-gray-900">cation.</span>
                    </Button>
                </nav>
            </div>
        </header>
        </Fade>
    );

    return (
        <Fade>
        <header className="spacing-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <BrandIcon />
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Home
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Browse By
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Stories
                                </Button>
                            </li>
                            <li className={`nav-item${getNavLinkClass("/")}`}>
                                <Button className="nav-link" type="link" href="/">
                                    Agents
                                </Button>
                            </li>
                        </ul>
                    </div>
                </nav>    
            </div> 
        </header>
        </Fade>
    )
}
