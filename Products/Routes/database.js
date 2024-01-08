import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

const uri = "mongodb+srv://DuuuKieee:899767147@loginserver.hqnkiia.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
const dbName = "ProductDB";
const collectionName = "Product";
const database = client.db(dbName);
const collection = database.collection(collectionName);

async function addProduct(product_name, product_info) {
    const recipes = [
        {
            product: product_name,
            info: product_info,
        },
    ];

    try {
        const insertManyResult = await collection.insertMany(recipes);
        console.log(`${insertManyResult.insertedCount} Register successful.\n`);
        return true;
    } catch (err) {
        console.log(`Co gi do sai sai: ${err}\n`);
        return false;
    }
}
async function getProduct() {
    try {
        var queryResult = await collection.find().toArray();
        if (queryResult.length >= 0) {
            console.log(queryResult);
            return queryResult;

        } else {
            console.log("Không tìm thấy dữ liệu của người ");
        }
    } catch (err) {
        console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
    }
}
async function updateProduct(_id, _name, _info) {
    try {
        let o_id = new ObjectId(_id);
        console.log("updating")
        await collection.updateOne(
            { _id: o_id },
            {
                $set: { product: _name, info: _info }
            }

        );
        return "Update Thành công";
    } catch (err) {
        console.error(`Something went wrong trying to update the game information: ${err}`);
        return "false";
    }
}

async function deleteProduct(_id) {
    try {
        let o_id = new ObjectId(_id);
        console.log("updating")
        const result = await collection.deleteOne({
            _id: o_id,
        });
        return "Delete Thành công";
    } catch (err) {
        console.error(`Something went wrong trying to update the game information: ${err}`);
        return "false";
    }
}

export { addProduct, getProduct, updateProduct, deleteProduct };