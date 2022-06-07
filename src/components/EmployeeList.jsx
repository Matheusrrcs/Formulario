import { useState } from 'react'
import { EmployeeItem } from './EmployeeItem';
import { getListEmployees } from '../services/localstorage';
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export const EmployeeList = () => {

    const navigate = useNavigate();
    const [employees, setEmployees] = useState([])

    useEffect(() => {

        setEmployees(getListEmployees())
    }, [])


    return (

        <div>
            <h1 className="my-5 text-center">Lista de Empresas</h1>

            {
                employees.length > 0 ? (

                    <div className="container text-center">
                        <div className="row">
                            {
                                employees.map(employee => <EmployeeItem employee={employee} key={employee.id} setEmployees={setEmployees} />)

                            }

                        </div>
                        <button className="btn btn-danger mt-5 deleteAll " onClick={() => navigate("/deletar/lista")}><span><i class="fa-solid fa-trash-arrow-up"></i></span> Excluir lista</button>
                    </div>

                ) : (
                    <div>
                        <h4 className="text-center pt-5">Sem registros</h4>
                        <h6 className="text-center pt-1">Não há registros neste recurso</h6>
                    </div>
                )
            }


        </div>

    )


}   