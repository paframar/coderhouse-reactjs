import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from '../components/ItemCount';

import { Cart } from '../context/CartContext';



const ItemDetail = ({itemParam}) =>{

    const cartProvider = useContext(Cart);

    // cuenta del itemCount
    const [count, setCount] = useState(1);
    
    // state que cambia al hacer click en "Agregar al carrito"
    const [addedToCart, setAddedToCart] = useState(false);
    
    // hook para navegar hacia el carrito con btn en lugar de usar <a>
    const navigate = useNavigate();

    const routeChange = (path) => {
        navigate(path);
    }

    // click en "Agregar al carrito"
    const handleAddToCart = () =>{
        cartProvider.addToCart(itemParam, count);
        setAddedToCart(true);
    }

    // () => incrementa la cuenta del ItemCount
    const increaseCount = (countParam, stockParam) => {
        
        if (countParam < stockParam){
            setCount(count+1);
        }else{
            alert("No hay mas stock!")
        }
    }
    
    // () => decrementa la cuenta del ItemCount
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

                    <h4>{itemParam.id}</h4>
                    <h2>{itemParam.name}</h2>
                    <h3>{itemParam.category}</h3>
                    <h2>$ {itemParam.price}</h2>
                    <p>{itemParam.description}</p>
                    
                    
                    <div className="item-detail-div-ui">
                    
                        {addedToCart ? 
                            <div className="item-detail-div-ui">
                                <button className="item-detail-button" onClick={()=>routeChange('/')}>Seguir comprando</button>
                                <button className="item-detail-button" onClick={()=>routeChange('/cart')}>Finalizar compra</button>
                            </div>
                            :
                            <div className="item-detail-div-ui">
                                <button className="item-detail-button" onClick={handleAddToCart}>Agregar al carrito</button>
                                <ItemCount stock={5} displayValue={count} onAdd={increaseCount} onRemove={decreaseCount} />
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