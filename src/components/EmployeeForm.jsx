
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import uuid from 'react-uuid';
import { addEmployee, getEmployeeById, editEmployee } from "../services/localstorage";
import { useState, useEffect } from "react"


export const EmployeeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams()
    const [showAlert, setshowAlert] = useState(false);
    const [showAlertError, setshowAlertError] = useState(false);
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        nome: "",
        cpf_cnpj: "",
        logradouro: "",
        numero: "",
        cep: "",
        telefone: "",
        documentos: []

    })

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
        }
    }, [id]);

    const checkEmpty = () => {

        if (!inputValues.nome.trim() || !inputValues.cpf_cnpj.trim() || !inputValues.logradouro.trim()
            || !inputValues.numero.trim() || !inputValues.cep.trim() || !inputValues.telefone.trim())
            return false;
        else
            return true;
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkEmpty()) {
            id ? editEmployee(id, inputValues) : addEmployee({ id: uuid(), ...inputValues });
            setshowAlert(true);
            resetForm();
            setTimeout(() => {
                setshowAlert(false);
            }, 2000);
        }
        else {
            setshowAlertError(true);
            setTimeout(() => {
                setshowAlertError(false);
            }, 2000);
        };

    };

    return (
        <div>

            {/* Header*/}
            <div className="d-flex my-5 justify-content-between">
                <button className="btn btn-dark" onClick={() => navigate("/")}>
                   <span><i class="fa-solid fa-arrow-left"></i></span>
                </button>

                <h1>{id ? "Editar" : "Adicionar"} Empresa / Cliente</h1>
                <div />
            </div>

            {/*Form*/}

            <div className="card border-secundary p-5 m-5">

                <form onSubmit={handleSubmit} >
                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" placeholder="Digite o nome do cliente ou razão social" name="nome" value={inputValues.nome}
                            onChange={handleInputChange}
                        />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="cpf_cnpj">CPF/CNPJ</label>
                        <input type="text" className="form-control" id="cpf_cnpj" placeholder="Digite o CPF ou CNPJ" name="cpf_cnpj" value={inputValues.cpf_cnpj}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="logradouro">Logradouro</label>
                        <input type="text" className="form-control" id="logradouro" placeholder="Digite o nome da rua" name="logradouro" value={inputValues.logradouro}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="numero">Numero</label>
                        <input type="text" className="form-control" id="numero" placeholder="Digite o numero da Casa/Apartamento" name="numero" value={inputValues.numero}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="cep">CEP</label>
                        <input type="text" className="form-control" id="cep" placeholder="Digite o codigo postal" name="cep" value={inputValues.cep}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="telefone">Telefone</label>
                        <input type="text" className="form-control" id="telefone" placeholder="Digite o numero do telefone" name="telefone" value={inputValues.telefone}
                            onChange={handleInputChange} />

                    </div>

                    <div className="d-grid gap-2 mt-5">
                        <button type="submit" className="btn btn-success">
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

                    {
                        showAlertError && (
                            < div className="px-5 pt-3" >
                                <div className="alert alert-danger test -white text-center" role="alert" >
                                    Preencha todos os campos
                                </div>
                            </div>
                        )
                    }
                </form>
            </div>



        </div >

    )

}