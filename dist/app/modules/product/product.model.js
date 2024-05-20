"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productModel = exports.productInventory = exports.productVarients = void 0;
const mongoose_1 = require("mongoose");
exports.productVarients = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
exports.productInventory = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
exports.productModel = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    tags: { type: [String], required: true },
    variants: { type: [exports.productVarients], required: true },
    inventory: { type: exports.productInventory, require: true },
});
exports.Product = (0, mongoose_1.model)("Product", exports.productModel);
