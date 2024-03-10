const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required:[true, "lanca o nome da fera"],
        },

        quantity: {
            type: Number,
            required: true,
            default:0
        },

        price: {
            type: Number,
            required: true,
            default:0
        },

        image:{
            type: String,
            required: false,
        },
    },
    (
        Timestamp
    )
);

const Product =  mongoose.model("Product", ProductSchema);
module.exports = Product;