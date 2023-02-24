import dbConnect from "../../../lib/dbConnect";
import Product from "../../../models/product";

async function handler(req, res) {
  const { method, body } = req;
  await dbConnect();

  switch (method) {
    case "POST":
      try {
        await Product.updateOne({_id: body.data}, {$set: {id: body.data}});

        return res.status(200).send("niceee");
      } catch (error) {
        console.log(error)
        return res.status(400).send("Produsul nu a putut sa fie gasit");
      }
    default:
      break;
  }

}


export default handler;
