import { deletDocument, removeListDocument } from '../services/localstorage';
import { useNavigate, useParams } from "react-router-dom";
import deletImg from "../imagens/delet.png"
import { useState } from "react"

export const EmployeeDeletDocument = () => {

    const navigate = useNavigate();
    const [showAlert, setshowAlert] = useState(false);
    const { id, indexdoc } = useParams();

    const alert = () => {
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    }

    const deleteList = () => {
        removeListDocument(id);
        alert()
    }

    const removeDocument = () => {

        deletDocument(id, indexdoc)
        alert()
    }

    return (

        <div className="text-center">

            <div className="d-flex justify-content-between  my-5 text-center">
                <button className="btn btn-dark" onClick={() => navigate(`/documentos/${id}`)}>
                    <span><i class="fa-solid fa-arrow-left"></i></span>
                </button>


                <div />
                <div />

            </div>
            <div className="container">

                <img src={deletImg} alt="imagen de erro" />
                <h3 className="my-4">Você tem certeza que deseja excluir  {indexdoc === "lista" ? "esta lista de formularios?" : "este formulario?"} </h3>
                <h5 className="mb-4 ">Você não poderá recuperar {indexdoc === "lista" ? "esta lista" : "este formulario"}  novamente</h5>

                <div className="group-btn d-flex justify-content-center">
                    <button type="button" class="btn btn-info m-3" onClick={() => navigate(`/documentos/${id}`)}><span><i class="fa-regular fa-circle-xmark"></i></span> Não</button>
                    <button type="button" class="btn btn-danger m-3" onClick={() => { indexdoc === "lista" ? deleteList() : removeDocument() }}><span><i class="fa-solid fa-check"></i></span> Sim</button>
                </div>

                {
                    showAlert && (
                        < div className="px-5 pt-3" >
                            <div className="alert alert-success test -white text-center" role="alert" >
                                {indexdoc === "lista" ? "Lista removida com sucesso!" : "Formulario removido com sucesso!"}
                            </div>
                        </div>
                    )
                }
            </div>


        </div >

    )

}