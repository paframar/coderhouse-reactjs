import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemList from './ItemList';
import data from '../data'
import SubMenuCategories from './SubMenuCategories';


const ItemListContainer = () =>{

    let params = useParams();
    const [items, setItems] = useState([]);

    // estado de apertura de submenu categories --- pendiente 
    const [categoriesOpen, setCategoriesOpen] = useState(true);


    const getItems = (params) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    if(params.category !== undefined){
                        resolve(
                            data.filter(
                                item=>
                                    (item.category.toLowerCase().split(' ').join('')) === params.category
                            )                            
                        );
                    }else{
                        resolve(data)
                    }
                }, 2000)
            })
        }
      
    // useEffect Items
    useEffect(()=>{
        const promise = getItems(params);
        promise.then(resolved => {setItems(resolved)})
    }, [params]);

    return(

            <div>
                
                <div className = "item-list-container">
                    
                    {(categoriesOpen) ? <SubMenuCategories />:null}
                    
                    <ItemList items={items}/>
                
                </div>
                    
            </div>

    );
    
}

export default ItemListContainer;