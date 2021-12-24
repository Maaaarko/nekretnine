import clientPromise from "../../lib/mongodb"

export default async (req, res) => {
    switch (req.method) {
        case "GET":
            try {
                const client = await clientPromise
                const db = await client.db()

                const listings = await db
                    .collection("listings")
                    .find(req.query)
                    .toArray()

                res.status(200).json({ data: listings })
            } catch (error) {
                res.status(500).json({ error: error })
            }
            break
        case "POST":
            try {
                const client = await clientPromise
                const db = await client.db()

                const listings = await db
                    .collection("listings")
                    .insertOne(JSON.parse(req.body))

                res.status(201).json({ data: listings })
            } catch (error) {
                console.log(error)
                res.status(500).json({ error: error })
            }
    }
}
