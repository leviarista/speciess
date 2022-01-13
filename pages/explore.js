import React from 'react'
import Link from 'next/link'
import Meta from '/components/shared/Meta'
import styles from '../styles/modules/Explore.module.css'
import Button from '/components/shared/Button'
import { getArtworks } from "/util/api";
import Loader from "/components/shared/Loader";

function Explore() {
    const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

    let { artworks } = getArtworks();

    const getDangerLevelName = (dangerLevel) => {
        if (!dangerLevel) return "";
        switch (dangerLevel.toLowerCase()) {
            case "extinct":
                return "EX";
            case "extinct in the wild":
                return "EW";
            case "regionally extinct":
                return "RE";
            case "critically endangered":
                return "CR";
            case "endangered":
                return "EN";
            case "vulnerable":
                return "VU";
            case "conservation dependent":
                return "CD";
            case "near threatened":
                return "NT";
            case "least concern" || "lower risk/least concern":
                return "LC";
            case "data deficient":
                return "DD";
            case "not applicable":
                return "NA";
            case "not evaluated":
                return "NE";
            default:
                return "NONE";
        }
    }

    const onClickCopytoClipBoard = (name) => {
        const url = getSpecieUrl(name);
        navigator.clipboard.writeText(url);
        alert("URL copied to clipboard");
    }

    const getSpecieUrl = (name) => {
        return `${API_SERVER}/artworks/${name}`;
    }

    const getSpeciePreviewUrl = (name) => {
        return `https://raw.githubusercontent.com/leviarista/speciess/main/public/artworks/${name}/${name}.png`;
    }

    const getIUCNUrl = (internalTaxonId, assessmentId) => {
        return `https://www.iucnredlist.org/species/${internalTaxonId}/${assessmentId}/`;
    }

    return (
        <div className='full-height-container'>
            <Meta
                title={"Explore"}
                description={"Explore CSS art of endangered species"}
            />

            <header className={"container " + styles.header}
            >
                <h1>Explore</h1>
                Explore CSS art of endangered species
            </header>

            <section style={{ paddingTop: "15px", borderBottom: "solid 1px var(--border-color)" }}></section>

            {/* <section className={styles.searchBarContainer}>
                <div className={"container"}>
                    <select>
                        <option value="all">All</option>
                        <option value="all">With art</option>
                        <option value="all">Without art</option>
                    </select>
                    <input type={"text"} placeholder='Type to search something' />
                </div>
            </section> */}

            <section className={styles.cardsContainerWrapper}>
                {!artworks ? <Loader /> :
                    <div className={styles.cardsContainer}>
                        <div className={styles.card + " center-content"} style={{padding: "50px 0"}}>
                                <div className={styles.cardImage}>
                                    <Link href="/create">
                                        <a style={{ height: "100%", background: "linear-gradient(316.24deg, #EBEE46 -0.55%, #49C707 26.48%, #E06E10 50.47%, #C1458F 72.18%, #072AE3 99.03%)", color: "white", borderRadius: "2px" }} className="center-content">
                                            Create CSS Art
                                            <img src="/images/add-icon.svg" style={{ marginTop: "5px" }} />
                                        </a>
                                    </Link>
                                </div>
                        </div>
                        {artworks.map((artwork, index) =>
                            <div className={styles.card} key={index}>
                                <div className={styles.cardHeader + " " + styles[getDangerLevelName(artwork.specie[0].redlistCategory)]}>
                                    <div>{artwork.specie[0].redlistCategory}</div>
                                    <b>{getDangerLevelName(artwork.specie[0].redlistCategory)}</b>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardImage}>
                                        <img src={getSpeciePreviewUrl(artwork.name)} alt="preview" />
                                    </div>
                                    <div className={styles.cardTitle}>
                                        <b>{artwork.specie[0].scientificName}</b><br />
                                        {artwork.commonNames && artwork.commonNames.length > 0 &&
                                            <>{artwork.commonNames[0].name}<br /></>}
                                    </div>
                                    <div className={styles.cardBox}>
                                        <div>
                                            CSS art by <br />
                                            {artwork.author ?
                                                <Link href={`https://github.com/${artwork.author}`} >
                                                    <a target="_blank" rel="noopenner noreferrer">
                                                        {artwork.author}
                                                    </a>
                                                </Link>
                                                : "--"
                                            }
                                        </div>
                                        <div>Artwork name: <br />  {artwork.name ?? "--"}</div>
                                    </div>
                                    <div className='text-center'>Share via:</div>
                                    <div className={styles.cardSocialShare}>
                                        <Link href={`https://www.facebook.com/sharer/sharer.php?u=${getSpecieUrl(artwork.name)}/&amp;src=sdkpreparse`} >
                                            <a target="_blank" rel="noopenner noreferrer">
                                                <img src="/images/facebook.svg" />
                                            </a>
                                        </Link>
                                        <Link href={`https://twitter.com/intent/tweet?text=Look%20at%20this%cool%20CSS%20art%20of%20an%20endangered%20specie.&url=${getSpecieUrl(artwork.name)}&hashtags=endangered,endangeredspecies,IUCN,iucnredlist`} >
                                            <a target="_blank" rel="noopenner noreferrer">
                                                <img src="/images/twitter.svg" />
                                            </a>
                                        </Link>
                                        {/* <Link href={"whatsapp://send?text=Look at this cool CSS art of an endangered specie: https://ecostatsperu.netlify.app/"} >
                                            <a rel="noopenner noreferrer" data-action="share/whatsapp/share">
                                                <img src="/images/whatsapp.svg" />
                                            </a>
                                        </Link> */}
                                        <Link href={`https://www.linkedin.com/shareArticle?mini=true&url=${getSpecieUrl(artwork.name)}/&title=Look%20at%20this%20cool%20CSS%20art%20of%20an%20endangered%20specie&summary=&source=`} >
                                            <a target="_blank" rel="noopenner noreferrer">
                                                <img src="/images/linkedin.svg" />
                                            </a>
                                        </Link>
                                        {/* <Link href={"#"} >
                                            <a target="_blank" rel="noopenner noreferrer">
                                                <img src="/images/instagram.svg" />
                                            </a>
                                        </Link> */}
                                        <Link href={`https://t.me/share/url?url=${getSpecieUrl(artwork.name)}/&text=Check this cool CSS art of an endangered specie.`} >
                                            <a target="_blank" rel="noopenner noreferrer">
                                                <img src="/images/telegram.svg" />
                                            </a>
                                        </Link>
                                        <Link href={"#"}>
                                            <a onClick={() => onClickCopytoClipBoard(artwork.name)}>
                                                <img src="/images/copy-icon.svg" />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={styles.cardButtonsContainer}>
                                        <Button
                                            href={getIUCNUrl(artwork.internalTaxonId, artwork.assessmentId)}
                                            text="Info"
                                            className="button-primary button-50"
                                            target={true}
                                        />
                                        <Button
                                            href={getSpecieUrl(artwork.name)}
                                            text="View"
                                            className="button-secondary button-50"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                }
            </section >

        </div >
    )
}

export default Explore
