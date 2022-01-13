import Meta from '/components/shared/Meta'
import Link from 'next/link';
import styles from '../styles/modules/About.module.css'

function Charts() {
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
                    Some charts about the IUCN Red List data.
                </p>
                <p>
                    <iframe
                        style={{ background: "#FFFFFF", border: "none", borderRadius: "2px", boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)" }}
                        width="640" height="480"
                        src="https://charts.mongodb.com/charts-speciess-ycgsy/embed/charts?id=8016c125-fbf6-45b2-9617-936680bfdec0&maxDataAge=3600&theme=light&autoRefresh=true">
                    </iframe>
                </p>
            </section>

        </div>
    )
}

export default Charts