
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import uuid from 'react-uuid';
import { getEmployeeById, editEmployee, addDocuments, getListDocuments } from "../services/localstorage";
import { useState, useEffect } from "react"



export const EmployeeFormDocuments = () => {
    const navigate = useNavigate();

    const { index } = useParams(1)
  
    const [showAlert, setshowAlert] = useState(false);

    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        contador: "",
        detalhes: "",
        quantidade: "",
        valor: "",

        detalhes1: "",
        quantidade1: "",
        valor1: "",

        detalhes2: "",
        quantidade2: "",
        valor2: "",

        detalhes3: "",
        quantidade3: "",
        valor3: "",

        detalhes4: "",
        quantidade4: "",
        valor4: "",

        recibo: ""

    })

    // useEffect(() => {
    //     if (id) {
    //         const employee = getEmployeeById(id);
    //         setForm(employee);
    //     }
    // }, [id]);
    const addRecibo = () => {

        inputValues.recibo = getListDocuments(index).length + 1
    }


    const handleSubmit = (e) => {
        e.preventDefault();


        // id ? editEmployee(id, inputValues) : 
        addRecibo()

        addDocuments({ id: uuid(), ...inputValues }, index);
        setshowAlert(true);
        resetForm();
        setTimeout(() => {
            setshowAlert(false);
        }, 2000);


    };

    return (
        <div>

            {/* Header*/}
            <div className="d-flex my-5 justify-content-between">
                <button className="btn btn-dark" onClick={() => navigate(`/documentos/${index}`)}>
                    <span><i class="fa-solid fa-arrow-left"></i></span>
                </button>

                <h1> Criar Formulario</h1>
                <div />
            </div>

            {/*Form*/}

            <div className="card border-secundary p-5 m-5">

                <form onSubmit={handleSubmit} id="form-documentos">

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="contador">Contador</label>
                        <input type="text" className="form-control" id="contador" placeholder="Digite o nome do contador" name="contador" value={inputValues.contador}
                            onChange={handleInputChange}
                        />

                    </div>



                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="detalhes">Detalhes</label>
                        <input type="text" className="form-control" id="detalhes" placeholder="Digite os detalhes do serviços" name="detalhes" value={inputValues.detalhes}
                            onChange={handleInputChange} />

                    </div>


                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="quantidade">Quantidade</label>
                        <input type="text" className="form-control" id="quantidade" placeholder="Digite a quantidade" name="quantidade" value={inputValues.quantidade}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="valor">Valor</label>
                        <input type="text" className="form-control" id="valor" placeholder="Digite o valor" name="valor" value={inputValues.valor}
                            onChange={handleInputChange} />

                    </div>


                    <div className="d-grid gap-2 mt-5">
                        <button type="submit" className="btn btn-success"  >
                            Cadastrar
                        </button>
                    </div>

                    {
                        showAlert && (
                            < div className="px-5 pt-3" >
                                <div className="alert alert-success test -white text-center" role="alert" >
                                    Cadastrado com sucesso!
                                </div>
                            </div>
                        )
                    }

                </form>
            </div>



        </div >

    )

}