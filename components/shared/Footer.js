import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import githubLogo from '../../public/images/github-logo.svg';

function Footer() {
    return (
        <footer className="footer">
            <Link href="https://github.com/leviarista/speciess">
                <a target="_blank" rel="noopenner noreferrer">
                    <Image src={githubLogo} alt="GitHub Logo" />
                </a>
            </Link>
            <span>
                This project is born as an initiative from Atlas MongoDB & Dev.to Hackaton
            </span>
        </footer>
    )
}

export default Footer
