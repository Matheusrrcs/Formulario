import { removeList, removeEmployee } from '../services/localstorage';
import { useNavigate, useParams } from "react-router-dom";
import deletImg from "../imagens/delet.png"
import { useState, useEffect } from "react"

export const EmployeeDelet = () => {

    const navigate = useNavigate();
    const [showAlert, setshowAlert] = useState(false);
    const { index } = useParams();

    const alert = () => {
        setshowAlert(true);
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);
    }

    const deleteList = () => {
        removeList()
        alert()
    }

    const deleteEmployee = () => {

        removeEmployee(index);
        alert()
    }

    return (

        <div className="text-center">

            <div className="d-flex justify-content-between  my-5 text-center">
                <button className="btn btn-dark" onClick={() => navigate("/")}>
                    Voltar
                </button>


                <div />
                <div />

            </div>
            <div className="container">

                <img src={deletImg} alt="imagen de erro" />
                <h3 className="my-4">Você tem certeza que deseja excluir  {index == "lista" ? "esta lista de registros?" : "este item?"} </h3>
                <h5 className="mb-4 ">Você não poderá recuperar {index == "lista" ? "esta lista" : "este item"}  novamente</h5>

                <div className="group-btn d-flex justify-content-center">
                    <button type="button" class="btn btn-info m-3" onClick={() => navigate("/")}>Não</button>
                    <button type="button" class="btn btn-danger m-3" onClick={() => { index == "lista" ? deleteList() : deleteEmployee() }}>Sim</button>
                </div>

                {
                    showAlert && (
                        < div className="px-5 pt-3" >
                            <div className="alert alert-success test -white text-center" role="alert" >
                               {index == "lista" ? "Lista removida com sucesso!" : "Item removido com sucesso!"}
                            </div>
                        </div>
                    )
                }
            </div>


        </div >

    )

}