import { connect } from "../../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connect();

    let dataDefault = await db
        .collection("species")
        // .find({"assessmentId": { $in: [ 2994409, 10051312, 8862229, 47439264, 9543557, 121745669] }})
        .find({ "assessmentId": { $in: [121745669, 10051312, 9543557] } })
        .limit(25)
        .toArray();


    let data = await db.collection("species").aggregate(
        [
            // { $match: { $and: [{ redlistCategory: "Lower Risk/least concern" }] } },
            {
                $lookup:
                {
                    from: "common_names",
                    localField: "internalTaxonId",
                    foreignField: "internalTaxonId",
                    as: "commonNames"
                }
            },
            { $sample: { size: 21 } },
        ]
    )
        .toArray();

    res.status(200).json([...dataDefault, ...data])
}  