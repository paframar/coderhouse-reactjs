import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../components/ItemCount';

import { Cart } from '../context/CartContext';

const ItemDetail = ({itemParam}) =>{

    // hooks
    const cartProvider = useContext(Cart);
    const navigate = useNavigate();

    // states
    const [count, setCount] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    
    // functions
    const routeChange = (path) => {
        navigate(path);
    }

    const handleAddToCart = () =>{
        cartProvider.addToCart(itemParam, count);
        setAddedToCart(true);
    }

    const increaseCount = (countParam, stockParam) => {
        
        if (countParam < stockParam){
            setCount(count+1);
        }else{
            alert("No hay mas stock!")
        }
    }
    
    const decreaseCount = (countParam) => {

        if (countParam > 1){
            setCount(count-1);
        }else{
            alert("El valor minimo debe ser 1.")
        }
    }   

    const renderItemDetail = (itemParam) => {
 
        return (
        
            <div className="item-detail">

                <img src={itemParam.imgUrl} alt="" />

                <div className="item-detail-div-right">

                    <h2 className="p-10" >{itemParam.name}</h2>
                    <h3 className="p-10" >{itemParam.category}</h3>
                    <h2 className="p-10" >$ {itemParam.price}</h2>
                    <p className="p-10" >{itemParam.description}</p>
                    
                    <div className="item-detail-div-ui">
                    
                        {addedToCart ? 
                            <div className="item-detail-div-ui">
                                <button className="item-detail-button" onClick={()=>routeChange('/')}>Seguir comprando</button>
                                <button className="item-detail-button" onClick={()=>routeChange('/cart')}>Finalizar compra</button>
                            </div>
                            :
                            <div className="item-detail-div-ui">
                                <button className="item-detail-button" onClick={handleAddToCart}>Agregar al carrito</button>
                                <ItemCount stock={itemParam.stock} displayValue={count} onAdd={increaseCount} onRemove={decreaseCount} />
                            </div>   
                        }

                    </div>

                </div>

                
                
            </div>
    
        )
    }

    return(

        <div>
            {itemParam !== '' ? renderItemDetail(itemParam) : <p>cargando Item . . . .</p>}
        </div>
        
    )

}

export default ItemDetail;