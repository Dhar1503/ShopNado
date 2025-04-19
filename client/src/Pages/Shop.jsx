import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

import {useEffect, useState} from "react";
import { fetchAllProducts } from '../../api/productAPI';

const Shop = () =>{

    const [products, setProducts] = useState([]);

    useEffect(() => {
      const getProducts = async () => {
        const data = await fetchAllProducts();
        setProducts(data);
      };
      getProducts();
    }, []);

    return (
        <div>
            <Hero/>
            <Popular products={products} />
            <Offers/>
            <NewCollections products={products} />
            <NewsLetter/>
        </div>
    )
}
export default Shop