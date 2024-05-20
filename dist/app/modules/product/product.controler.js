"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControl = void 0;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        console.log(product);
        // const result = await productServices.saveProductToDb(product);
        // res.status(200).json({
        //   sucess: true,
        //   message: "product create sucessfully",
        //   data: result,
        // });
    }
    catch (err) {
        res.status(500).json({
            sucess: false,
            message: "Something went wrong",
            error: err,
        });
    }
});
exports.productControl = {
    createProduct,
};
