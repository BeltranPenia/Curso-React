import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Error from '../Error/Error'
import { useParams } from 'react-router-dom';
import Products from '../../json/Products.json'

function ItemListContainer() {

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const { categoria } = useParams();
  const [empty,isEmpty] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await new Promise((resolve) => {
          setTimeout(() => {
            resolve( categoria ? Products.filter(product => product.category === categoria) : Products);
          }, 2000);
        });
        if(Products.filter(product => product.category === categoria).length === 0  && categoria){
          isEmpty(true);
        }
        setProducts(response);
        setLoading(false);
      }catch(error){
        console.error(error);
      }
    };
    fetchProducts();
  },[categoria]);  

return ( ( loading ? 
          (<div className='loading'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)
           : (!empty ? <div className='main'><ItemList products={products} /></div> : <Error/>)));
}

export default ItemListContainer