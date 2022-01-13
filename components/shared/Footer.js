import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from "next/router";
import githubLogo from '../../public/images/github-logo-white.svg';

function Footer() {
    const router = useRouter();

    return (
        <footer className={"footer " + ((router.pathname === "/explore" || router.pathname === "/create") && "hidden")} >
            <Link href="https://github.com/leviarista/speciess">
                <a target="_blank" rel="noopenner noreferrer" className='github-logo'>
                    <Image src={githubLogo} alt="GitHub Logo" />
                </a>
            </Link>
            <span>
                This project is born as an initiative for the <a href="https://dev.to/devteam/announcing-the-mongodb-atlas-hackathon-on-dev-4b6m" target="_blank" rel="noopenner noreferrer">Atlas MongoDB & Dev.to Hackaton</a>
            </span>
        </footer>
    )
}

export default Footer
