import React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import ItemList from './ItemList';
import data from '../data'
import SubMenuCategories from './SubMenuCategories';


const ItemListContainer = () =>{

    let params = useParams();
    const [items, setItems] = useState([]);
    const [categoriesOpen, setCategoriesOpen] = useState(false);

    // trae todos los items para el route "/"
    const getItems = (params) => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                    if(params.category !== undefined){
                        resolve(data.filter(item=> item.category.toLowerCase() === params.category.toLowerCase()));
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


    // useEffect CategoriesSubMenu
    useEffect(()=>{
        setCategoriesOpen({categoriesOpen});
    }, [categoriesOpen]);

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