import express from "express";

import usersRouter from '../routes/products.router.js'
import config from './config.js';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', usersRouter)

app.listen(config.PORT, () => {

    console.log(`Server activo en puerto ${config.PORT}`);

});
