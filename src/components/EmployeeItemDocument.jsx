
import { useNavigate } from 'react-router-dom';
import form from "../imagens/formularios.png"

export const EmployeeItemDocument = ({ employee, setEmployees }) => {
    const {recibo, id } = employee;

    const navigate = useNavigate();



    return (

        <div class="col-lg-2 card-content" >
            <div className='card-boyd text-center my-3'  >
                <img src={form} alt="icones do documentos" />

                <h5 className='mb-4 titulo'>Formulario {recibo}</h5>
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