import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemListContainer from './ItemListContainer';

const SubMenuCategories = () => {


    return (

        <div>

            <div className="sub-menu">
                <ul>
                    <li className="navbar-li"><a className="link-navbar" href="/category/clothes">Clothes</a></li>
                    <li className="navbar-li"><a className="link-navbar" href="/category/accesories">Accesories</a></li>
                    <li className="navbar-li"><a className="link-navbar" href="/category/watches">Watches</a></li>
                </ul>  
    
            </div>
        
            <ItemListContainer />
        
        </div>
    )
}

export default SubMenuCategories
