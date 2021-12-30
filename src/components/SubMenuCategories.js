import React from 'react'
import ItemListContainer from './ItemListContainer';

const SubMenuCategories = () => {


    return (

        <div>

            <div className="sub-menu">
                
                <ul>
                    <li><a className="link-navbar" href="/category/clothes">Clothes</a></li>
                    <li><a className="link-navbar" href="/category/accesories">Accesories</a></li>
                    <li><a className="link-navbar" href="/category/watches">Watches</a></li>
                </ul>  
    
            </div>
        
        </div>
    )
}

export default SubMenuCategories
