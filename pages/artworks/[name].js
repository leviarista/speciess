import { useRouter } from "next/router";
import Link from 'next/link'
import Meta from '/components/shared/Meta'
import Button from '/components/shared/Button'
import styles from '../../styles/modules/Artworks.module.css'
import { apiRequest } from "/util/api";
import { getSpecies } from "../../util/api";

function Artwork(props) {
    const prodURL = "http://localhost:3001"

    const { artwork } = props

    const specie = artwork.specie[0] ?? null;

    let commonNames = artwork.commonNames ?
        artwork.commonNames.map(item => {
            return item.name;
        })
        : "None";

    if (commonNames !== "") commonNames = commonNames.join(", ");

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

    const getSpeciePreviewUrl = (name) => {
        return `https://raw.githubusercontent.com/leviarista/speciess/main/public/artworks/${name}/${name}.png`;
    }
    
    const getCodeUrl = (name) => {
        return `https://github.com/leviarista/speciess/tree/main/public/artworks/${name}`;
    }

    const getSpecieUrl = (name) => {
        return `${prodURL}/artworks/${name}`;
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

                <header className={styles.cardHeader + " " + styles[getDangerLevelName(specie.redlistCategory)]}>
                    <h1>{specie.scientificName}</h1>
                    {artwork.commonNames && artwork.commonNames[0].name}
                </header>

                <div className={styles.cardContent}>
                    <article>
                        <div>
                            <div className={styles.cardBox}>
                                <div className={styles[getDangerLevelName(specie.redlistCategory)]}>
                                    {getDangerLevelName(specie.redlistCategory)}
                                </div>
                                <b>{specie.redlistCategory}</b>
                                <span>Scope: {specie.scopes} </span>
                                Population: {specie.populationTrend}
                            </div>
                            <br />
                        </div>
                        <div className={styles.cardSpecieInfo}>
                            <div>
                                <p style={{ marginTop: 0 }}>
                                    <b>Common names:</b><br />
                                    {commonNames}
                                </p>
                                <p>
                                    <b>Red List Category</b><br />
                                    {specie.redlistCategory}
                                </p>
                                <p>
                                    <b>Red List Criteria</b><br />
                                    {specie.redlistCriteria}
                                </p>
                                <p>
                                    <b>Criteria version</b><br />
                                    {specie.criteriaVersion}
                                </p>
                                <p>
                                    <b>Authority</b><br />
                                    {specie.authority}
                                </p>
                            </div>
                            <div>
                                <div>
                                    {/* <b>TAXONOMY</b><br /> */}
                                    <b>KINGDOM:</b><br />
                                    {specie.kingdomName}<br />
                                    <b>PHYLUM:</b><br />
                                    {specie.phylumName}<br />
                                    <b>CLASS:</b><br />
                                    {specie.className}<br />
                                    <b>ORDER:</b><br />
                                    {specie.orderName}<br />
                                    <b>FAMILY:</b><br />
                                    {specie.familyName}<br />
                                    <b>GENUS:</b><br />
                                    {specie.genusName}<br />
                                    <b>SPECIE:</b><br />
                                    {specie.speciesName}<br />
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
                            </div>
                        </div>
                    </article>

                    <article>
                        <div className={styles.cardImageContainer}>
                            <img src={getSpeciePreviewUrl(artwork.name)} alt="preview" className={styles.cardImage} />
                        </div>
                        <div className={styles.cardArtContent}>
                            <div className={styles.cardArtBox}>
                                <p>
                                    <span>CSS art by: </span><br />
                                    <Link href={`https://github.com/${artwork.author}`} >
                                        <a target="_blank" rel="noopenner noreferrer">
                                            {artwork.author ?? "--"}
                                        </a>
                                    </Link>

                                </p>
                                <p><span>Artwork name: </span><br />  {artwork.name ?? "--"}</p>
                            </div>
                            <div className={styles.cardButtonsContainer}>
                                {/* <Button
                                    href="#"
                                    text="1444 likes"
                                    className="button-love"
                                    icon="love"
                                /> */}
                                <Button
                                    href={getCodeUrl(artwork.name)}
                                    text="See code"
                                    className="button-secondary"
                                    target={true}
                                />
                            </div>
                        </div>
                    </article>
                </div>
            </section>

        </div>
    )
}

export async function getServerSideProps({ req, query }) {
    // const protocol = req.headers.referer.split('://')[0]
    // const host = req.headers.host;
    const name = query.name;
    // const res = await fetch(`${protocol}://${host}/api/artworks/${name}`, {
    //     method: "GET",
    //     headers: {
    //         'User-Agent': 'ANYTHING_WILL_WORK_HERE',
    //         "Content-Type": "application/json",
    //     }
    // })
    // const artwork = await res.json()
    // let artwork = await apiRequest(`artworks/${name}`)

    const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;

    let res = await fetch(`${API_SERVER}/api/artworks/${name}`)
    let artwork = await res.json()

    // const res = await fetch(`${protocol}://${host}/api/artworks/${name}`, {
    //     method: "GET",
    //     headers: {
    //         'User-Agent': 'ANYTHING_WILL_WORK_HERE',
    //         "Content-Type": "application/json",
    //     }
    // })
    // const artwork = await res.json()

    return {
        props: {
            artwork: artwork ?? null
        }
    }
}

export default Artwork