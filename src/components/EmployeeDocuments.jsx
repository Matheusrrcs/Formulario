import { useNavigate } from "react-router-dom";

export const EmployeeDocuments = () => {
    const navigate = useNavigate();


    return (

        <div className="text-center">

            <div className="d-flex justify-content-between  my-5 text-center">
                <button className="btn btn-dark" onClick={() => navigate("/")}>
                    <span><i class="fa-solid fa-arrow-left"></i></span>
                </button>

                <h1>Documentos da Empresa / Cliente</h1>

                <div />

            </div>

        </div >

    )

}