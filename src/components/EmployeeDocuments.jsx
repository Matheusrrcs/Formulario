
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById, getListDocuments } from "../services/localstorage"
import { formatCPF_CNPJ, formatCEP, formatPhone } from "../services/Format"
import { useEffect, useState } from "react";
import { EmployeeItemDocument } from "./EmployeeItemDocument";


export const EmployeeDocuments = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const [employees, setEmployees] = useState([])

    const [EmployeeDocuments, setEmployeesDocuments] = useState(getEmployeeById(id));
    const { nome, cpf_cnpj, logradouro, numero, cep, telefone, documentos } = EmployeeDocuments;
    
    useEffect(() => {

        setEmployees(getListDocuments(id))
    }, [])

    return (

        <div className="text-center">

            <div className="d-flex justify-content-between  my-5 text-center">
                <button className="btn btn-dark" onClick={() => navigate("/")}>
                    <span><i class="fa-solid fa-arrow-left"></i></span>
                </button>

                <h1>Formularios</h1>

                <div />

            </div>

            <div className="card border-secundary p-5 m-5 text-start">

                <h5>Nome: {nome}</h5>
                <h5>CPF/CNPJ: {formatCPF_CNPJ(cpf_cnpj)}</h5>
                <h5>Logradouro: {logradouro}</h5>
                <h5>Numero: {numero}º</h5>
                <h5>CEP: {formatCEP(cep)}</h5>
                <h5>Telefone: {formatPhone(telefone)}</h5>


            </div>

            {
                documentos.length === 0 ?
                    <div className="mb-4">
                        <h4 className="text-center pt-5">Sem formularios</h4>
                        <h6 className="text-center pt-1 mb-3">Não há formularios neste recurso</h6>
                        <button className="btn btn-success my-2 my-sm-0" onClick={() => navigate(`/criar-documentos/${id}`)} ><span><i class="fa-regular fa-square-plus"></i></span> Criar</button>
                    </div>
                    
                    :
                    <div className="container text-center">
                    <div className="row">
                        {
                           employees.map(employee => < EmployeeItemDocument employee={employee} key={employee.id} setEmployees={setEmployees} />) 
                        }

                    </div>
                    <div className="group-btn d-flex justify-content-center">
                 

                    <button type="button" class="btn btn-danger m-3" onClick={() => navigate("/deletar/lista")}><span><i class="fa-solid fa-trash-arrow-up"></i></span> Excluir lista</button>
                    <button type="button" class="btn btn-success  m-3" onClick={() => navigate(`/criar-documentos/${id}`)} ><span><i class="fa-regular fa-square-plus"></i></span> Criar</button> 
                    </div>
                </div>
                   
            }


        </div >

    )

}