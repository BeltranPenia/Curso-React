import React from 'react'
import './Checkout.css'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm';

import { useState, useContext } from 'react';
import { cartContext } from '../../components/Contexts/CartContext';
import { db } from '../../services/FirebaseConfig';
import { Timestamp, writeBatch,query, where,collection, getDocs,addDoc, documentId } from 'firebase/firestore';

function Checkout() {

    const[orderId, setOrderId] = useState('');

    const {cartList, total, removeList} = useContext(cartContext);

    const createOrder = async ({ nombre, telefono, email }) => {
        
        try{
        const order = {
            buyer: { nombre, telefono, email },
            items: cartList.map((item) => ({
                id: item.item.id,
                title: item.item.name,
                price: item.item.price,
                quantity: item.cantidad,
            })),
            date: Timestamp.fromDate(new Date()),
            total: total(),
        };
        
            const batch = writeBatch(db);

            const outOfStock = [];

            const ids = cartList.map((item) => item.item.id);

            const itemsCollection = collection(db,'products');

            const productsAdded = await getDocs(query(itemsCollection, where(documentId(), 'in', ids)));

            const {docs} = productsAdded;

            docs.forEach(async (doc) => {
                try{
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
                const itemCart = cartList.find((el) => el.item.id === doc.id);
                const itemCartStock = itemCart.cantidad;
                console.log(stockDb, itemCartStock);
                if(stockDb >= itemCartStock){
                    await batch.update(doc.ref, {stock: stockDb - itemCartStock});
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc});
                }
            } catch (error) {
                console.log("Error al actualizar el stock", error);
            }
            });

            if(outOfStock.length === 0){
                await batch.commit();
                const orders = collection(db,'orders');
                const docRef = await addDoc(orders,order);
                setOrderId(docRef.id);
                removeList();
            } else {
                console.log("No hay stock de estos productos", outOfStock);
            }
        
        } catch (error) {
            console.log("Error al guardar la orden", error);
        }
    }

    if(orderId){
        return(
            <div className='orderId'>
                <h2>Gracias por tu compra!</h2>
                <p>Tu número de orden es <strong>{orderId}</strong></p>
            </div>
        )
    }

  return (
    <div>
        <h1 className='checkout'>Checkout</h1>
        <CheckoutForm createOrder={createOrder}/>
    </div>
  )
}

export default Checkout