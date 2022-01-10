import Meta from '/components/shared/Meta'
import Link from 'next/link'
import Button from '/components/shared/Button'
import styles from '../../styles/modules/Artworks.module.css'

export default function Artwork() {

    const specie = {
        id: 123,
        name: "Cyclura lewisi",
        commonName: "Grand Cayman Blue Iguana",
        url: "https://www.iucnredlist.org/es/species/44275/2994409",
        dangerLevel: "EN",
        artID: 987,
        author: "leviarista",
        createdAt: "10 June 2012",
        preview: "/artworks/cyclura-lewisi.png",
        htmlCode: "",
        cssCode: "",
    };

    const getDangerLevelName = (dangerLevel) => {
        switch (dangerLevel) {
            case "EX":
                return "Extinct";
            case "EW":
                return "Extinct in the Wild";
            case "RE":
                return "Regionally Extinct";
            case "CR":
                return "Critically Endangered";
            case "EN":
                return "Endangered";
            case "VU":
                return "Vulnerable";
            case "CD":
                return "Conservation Dependent";
            case "NT":
                return "Near threatened";
            case "LC":
                return "Least Concern";
            case "DD":
                return "Data Deficient";
            case "NA":
                return "Not Applicable";
            case "NE":
                return "Not Evaluated";
            default:
                return "";
        }
    }

    const onClickCopytoClipBoard = (artID) => {
        // navigator.clipboard.writeText(`http://localhost:3001/artworks/${specie.artID}`);
        navigator.clipboard.writeText("https://ecostatsperu.netlify.app/");
        alert("URL copied to clipboard");
    }

    return (
        <div className='container full-height-container'>
            <Meta
                title={"Artworks"}
                description={"CSS art of an endangered specie"}
            />

            <div className={styles.goBackLink}>
                <Link href="/explore">
                    <a>
                        <img src="/images/back-icon.svg" />
                        Go Back
                    </a>
                </Link>
            </div>

            <section className={styles.card}>

                <header className={styles.cardHeader + " " + styles[specie.dangerLevel]}>
                    <h1>{specie.name}</h1>
                    {specie.commonName}
                </header>

                <div className={styles.cardContent}>
                    <article>
                        <div>
                            <div className={styles.cardBox}>
                                <div className={styles[specie.dangerLevel]}>{specie.dangerLevel}</div>
                                <b>{getDangerLevelName(specie.dangerLevel)}</b>
                                Last Assesed: 10 June 2012
                            </div>
                            <br />
                        </div>
                        <div className={styles.cardSpecieInfo}>
                            <div>
                                <p style={{ marginTop: 0 }}>
                                    <b>Common names</b><br />
                                    {specie.commonName}
                                </p>
                                <p>
                                    <b>Abstract</b><br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in ad quos omnis excepturi. Nam, ducimus. Ipsam, corrupti architecto? Delectus totam ex ab incidunt, accusantium ipsam labore vel doloribus itaque!
                                </p>
                                <p>
                                    <b>Other info</b><br />
                                    Cyclura
                                </p>
                            </div>
                            <div>
                                <div>
                                    <b>Taxonomy</b><br />
                                    <b>Order:</b><br />
                                    Animalia
                                    <b>Order:</b><br />
                                    Animalia
                                    <b>Genere:</b><br />
                                    Chordata<br />
                                    Reptilia<br />
                                    Squamata<br />
                                    Iguanidae<br />
                                    Cyclura
                                </div>
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <Button
                                href={specie.url}
                                text="See at IUCN"
                                className="button-primary"
                                target={true}
                            />
                            <div>
                                <div className='text-center'>Share via:</div>
                                <div className={styles.cardSocialShare}>
                                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://ecostatsperu.netlify.app/&amp;src=sdkpreparse`} >
                                        {/* <Link href={`https://www.facebook.com/sharer/sharer.php?u=${prodURL}/artworks/${specie.artID}&amp;src=sdkpreparse`} > */}
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="/images/facebook.svg" />
                                        </a>
                                    </Link>
                                    <Link href={`https://twitter.com/intent/tweet?text=Look%20at%20this%cool%20CSS%20art%20of%20an%20endangered%20specie.&url=https://ecostatsperu.netlify.app&hashtags=endangered,endangeredspecies,IUCN,iucnredlist`} >
                                        {/* <Link href={`https://twitter.com/intent/tweet?text=Look%20at%20this%cool%20CSS%20art%20of%20an%20endangered%20specie.&url=${prodURL}/artworks/${specie.artID}&hashtags=endangered,endangeredspecies,IUCN,iucnredlist`} > */}
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="/images/twitter.svg" />
                                        </a>
                                    </Link>
                                    {/* <Link href={"whatsapp://send?text=Look at this cool CSS art of an endangered specie: https://ecostatsperu.netlify.app/"} >
                                        <a rel="noopenner noreferrer" data-action="share/whatsapp/share">
                                            <img src="images/whatsapp.svg" />
                                        </a>
                                    </Link> */}
                                    <Link href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//ecostatsperu.netlify.app/&title=Look%20at%20this%20cool%20CSS%20art%20of%20an%20endangered%20specie&summary=&source="} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="/images/linkedin.svg" />
                                        </a>
                                    </Link>
                                    {/* <Link href={"#"} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="/images/instagram.svg" />
                                        </a>
                                    </Link> */}
                                    <Link href={"https://t.me/share/url?url=https://ecostatsperu.netlify.app/&text=Check this cool CSS art of an endangered specie."} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="/images/telegram.svg" />
                                        </a>
                                    </Link>
                                    <Link href={"#"} >
                                        <a onClick={() => onClickCopytoClipBoard(specie.artID)}>
                                            <img src="/images/copy-icon.svg" />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className={styles.cardImageContainer}>
                            {specie.preview ?
                                <img src={specie.preview} alt="preview" className={styles.cardImage} />
                                :
                                <Link href="/upload">
                                    <a className={"center-content " + styles.cardCreateButton}>
                                        Create CSS Art
                                        <img src="/images/add-icon.svg" />
                                    </a>
                                </Link>
                            }
                        </div>
                        <div className={styles.cardArtContent}>
                            <div className={styles.cardArtBox}>
                                <p>
                                    <span>CSS art by: </span><br />
                                    <Link href={`https://github.com/${specie.author}`} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            {specie.author ?? "--"}
                                        </a>
                                    </Link>

                                </p>
                                <p><span>Created on: </span><br />  {specie.createdAt ?? "--"}</p>
                            </div>
                            <div className={styles.cardButtonsContainer}>
                                <Button
                                    href="#"
                                    text="1444 likes"
                                    className="button-love"
                                    icon="love"
                                />
                                <Button
                                    href="#"
                                    text="See CSS code"
                                    className="button-secondary"
                                />
                            </div>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}
