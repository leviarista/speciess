import { connect } from "../../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connect();

    let data = await db.collection("artworks").aggregate(
        [
            {
                $lookup:
                {
                    from: "common_names",
                    localField: "internalTaxonId",
                    foreignField: "internalTaxonId",
                    as: "commonNames"
                }
            },
            {
                $lookup:
                {
                    from: "species",
                    localField: "internalTaxonId",
                    foreignField: "internalTaxonId",
                    as: "specie"
                }
            },
        ]
    )
        .toArray();

    res.status(200).json(data)
}  