import Meta from '/components/shared/Meta'
import styles from '../styles/modules/Create.module.css'

export default function Create() {
    return (
        <div className='container full-height-container'>
            <Meta
                title={"Create"}
                description={"Create CSS art of an endangered species"}
            />

            <header>
                <h1>Create</h1>
            </header>

            <section>
                Create a cool piece of CSS art and upload it. Here are the steps:
                <ol>
                    <li>
                        Choose an endangered specie from <a href="https://www.iucnredlist.org/search?searchType=species" target="_blank" rel="noopenner noreferrer" className='github-logo'>this list</a> and create an awesome CSS art of it.
                    </li>
                    <br/>
                    <li>
                        Open a PR at the <a href="https://github.com/leviarista/speciess" target="_blank" rel="noopenner noreferrer" className='github-logo'>SPECIESS project</a>.
                    </li>
                    <br/>
                    <li>
                        Under <code>public/artworks/</code> create a new folder with your CSS art name.
                        <br /> (Example: <code>public/artworks/myawesomecssart</code>)
                    </li>
                    <br/>
                    <li>
                        Upload you awesome CSS art with three files:
                        <ul>
                            <li><code>css.css</code> - your CSS code.</li>
                            <li><code>html.html</code> - your CSS code.</li>
                            <li><code>preview.png</code> - an image of <code>250px</code> x <code>250px</code> of your art.</li>
                            <li>
                                <code>info.json</code> - with this info (example):
                                <br />
                                <pre style={{ backgroundColor: "var(--bg-default)", padding: "10px", maxWidth: "320px", borderRadius: "var(--border-radius)"}}>
                                    {`{\n    githubUsername: "leviarista", \n    specieId: 123, \n    folderName: "myawesomecssart"\n}`}
                                </pre>
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>

        </div>
    )
}
