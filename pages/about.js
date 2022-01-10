import Meta from '/components/shared/Meta'
import Link from 'next/link';
import styles from '../styles/modules/About.module.css'

export default function About() {
    return (
        <div className='container full-height-container'>
            <Meta
                title={"About"}
                description={"About SPECIESS - CSS art of an endangered species"}
            />

            <header>
                <h1>About</h1>
            </header>

            <section>
                <p>
                    SPECIESS is a website where you can create, explore and share CSS art about endangered species (from the IUCN Red List) and so spread raise awareness about it.
                </p>
                <p>
                    This project is born as an initiative for the <a href="https://dev.to/devteam/announcing-the-mongodb-atlas-hackathon-on-dev-4b6m" target="_blank" rel="noopenner noreferrer">Atlas MongoDB & Dev.to Hackaton</a>
                </p>
                <p>
                    Take a look of this project on GitHub &nbsp;
                    <Link href="https://github.com/leviarista/speciess">
                        <a target="_blank" rel="noopenner noreferrer" className='github-logo'>
                            <img src={"/images/github-logo.svg"} alt="GitHub Logo" />
                        </a>
                    </Link>
                </p>
                <p>
                    And if you want to make contact, write me at <a href='mailto:levi.arista@gmail.com'>levi.arista@gmail.com</a>
                </p>
            </section>


        </div>
    )
}
