import React, {useEffect,useState} from 'react';
import './ItemDetailContainer.css';
import Products from '../../json/Products.json';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import Error from '../Error/Error';

function ItemDetailContainer() {

    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(Products.find((product) => product.id === parseInt(id)));
                    }, 2000);
                });
                setLoading(false);
                setProduct(response);
            }catch(error){
                console.error(error);
            }
        };
        fetchProduct();
    },[id]);

    return((loading ? (
        <div className='loading'><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>)
            : (product ? <div className='main'><ItemDetail {...product} /></div> : <Error/>)
    ));
}

export default ItemDetailContainer