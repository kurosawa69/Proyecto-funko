const fs = require("fs");
const path = require("path");
const { title } = require("process");
const { getAll, getOne } = require('../models/product.model');

const json = [
  {
  product_id: 1,
  licence_name: "Pokemon",
  category_name: "Figuras coleccionables",
  product_name: "Pidgeotto",
  product_description: "Figura coleccionable pokemon",
  product_price: 1799.99,
  dues: 10,
  product_sku: "PKM001001",
  img_front: "/img/pokemon/pidgeotto-1.webp",
  img_back: "/img/pokemon/pidgeotto-box.webp",
  },
  {
    product_id: 2,
    licence_name: "Pokemon",
    category_name: "Figuras coleccionables",
    product_name: "FAlopero",
    product_description: "Figura coleccionable pokemon",
    product_price: 1799.99,
    dues: 10,
    product_sku: "PKM001001",
    img_front: "/img/pokemon/pidgeotto-1.webp",
    img_back: "/img/pokemon/pidgeotto-box.webp",
    },
    {
      product_id: 3,
      licence_name: "Pokemon",
      category_name: "Figuras coleccionables",
      product_name: "Pidgeotto",
      product_description: "Figura coleccionable pokemon",
      product_price: 1799.99,
      dues: 10,
      product_sku: "PKM001001",
      img_front: "/img/pokemon/pidgeotto-1.webp",
      img_back: "/img/pokemon/pidgeotto-box.webp",
      },
      {
        product_id: 4,
        licence_name: "Pokemon",
        category_name: "Figuras coleccionables",
        product_name: "Pidgeotto",
        product_description: "Figura coleccionable pokemon",
        product_price: 1799.99,
        dues: 10,
        product_sku: "PKM001001",
        img_front: "/img/pokemon/pidgeotto-1.webp",
        img_back: "/img/pokemon/pidgeotto-box.webp",
        },
        {
          product_id: 5,
          licence_name: "Pokemon",
          category_name: "Figuras coleccionables",
          product_name: "Pidgeotto",
          product_description: "Figura coleccionable pokemon",
          product_price: 1799.99,
          dues: 10,
          product_sku: "PKM001001",
          img_front: "/img/pokemon/pidgeotto-1.webp",
          img_back: "/img/pokemon/pidgeotto-box.webp",
          },
          {
            product_id: 6,
            licence_name: "Pokemon",
            category_name: "Figuras coleccionables",
            product_name: "Pidgeotto",
            product_description: "Figura coleccionable pokemon",
            product_price: 1799.99,
            dues: 10,
            product_sku: "PKM001001",
            img_front: "/img/pokemon/pidgeotto-1.webp",
            img_back: "/img/pokemon/pidgeotto-box.webp",
            },
            {
              product_id: 7,
              licence_name: "Pokemon",
              category_name: "Figuras coleccionables",
              product_name: "Pidgeotto",
              product_description: "Figura coleccionable pokemon",
              product_price: 1799.99,
              dues: 10,
              product_sku: "PKM001001",
              img_front: "/img/pokemon/pidgeotto-1.webp",
              img_back: "/img/pokemon/pidgeotto-box.webp",
              },
              {
                product_id: 8,
                licence_name: "Pokemon",
                category_name: "Figuras coleccionables",
                product_name: "Pidgeotto",
                product_description: "Figura coleccionable pokemon",
                product_price: 1799.99,
                dues: 10,
                product_sku: "PKM001001",
                img_front: "/img/pokemon/pidgeotto-1.webp",
                img_back: "/img/pokemon/pidgeotto-box.webp",
                },
                {
                  product_id: 9,
                  licence_name: "Pokemon",
                  category_name: "Figuras coleccionables",
                  product_name: "Pidgeotto",
                  product_description: "Figura coleccionable pokemon",
                  product_price: 1799.99,
                  dues: 10,
                  product_sku: "PKM001001",
                  img_front: "/img/pokemon/pidgeotto-1.webp",
                  img_back: "/img/pokemon/pidgeotto-box.webp",
                  }
  
  ]

module.exports = {
  shop: async (req, res) => {

    const data = await getAll();
    
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      title: "FunkoShop",
      data
    });
  },
  item: async(req, res) => {
    const itemId = req.params.id;
    
    const [ item ] = await getOne(itemId);

    res.render(path.resolve(__dirname, "../views/shop/item.ejs"),{
    title: "ItemView",
    item
  });
  },
  prueba: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/prueba.ejs"),{
    title: "prueba"});
  },
  cart: (req, res) => {
    res.render(path.resolve(__dirname, "../views/cart.ejs"), {
      title: "FunkoCart"
    })
  },
};
