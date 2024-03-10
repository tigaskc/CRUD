const express = require("express")
const mongoose = require("mongoose")
const Product = require('./models/product.models.js')
const productRoute = require("./routes/product.route.js")
const app = express()

app.use(express.json())

app.use("/api/products", productRoute);


app.get('/api/products', async (req, res) => {
     try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});



app.get('/api/products/:id', async (req, res) => {
try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
} catch (error) {
    res.status(500).json({message: error.message});
}
});


app.get('/', (req, res) => {
    res.send("um oi do Nod API")
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});





app.delete('/api/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: "deu errado"})
        }
        res.status(200).json({message: "cabo"})
    } catch (error) {
        res.status(500).json({message: "faio"})
    }
})



mongoose.connect("mongodb+srv://djtlchaves:daisyjosue@projetojs.ixghnca.mongodb.net/projetojs?retryWrites=true&w=majority&appName=Projetojs")
.then(() => {
    console.log("ta conectado ao banco de dados meu parsa")
    app.listen(3000, () => {
        console.log("a porta eh 3k paizao");
    });
})
.catch(()=>{
    console.log("faio pai")
})