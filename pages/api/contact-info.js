export default async function handler(req, res) {
  const DB_DATA_API_URL = process.env.DB_DATA_API_URL;
  const DB_DATA_API_KEY = process.env.DB_DATA_API_KEY;

  let response = await fetch(`${DB_DATA_API_URL}/findOne`, {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "api-key": DB_DATA_API_KEY
    },
    "body": "{\"collection\":\"contact_info\",\"database\":\"speciess\",\"dataSource\":\"ClusterA\"}"
  })

  let info = await response.json()

  res.status(200).json(info.document)
}  