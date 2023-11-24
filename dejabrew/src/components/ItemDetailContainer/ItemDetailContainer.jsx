import React, {useEffect,useState} from 'react';
import './ItemDetailContainer.css';
import {getDoc,doc} from 'firebase/firestore'
import {db} from '../../services/FirebaseConfig'
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
                await getDoc(doc(db, 'products', id)).then(snapshot=>{
                    if(snapshot.exists()){
                        setLoading(false);
                        setProduct({...snapshot.data(),id:snapshot.id});
                    }
                    else{
                        console.log('No existe');
                    }
                });
                
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