import express from "express";

import productsRouter from '../routes/products.router.js'
import routerCart from "../routes/cart.router.js";
import config from './config.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter)
app.use('/api/cart', routerCart)

app.listen(config.PORT, () => {

    console.log(`Server activo en puerto ${config.PORT}`);

});
