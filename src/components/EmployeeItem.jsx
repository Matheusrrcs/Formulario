
import { useNavigate } from 'react-router-dom';
import doc from "../imagens/documentos.png"

export const EmployeeItem = ({ employee, setEmployees }) => {
    const { nome, id } = employee;

    const navigate = useNavigate();



    return (

        <div class="col-lg-4 card-content" >
            <div className='card-boyd text-center my-3'onClick={() => navigate(`/documentos/${id}`)} >
                <img src={doc} alt="icones do documentos" />

                <h5 className='mb-4'>{nome}</h5>
            </div>
            <div className='group-btn d-flex gap-3 justify-content-center'>
                <span role="button" className="btn btn-outline-danger " onClick={() => navigate(`/deletar/${id}`)} >
                    <span><i class="fa-solid fa-trash"></i></span> Excluir
                </span>
                <span role="button" className="btn btn-outline-info " onClick={() => navigate(`/editar-empresa/${id}`)}>
                    <span><i class="fa-solid fa-pen-to-square"></i></span> Editar
                </span>
            </div>

        </div>

    )

}