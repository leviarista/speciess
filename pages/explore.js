import React from 'react'
import Link from 'next/link'
import Meta from '/components/shared/Meta'
import styles from '../styles/modules/Explore.module.css'
import Button from '/components/shared/Button'

function Explore() {
    const prodURL = "http://localhost:3001"
    const species = [
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "EN",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "EX",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "VU",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "EW",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/ramosmania-rodriguesii.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "NT",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "CD",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/kalivi-kodi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "LC",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "CR",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "EN",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "NA",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "DD",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "CR",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "RE",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
        {
            id: 123,
            name: "Cyclura lewisi",
            commonName: "Grand Cayman Blue Iguana",
            url: "https://www.iucnredlist.org/es/species/44275/2994409",
            dangerLevel: "NE",
            artID: 987,
            author: "speciess.admin",
            createdAt: "10 June 2012",
            preview: "/artworks/cyclura-lewisi.png",
            htmlCode: "",
            cssCode: "",
        },
    ]

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
        <div className='full-height-container'>
            <Meta
                title={"Explore"}
                description={"Explore CSS art of endangered species"}
            />

            <header className={"container " + styles.header}>
                <h1>Explore</h1>
                Explore CSS art of endangered species
            </header>

            <section className={styles.searchBarContainer}>
                <div className={"container"}>
                    <input type={"text"} placeholder='Type to search something' />
                </div>
            </section>

            <section className={styles.cardsContainerWrapper}>
                <div className={styles.cardsContainer}>
                    {species.map((specie, index) =>
                        <div className={styles.card} key={index}>
                            <div className={styles.cardHeader + " " + styles[specie.dangerLevel]}>
                                <div>{getDangerLevelName(specie.dangerLevel)}</div>
                                <b>{specie.dangerLevel}</b>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.cardImage}>
                                    {specie.preview ?
                                        <img src={specie.preview} alt="preview" />
                                        :
                                        <Link href="/upload">
                                            <a style={{ height: "100%", background: "linear-gradient(316.24deg, #EBEE46 -0.55%, #49C707 26.48%, #E06E10 50.47%, #C1458F 72.18%, #072AE3 99.03%)", color: "white", borderRadius: "2px", gap: "5px" }} className="center-content">
                                                Create CSS Art
                                                <img src="/images/add-icon.svg" />
                                            </a>
                                        </Link>
                                    }
                                </div>
                                <div className={styles.cardTitle}>
                                    <b>{specie.name}</b><br />
                                    {specie.commonName}
                                </div>
                                <div className={styles.cardBox}>
                                    <div>CSS art by <br /> {specie.author ?? "--"}</div>
                                    <div>Created on: <br />  {specie.createdAt ?? "--"}</div>
                                </div>
                                <div className='text-center'>Share via:</div>
                                <div className={styles.cardSocialShare}>
                                    <Link href={`https://www.facebook.com/sharer/sharer.php?u=https://ecostatsperu.netlify.app/&amp;src=sdkpreparse`} >
                                        {/* <Link href={`https://www.facebook.com/sharer/sharer.php?u=${prodURL}/artworks/${specie.artID}&amp;src=sdkpreparse`} > */}
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="images/facebook.svg" />
                                        </a>
                                    </Link>
                                    <Link href={`https://twitter.com/intent/tweet?text=Look%20at%20this%cool%20CSS%20art%20of%20an%20endangered%20specie.&url=https://ecostatsperu.netlify.app&hashtags=endangered,endangeredspecies,IUCN,iucnredlist`} >
                                        {/* <Link href={`https://twitter.com/intent/tweet?text=Look%20at%20this%cool%20CSS%20art%20of%20an%20endangered%20specie.&url=${prodURL}/artworks/${specie.artID}&hashtags=endangered,endangeredspecies,IUCN,iucnredlist`} > */}
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="images/twitter.svg" />
                                        </a>
                                    </Link>
                                    {/* <Link href={"whatsapp://send?text=Look at this cool CSS art of an endangered specie: https://ecostatsperu.netlify.app/"} >
                                        <a rel="noopenner noreferrer" data-action="share/whatsapp/share">
                                            <img src="images/whatsapp.svg" />
                                        </a>
                                    </Link> */}
                                    <Link href={"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//ecostatsperu.netlify.app/&title=Look%20at%20this%20cool%20CSS%20art%20of%20an%20endangered%20specie&summary=&source="} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="images/linkedin.svg" />
                                        </a>
                                    </Link>
                                    {/* <Link href={"#"} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="images/instagram.svg" />
                                        </a>
                                    </Link> */}
                                    <Link href={"https://t.me/share/url?url=https://ecostatsperu.netlify.app/&text=Check this cool CSS art of an endangered specie."} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            <img src="images/telegram.svg" />
                                        </a>
                                    </Link>
                                    <Link href={"#"} >
                                        <a onClick={() => onClickCopytoClipBoard(specie.artID)}>
                                            <img src="images/copy-icon.svg" />
                                        </a>
                                    </Link>
                                </div>
                                <div className={styles.cardButtonsContainer}>
                                    <Button
                                        href={specie.url}
                                        text="See at IUCN"
                                        className="button-primary button-90"
                                        style={{ width: "90%" }}
                                        target={true}
                                    />
                                    <Button
                                        href={"artworks/" + specie.id}
                                        icon="info"
                                        className="button-secondary button-icon"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section >

        </div >
    )
}

export default Explore
