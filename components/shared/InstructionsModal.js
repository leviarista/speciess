import React from 'react';

function InstructionsModal(props) {
    let { show, close, specie, code } = props;
    return (
        <>
            {
                show ?
                    <div
                        className="modalContainer"
                        onClick={() => close()}
                    >
                        <div className="modal" onClick={(e) => e.stopPropagation()}>
                            <header className="modal_header">
                                <h3 className="modal_header-title">Create your artwork</h3>
                                {/* <button className="close" onClick={() => close()}>
                                    <img src={Close} alt="close" />
                                </button> */}
                            </header>
                            <main className="modal_content">
                                <section>
                                    <p style={{ textAlign: "center" }}>You have selected <b>{specie}</b><br />(Code: {code})</p>
                                </section>
                                <section>
                                    <ol style={{ paddingInlineStart: "15px" }}>
                                        <li>
                                            Fork the <a href="https://github.com/leviarista/speciess" target="_blank" rel="noopenner noreferrer" className='github-logo'>SPECIESS project</a>.
                                        </li>
                                        <li>
                                            Under <code>public/artworks/</code> create a new folder with your CSS art name.
                                            <br /> (Example: <code>public/artworks/myCssArtName</code>)
                                        </li>
                                        <li>
                                            Open a Pull Request and upload these files:
                                            <ul style={{ paddingInlineStart: "15px" }}>
                                                <li><code>mycssartname.css</code></li>
                                                <li><code>mycssartname.html</code></li>
                                                <li><code>mycssartname.png</code> - a 250px x 250px image of your art.</li>
                                                <li>
                                                    <code>info.json</code> - with this info:
                                                </li>
                                            </ul>
                                            <pre style={{ backgroundColor: "var(--bg-default)", padding: "5px", maxWidth: "320px", borderRadius: "var(--border-radius)" }}>
                                                {`{\n  "name": "mycssartname",\n  "github": "mygithubuser", \n  "code": "${code}" \n}`}
                                            </pre>

                                        </li>
                                    </ol>
                                </section>
                            </main>
                            <footer className="center-content" style={{ paddingTop: 15 }}>
                                <button className="button button-secondary" onClick={() => close()}>
                                    OK
                                </button>
                            </footer>
                        </div>
                    </div>
                    : null
            }

            <style jsx>{`
                .modalContainer {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 101
                }
                .modalContainer .modal {
                    width: 50vw;
                    min-width: 320px;
                    height: auto;
                    max-height: 100%;
                    overflow: auto;

                    background-color: #fff;
                    padding: 15px;
                    border-radius: 7px;
                    background-color: rgba(255, 255, 255, 1);
                    backdrop-filter: blur(5px);
                    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
                }
                .modalContainer .modal_header {
                    position: relative;
                    border-bottom: 1px solid #ddd;
                }
                .modalContainer .modal_header h3 {
                    margin: 0 0 10px 0;
                }
                .modalContainer .modal_header-title {
                    text-align: center;
                }
                .modalContainer .modal_header .close {
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: transparent;
                }
                .modalContainer .modal_header .close img {
                    width: 1rem;
                    height: auto;
                    transition: all 0.3s;
                }
                .modalContainer .modal_header .close:hover img {
                    transform: scale(1.1);
                }
                .modalContainer .modal_content {
                    border-bottom: 1px solid #ddd;
                    padding: 15px;
                    padding-top: 0;
                }
                .modalContainer .modal_content ol>li{
                    margin-bottom: 10px;
                }
                .modalContainer .modal_footer {
                    padding: 2rem 0;
                    padding-bottom: 0;
                }
                .modalContainer .modal_footer button {
                    float: right;
                    padding: 0.5rem;
                    border-radius: 8px;
                }
                .modalContainer .modal_footer .modal-close {
                    background-color: transparent;
                    font-weight: 600;
                }
                .modalContainer .modal_footer .modal-close:hover {
                    color: rgba(54, 67, 72, 0.8);
                }
                .modalContainer .modal_footer .submit {
                    margin-right: 1rem;
                    background-color: #364348;
                    color: #fff;
                }
                .modalContainer .modal_footer .submit:hover {
                    background-color: rgba(54, 67, 72, 0.8);
                }
                @media only screen and (max-width: 600px) {
                    .modalContainer .modal {
                        width: 95%;
                    }
                    .modalContainer .modal_content {
                        padding: 0;
                    }    
                }
            `}
            </style>
        </>
    )
}

export default InstructionsModal
