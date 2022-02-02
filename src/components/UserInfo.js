import React from 'react';
import { useState } from 'react/cjs/react.development';

const UserInfo = () => {

    const [edit, setEdit] = useState(false);

    const editOnOff = (e) => {
        e.preventDefault();
        {edit ? setEdit(false):setEdit(true)}
    };

    return(

        <>
            <form className="user-info-form flex-col">

                
                <div className="flex-row jc-c ai-fs">

                    <div className="flex-col ai-fe">
                        <p className="user-info-p p-10"> <b>Nombre: </b></p>
                        <p className="user-info-p p-10"> <b>Apellido: </b></p>
                        <p className="user-info-p p-10"> <b>Domicilio: </b></p>
                        <p className="user-info-p p-10"> <b>Teléfono: </b></p>
                    </div>

                    {edit?
                    <div className="flex-col ai-fs">
                        <input type="name:" className="user-info-input" placeholder='Nombre'/>
                        <input type="surname:" className="user-info-input" placeholder='Apellido' />
                        <input type="adress" className="user-info-input" placeholder='Domicilio' />
                        <input type="Name:" className="user-info-input" placeholder='Teléfono'/>
                    </div>
                    :
                    <div className="flex-col ai-fs">
                        <p className="user-info-p p-10"> <b>[Nombre] </b></p>
                        <p className="user-info-p p-10"> <b>[Apellido] </b></p>
                        <p className="user-info-p p-10"> <b>[Domicilio] </b></p>
                        <p className="user-info-p p-10"> <b>[Teléfono] </b></p>
                    </div>
                    }

                </div>
                
                <div className="flex-row jc-c ai-c p-10">

                {!edit ?
                    <button className="user-info-button p-10 m-20" onClick={(e)=>editOnOff(e)}>Editar</button>
                    :
                    <button className="user-info-button p-10 m-20" onClick={(e)=>editOnOff(e)}>Guardar cambios</button>
                }

                </div>

            </form>
            
        </>
        
        
    )
};

export default UserInfo;
