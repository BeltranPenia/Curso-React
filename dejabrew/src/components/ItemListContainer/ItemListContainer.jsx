import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import Error from '../Error/Error'
import { useParams } from 'react-router-dom';
import {getDocs,collection,query,where} from 'firebase/firestore'
import {db} from '../../services/FirebaseConfig'

function ItemListContainer() {

  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const { categoria } = useParams();
  const [empty,isEmpty] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        const response = categoria ? query(collection(db, 'products'),where('category','==',categoria)) : collection(db, 'products');

        const response2 = await getDocs(response);
        const data = response2.docs.map(doc => ({...doc.data(),id:doc.id}));
        if(data.length === 0  && categoria){
          isEmpty(true);
        }
        setProducts(data);
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

export default ItemListContainer;