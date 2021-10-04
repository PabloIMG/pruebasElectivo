import React, {Fragment, useState} from "react";

const Componente = () => {

    const [modelo, setModelo] = useState("")
    const [marca, setMarca] = useState("")
    const [patente, setPatente] = useState("")

    const [auto, setAuto] = useState([])

    const handleInputChangeModelo = (event) => {
        setModelo(event.target.value)
    }

    const handleInputChangeMarca = (event) => {
        setMarca(event.target.value)
    }

    const handleInputChangePatente = (event) => {
        setPatente(event.target.value)
    }

    const enviarDatos = () => {
        console.log(`Enviando datos, modelo:${modelo} y marca:${marca}`)

        let nuevo =
        {
            model: modelo,
            mark: marca,
            patent: patente
        }

        //* Validar datos ingresados.
        if(modelo.length==0 || marca.length==0 || patente.length<6 || patente.length>6)
        {
            alert("Por favor ingresar datos correctamente!!");
        }
        else{
            setAuto(auto => [...auto,nuevo])
        }

        setModelo("")
        setMarca("")
        setPatente("")
    }

    return(
        <Fragment>
            <h1 align="center">Formulario</h1>

            <div align="center">
                <div>
                    <input type="text" placeholder="Modelo" name="modelo" onChange={handleInputChangeModelo} value={modelo}></input>
                </div>

                <div>
                    <input type="text" placeholder="Marca" name="marca" onChange={handleInputChangeMarca} value={marca}></input>
                </div>

                <div>
                    <input type="text" placeholder="Patente" name="patente" onChange={handleInputChangePatente} value={patente}></input>
                </div>

                <button onClick={enviarDatos}>Enviar</button>

                <div className="autos">
                    <h2>Lista de autos.</h2>
                    {auto.map((auto) => (

                        <li><strong>Auto:</strong> {auto.model} {auto.mark}, {auto.patent}</li>

                    ))}
                </div>

            </div>
        </Fragment>
    )

}

export default Componente