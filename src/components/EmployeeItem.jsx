import React from 'react';
import {useNavigate} from 'react-router-dom';
import { removeEmployee, getListEmployees } from '../services/localstorage';
 
export const EmployeeItem = ({employee, setEmployees} ) => {
   const {nome,id} = employee;
   
   const navigate = useNavigate();
  
   const deleteEmployee = () => {
    removeEmployee(id);
   setEmployees(getListEmployees());
}

    return (

        <div class="col-lg-4">
            <div className='card-boyd text-center my-3'>
                <h5 className='mb-4'>{nome}</h5>
            </div>
            <div className='group-btn d-flex gap-3 justify-content-center'>
                <span role="button" className="btn btn-outline-danger " onClick={()=> deleteEmployee()} >
                    Excluir
                </span>
                <span role="button" className="btn btn-outline-info " onClick={() => navigate(`/editar-empresa/${id}`)}>
                    Editar
                </span>
            </div>

        </div>

    )

}