import { connect } from "../../../util/mongodb";

export default async function handler(req, res) {
    const { db } = await connect();

    // let data = await db
    //     .collection("species")
    //     .find({})
    //     .limit(25)
    //     .toArray();

    // data = await Promise.all(
    //     data.map(async (specie) => {
    //         const common_names = await db.collection("common_names").find({ internalTaxonId: specie.internalTaxonId }).toArray();
    //         // console.log("🚀 ~ file: index.js ~ line 15 ~ awaitdata.map ~ common_names", common_names)
    //         specie.common_names = common_names
    //         return specie
    //     })

    // )

    let dataDefault = await db
        .collection("species")
        // .find({"assessmentId": { $in: [ 2994409, 10051312, 8862229, 47439264, 9543557] }})
        .find({"assessmentId": { $in: [ 10051312, 9543557] }})
        .limit(25)
        .toArray();


    let data = await db.collection("species").aggregate(
        [
            // { $match: { $and: [{ kingdomName: "ANIMALIA" }] } },
            {
                $lookup:
                {
                    from: "common_names",
                    localField: "internalTaxonId",
                    foreignField: "internalTaxonId",
                    as: "commonNames"
                }
            },
            { $sample: { size: 20 } },
        ]
    )
        .toArray();

    res.status(200).json([...dataDefault, ...data])
    // res.status(200).json(data)
}  