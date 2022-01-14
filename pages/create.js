import React, { useState } from 'react'
import Link from 'next/link'
import Meta from '/components/shared/Meta'
import styles from '../styles/modules/Explore.module.css'
import Button from '/components/shared/Button'
import Loader from "/components/shared/Loader";
import InstructionsModal from "/components/shared/InstructionsModal";
import { getSpecies } from "/util/api";

function Create() {

    let { species } = getSpecies();

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

    const onClickCopytoClipBoard = (artID) => {
        navigator.clipboard.writeText("https://ecostatsperu.netlify.app/");
        alert("URL copied to clipboard");
    }

    const getImageUrl = (scientificName) => {
        return "https://wir.iucnredlist.org/" + scientificName.toLowerCase().replace(" ", "-") + ".jpg";
    }

    const getGoogleUrl = (scientificName) => {
        return "https://www.google.com/search?q=" + scientificName.replace(" ", "+");
    }

    const getIUCNUrl = (internalTaxonId, assessmentId) => {
        return `https://www.iucnredlist.org/species/${internalTaxonId}/${assessmentId}/`;
    }

    const [showModal, setShowModal] = useState(false);
    const [selectedSpecie, setSelectedSpecie] = useState("");
    const [selectedCode, setSelectedCode] = useState("");

    const handleShowModal = (scientificName, internalTaxonId, assessmentId) => {
        const code = internalTaxonId + "-" + assessmentId;
        setSelectedCode(code);
        setSelectedSpecie(scientificName);
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    return (
        <div className='full-height-container'>
            <Meta
                title={"Create"}
                description={"Create CSS art of an endangered species"}
            />

            <header className={"container " + styles.header}>
                <h1>Create</h1>
                Choose an specie from the list below to create a CSS art
            </header>

            <section style={{ paddingTop: "15px", borderBottom: "solid 1px var(--border-color)" }}></section>

            <section className={styles.cardsContainerWrapper}>
                {!species ? <Loader /> :
                    <div className={styles.cardsContainer}>
                        {species.map((specie, index) =>
                            <div className={styles.card} key={index}>
                                <div className={styles.cardHeader + " " + styles[getDangerLevelName(specie.redlistCategory)]}>
                                    <div>{specie.redlistCategory}</div>
                                    <b>{getDangerLevelName(specie.redlistCategory)}</b>
                                </div>
                                <div className={styles.cardContent}>
                                    <div>
                                        <div className={styles.cardImage}>
                                            <img
                                                src={getImageUrl(specie.scientificName)}
                                                onError={({ currentTarget }) => {
                                                    // console.clear();
                                                    currentTarget.onerror = null; // prevents looping
                                                    currentTarget.src = "/images/no-preview-specie.svg";
                                                    currentTarget.alt = "No image found";
                                                }}
                                                alt='preview'
                                            />

                                        </div>
                                        <div className={styles.cardTitle}>
                                            <b>{specie.scientificName}</b><br />
                                            {specie.commonNames && specie.commonNames.length > 0 &&
                                                <>{specie.commonNames[0].name}<br /></>}
                                            {/* Code: {specie.internalTaxonId + "-" + specie.assessmentId} */}
                                        </div>
                                    </div>
                                    <div>
                                        <div className={styles.cardBox}>
                                            <div>Kingdom: <br /> {specie.kingdomName ?? "--"}</div>
                                            {/* <div>Popul. Trend: <br /> {specie.populationTrend ?? "--"}</div> */}
                                            <div>Scopes: <br />  {specie.scopes ?? "--"}</div>
                                        </div>
                                        <div className='center-content' style={{ paddingBottom: "15px" }}>
                                            <Link href={getGoogleUrl(specie.scientificName)} >
                                                <a target="_blank" rel="noopenner noreferrer"
                                                    style={{ marginBottom: "5px", textDecoration: "underline" }}>
                                                    Search in Google
                                                </a>
                                            </Link>
                                            <Link href={getIUCNUrl(specie.internalTaxonId, specie.assessmentId)} >
                                                <a target="_blank" rel="noopenner noreferrer"
                                                    style={{ marginBottom: "15px", textDecoration: "underline" }}>
                                                    Check info at IUCN
                                                </a>
                                            </Link>
                                            <Link href="#" >
                                                <a className="button button-secondary"
                                                    style={{ width: "100%" }}
                                                    onClick={() => handleShowModal(specie.scientificName, specie.internalTaxonId, specie.assessmentId)}
                                                >
                                                    Select this specie
                                                </a>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>
                }
            </section >

            <InstructionsModal
                show={showModal}
                close={handleCloseModal}
                specie={selectedSpecie}
                code={selectedCode}
            />

        </div >
    )
}

export default Create
