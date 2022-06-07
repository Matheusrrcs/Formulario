
import { useNavigate } from 'react-router-dom';

export const EmployeeItem = ({ employee, setEmployees }) => {
    const { nome, id } = employee;

    const navigate = useNavigate();



    return (

        <div class="col-lg-4">
            <div className='card-boyd text-center my-3'>
                <h5 className='mb-4'>{nome}</h5>
            </div>
            <div className='group-btn d-flex gap-3 justify-content-center'>
                <span role="button" className="btn btn-outline-danger " onClick={() => navigate(`/deletar/${id}`)} >
                    Excluir
                </span>
                <span role="button" className="btn btn-outline-info " onClick={() => navigate(`/editar-empresa/${id}`)}>
                    Editar
                </span>
            </div>

        </div>

    )

}