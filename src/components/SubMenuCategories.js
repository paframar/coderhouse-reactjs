import React from 'react'
import { useNavigate } from 'react-router-dom';

const SubMenuCategories = () => {

    const navi = useNavigate();

    const routeChange = (path) => {
        navi(path);
    }

    return (

        <div>

            <div className="sub-menu">
                
                <ul>
                    <li><button className="sub-menu-button" onClick={()=>routeChange("/category/clothes")}>Clothes</button></li>
                    <li><button className="sub-menu-button" onClick={()=>routeChange("/category/accesories")}>Accesories</button></li>
                    <li><button className="sub-menu-button" onClick={()=>routeChange("/category/watches")}>Watches</button></li>
                    <li><button className="sub-menu-button" onClick={()=>routeChange("/category/makeup")}>Make up</button></li>
                </ul>  
    
            </div>
        
        </div>
    )
}

export default SubMenuCategories
