import Meta from '/components/shared/Meta'
import Link from 'next/link';
import styles from '../styles/modules/About.module.css'

function About(props) {

    const { info } = props;

    return (
        <div className='container full-height-container'>
            <Meta
                title={"About"}
                description={"About SPECIESS - CSS art of an endangered species"}
            />

            <section>
                <header>
                    <h1>About</h1>
                </header>

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
            </section>
            <section>
                <header>
                    <h1>Contact</h1>
                </header>
                <p>
                    If you want to make contact, find me on:
                </p>
                <p>
                    {info.linkedin && <a href={`https://pe.linkedin.com/in/${info.linkedin}`} target="_blank" rel="noopenner noreferrer">Linkedin</a>}
                </p>
                <p>
                    {info.github && <a href={`https://github.com/${info.github}`} target="_blank" rel="noopenner noreferrer">GitHub</a>}
                </p>
                <p>
                    {info["dev.to"] && <a href={`https://dev.to/${info["dev.to"]}`} target="_blank" rel="noopenner noreferrer">Dev.to</a>}
                </p>
                <p>
                    {info.email && <a href={`mailto:${info.email}`} target="_blank" rel="noopenner noreferrer">{info.email}</a>}
                </p>
            </section>


        </div>
    )
}

export async function getServerSideProps({ req, query }) {
    const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
    let res = await fetch(`${API_SERVER}/api/contact-info`)
    let info = await res.json()

    return {
        props: {
            info: info ?? null
        }
    }
}

export default About