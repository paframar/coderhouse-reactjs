import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemList from './ItemList';
import SubMenuCategories from './SubMenuCategories';

import { db } from '../FirebaseConfig'
import  { collection, getDocs } from "firebase/firestore";



const ItemListContainer = (props) =>{

    let params = useParams();

    const [items, setItems] = useState([]);

    const getItemsFromFirebase = (params) => {

        let itemsCollection = collection(db, 'items');

        getDocs(itemsCollection).then((response) => {
            
            let itemsFromFirebase = [];

            if(params.category === undefined){

                itemsFromFirebase = response.docs.map( doc => {
                    return doc
                })
                
            }else{

                itemsFromFirebase = response.docs.filter( doc => {
                    if ( doc.data().category.toLowerCase().split(' ').join('') === params.category){
                        return doc
                    }
                })
                
            }

            
            let parsedItems = itemsFromFirebase.map(item => {
                return {id:item.id, ...item.data()}
            })

            setItems(parsedItems)
            
        })
    }
      
    // useEffect Items
    useEffect(()=>{
        getItemsFromFirebase(params);
    }, [params]);

    return(

            <div>
                
                <div className = "item-list-container">
                    {props.categories === 'show' ?
                        <SubMenuCategories />
                    : null}
                    
                    {items.length > 0 ?
                        <ItemList items={items}/>
                    : null}

                </div>
    
            </div>

    );
    
}

export default ItemListContainer;