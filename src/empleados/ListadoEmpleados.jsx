import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function ListadoEmpleados() {

    const urlBase = "http://localhost:8080/rh.app/empleados";
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        cargarEmpleados();
    }, []);

    const cargarEmpleados = async () => {
        try {
            const response = await axios.get(urlBase);
            console.log("Resultados cargar empleados");
            console.log(response.data);
            setEmpleados(response.data);
        } catch (error) {
            console.error("Error al cargar empleados:", error);
        }
    };

    const eliminarEmpleado = async (idEmpleado) => {
        await axios.delete(`${urlBase}/${idEmpleado}`);
        cargarEmpleados();
    }

    return (
        <div className="container">
            <div className="container text-center" style={{ margin: '30px' }}>
                <h2>Sistema de Recursos Humanos</h2>
            </div>
            <table className="table table-striped table-hover align-middle">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Empleado</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Sueldo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado, indice) => (
                        <tr key={indice}>
                            <th scope="row">{empleado.idEmpleado}</th>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.departamento}</td>
                            <td><NumericFormat value={empleado.sueldo}
                                displayType={'text'}
                                thousandSeparator="," prefix={'$'}
                                decimalScale={2} fixedDecimalScale />
                            </td>
                            <td className='text-center'></td>
                            <div className=''>
                            <Link to={`/editar/${empleado.idEmpleado}`} 
                            className='btn btn-warning btn-sm me-3'>Editar</Link>
                            <button onClick={()=> eliminarEmpleado(empleado.idEmpleado)}
                            className='btn btn-danger btn-sm'>Eliminar</button>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}