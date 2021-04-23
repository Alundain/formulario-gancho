import React, { useState } from "react"
import swal from 'sweetalert';

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [apellidoP,setApellidoP] = useState('')
    const [apellidoM,setApellidoM] = useState('')
    const [fechaN,setFechaN] = useState('')
    const [direccion,setDireccion] = useState('')
    const [fono,setFono] = useState('')
    const [list, setList] = useState([])

    const guardarDatos = (e) => {
        e.preventDefault() // evita que guarde por defecto
        console.log(e)
        if(!nombre.trim()){ // la función trim limpia los datos y tie
            console.log('El campo nombre está vacio')
            return
        }
        
        swal({
            text: "El usuario ha sido guardado!",
            icon: "success",
            button: "Aceptar",
          });
        
        if(!apellidoP.trim()){ // la función trim limpia los datos y tie
            console.log('El campo apellido paterno está vacio')
            return
        }

        if(!apellidoM.trim()){ // la función trim limpia los datos y tie
            console.log('El campo apellido materno está vacio')
            return
        }

        if(!fechaN.trim()){ // la función trim limpia los datos y tie
            console.log('El campo fecha de nacimiento está vacio')
            return
        }

        if(!direccion.trim()){ // la función trim limpia los datos y tie
            console.log('El campo dirección está vacio')
            return
        }
        if(!fono.trim()){ // la función trim limpia los datos y tie
            console.log('El campo teléfono está vacio')
            return
        }
        console.log('procesando datos...' +nombre + ' ' +
                    apellidoP + ' ' + apellidoM + ' ' + 
                    fechaN + ' ' + direccion + ' ' + fono);

        setList(
            ...list,
            {nombreU: nombre, apellidoPaterno:apellidoP, 
                apellidoMaterno: apellidoM, 
                fechaNacimiento: fechaN, direccionU: direccion, 
                telefono:fono}
        )
        e.target.reset(); // permite limpiar los campos
        setNombre('')
        setApellidoP('')
        setApellidoM('')
        setFechaN('')
        setDireccion('')
        setFono('')
    }

    return (
        <div>
            <h1>Formulario</h1>
            <form onSubmit={ guardarDatos}>
                
                <label className="form-label">Nombre</label>
                <input type="text" required placeholder="Ingrese nombre" onChange={(e) => setNombre(e.target.value) }  className="form-control mb-12"/>
         
                <label className="form-label">Apellido Paterno</label>
                <input type="text" required placeholder="Ingrese apellido paterno" onChange={(e) => setApellidoP(e.target.value)} className="form-control mb-2"/>
         
                <label className="form-label">Apellido Materno</label>
                <input type="text" required placeholder="Ingrese apellido materno" onChange={(e) => setApellidoM(e.target.value)} className="form-control mb-2"/>
            
                <label className="form-label">Fecha de Nacimiento</label>
                <input type="date" required placeholder="Ingrese su Fecha de Nacimiento" onChange={(e) => setFechaN(e.target.value)} className="form-control mb-2"/>
           
                <label className="form-label">Dirección</label>
                <input type="text" required placeholder="Ingrese su dirección" onChange={(e) => setDireccion(e.target.value)} className="form-control mb-2"/>
        
                <label className="form-label">Fono</label>
                <input type="text" required placeholder="Ingrese su número de teléfono" onChange={(e) => setFono(e.target.value)} className="form-control mb-2"/>
            
            <button type="submit" className="btn btn-primary btn-block">Agregar</button>
            
        </form>
        
        
        <div>
                <div>First Name: {nombre}</div>
                <div>Last Name: {apellidoP}</div>
                <div>Email: {setApellidoM}</div>
                <div>Password: {fechaN}</div>
                <div>Confirm Password: {direccion}</div>
                <div>Confirm Password: {fono}</div>
            </div>
    
        </div>  
    )
}
export default Formulario
