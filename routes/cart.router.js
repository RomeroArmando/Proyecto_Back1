import { Router } from "express";

const routerCart = Router();

import { cartManager } from "../src/cartManager.js";

const managerCart = new cartManager('./cart_manajer.json');

await managerCart.init();

export const cart = await managerCart.getCart();

const carrito = [];

routerCart.get('/', (req, res) => {

    console.log(cart);
    res.status(200).send({ error:null, data: cart })

})


routerCart.post('/', (req, res) => {

    const maxId = Math.max(...cart.map(element => +element.id))
    var id = maxId;

    //console.log(maxId);

    if (maxId == '-Infinity'){

        id = 1;

    } else {

        id = id + 1;

    }

    const newCart = { id: id, products: []}
    cart.push(newCart);
    managerCart.createCart(newCart);
    res.sendStatus(200).send({ error: null, data: cart, file: req.file })

})


routerCart.put('/:id', (req, res) => {



})

export default routerCart;

