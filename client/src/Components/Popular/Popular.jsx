import React from "react";
import './Popular.css'
import data_product from "../Assets/data";
import Item from "../Item/Item";

import { useEffect, useState } from "react";
import axios from "axios";


const Popular = () =>{

    const [data_product, setDataProduct] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:8080/api/products")
        .then((response) => {
        setDataProduct(response.data);
        })
        .catch((error) => {
        console.error("Error fetching products:", error);
        });
    }, []);


    const popularItems = products.filter(item => item.category === 'women');

    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default Popular