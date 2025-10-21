import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.post("/add", async (req, res) => {
  try {
    await client.connect();
    const db = client.db("Recommendation");
    const collection = db.collection("GoHigh");

    const data = req.body;
    const result = await collection.insertOne(data);

    res.status(201).json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  } finally {
    await client.close();
  }
});

app.get("/review", async (req, res) => {
    try {
        await client.connect();
        const db = client.db("Recommendation");
        const collection = db.collection("GoHigh");

        const data = req.body;
        const result = await collection.find().toArray();

        res.status(200).json({
        success: true,
        result: result,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
        success: false,
        message: error.message,
        });
    } finally {
        await client.close();
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
