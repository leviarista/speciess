import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/speciess-logo.svg';
import titleLogo from '../../public/images/speciess-title-logo.svg';
import GitHubCorner from './GitHubCorner';
import githubLogo from '../../public/images/github-logo.svg';

function NavBar() {
    const toogleNav = () => {
        let nav = document.getElementById("nav");
        nav.className = nav.className === "nav" ? "nav responsive" : nav.className = "nav";
    }

    const hideNav = () => {
        let nav = document.getElementById("nav");
        nav.className = "nav";
    }

    return (
        <nav id="nav" className="nav">
            <div className="logo-container">
                <div className="logo">
                    <Link href="/" onClick={hideNav}>
                        <a><Image src={logo} alt="logo" /></a>
                    </Link>
                </div>
            </div>
            <ul>
                <li className="title-logo">
                    <Link href="/" onClick={hideNav}>
                        <a><Image src={titleLogo} alt="title-logo" /></a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/" onClick={hideNav}>
                        HOME
                    </Link>
                </li> */}
                <li>
                    <Link href="/create" onClick={hideNav}>
                        CREATE
                    </Link>
                </li>
                <li>
                    <Link href="/explore" onClick={hideNav}>
                        EXPLORE
                    </Link>
                </li>
                <li>
                    <Link href="/charts" onClick={hideNav}>
                        CHARTS
                    </Link>
                </li>
                <li>
                    <Link href="/about" onClick={hideNav}>
                        ABOUT
                    </Link>
                </li>
                {/* <li>
                    <Link href="/contact" onClick={hideNav}>
                        CONTACT
                    </Link>
                </li> */}
                <li className="nav-github">
                    <a href="https://github.com/leviarista/speciess" target="_blank" rel="noopenner noreferrer" aria-label="View source on GitHub">
                        <Image src={githubLogo} alt="GitHub Logo" />&nbsp;GitHub
                    </a>
                </li>
            </ul>
            <a href="https://github.com/leviarista/speciess" target="_blank" rel="noopenner noreferrer" className="github-corner" aria-label="View source on GitHub">
                <GitHubCorner />
            </a>
            <a href="#" className="icon" onClick={toogleNav}>
                <svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 15H0V12.5H22.5V15ZM22.5 8.75H0V6.25H22.5V8.75ZM22.5 2.5H0V0H22.5V2.5Z" fill="black" />
                </svg>
            </a>

        </nav>)
}

export default NavBar
