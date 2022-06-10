
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import uuid from 'react-uuid';
import { addDocuments, getListDocuments, editDocument, positionRecibo } from "../services/localstorage";
import { useState, useEffect } from "react"



export const EmployeeFormDocuments = () => {
    const navigate = useNavigate();

    const { index, indexdoc } = useParams(1)

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
    useEffect(() => {

        if (indexdoc) {
            const document = getListDocuments(index);
            const documentos = document.find((documento) => documento.id === indexdoc);

            setForm(documentos);

        }
    }, [indexdoc]);


    const addRecibo = () => {
   
        if (positionRecibo(index) > getListDocuments(index).length) {
            inputValues.recibo = positionRecibo(index) + 1

        }
        else {
            inputValues.recibo = getListDocuments(index).length + 1

        }


    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (indexdoc === undefined) {
            addRecibo()
        }

        // id ? editEmployee(id, inputValues) : 
        indexdoc ? editDocument(index, inputValues, indexdoc) : addDocuments({ id: uuid(), ...inputValues }, index);


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

                <h1> {indexdoc ? "Editar" : "Criar"} Formulario</h1>
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


                    <h6 className="text-center mt-5">LINHA 1</h6>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="detalhes">Descrição</label>
                        <input type="text" className="form-control" id="detalhes" placeholder="Digite a descrição do serviço" name="detalhes" value={inputValues.detalhes}
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

                    <h6 className="text-center mt-5">LINHA 2</h6>


                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="detalhes1">Descrição</label>
                        <input type="text" className="form-control" id="detalhes1" placeholder="Digite a descrição do serviço" name="detalhes1" value={inputValues.detalhes1}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="quantidade1">Quantidade</label>
                        <input type="text" className="form-control" id="quantidade1" placeholder="Digite a quantidade" name="quantidade1" value={inputValues.quantidade1}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="valor1">Valor</label>
                        <input type="text" className="form-control" id="valor1" placeholder="Digite o valor" name="valor1" value={inputValues.valor1}
                            onChange={handleInputChange} />

                    </div>

                    <h6 className="text-center mt-5">LINHA 3</h6>


                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="detalhes2">Descrição</label>
                        <input type="text" className="form-control" id="detalhes2" placeholder="Digite a descrição do serviço" name="detalhes2" value={inputValues.detalhes2}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="quantidade2">Quantidade</label>
                        <input type="text" className="form-control" id="quantidade2" placeholder="Digite a quantidade" name="quantidade2" value={inputValues.quantidade2}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="valor2">Valor</label>
                        <input type="text" className="form-control" id="valor2" placeholder="Digite o valor" name="valor2" value={inputValues.valor2}
                            onChange={handleInputChange} />

                    </div>



                    <h6 className="text-center mt-5">LINHA 4</h6>


                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="detalhes3">Descrição</label>
                        <input type="text" className="form-control" id="detalhes3" placeholder="Digite a descrição do serviço" name="detalhes3" value={inputValues.detalhes3}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="quantidade3">Quantidade</label>
                        <input type="text" className="form-control" id="quantidade3" placeholder="Digite a quantidade" name="quantidade3" value={inputValues.quantidade3}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="valor3">Valor</label>
                        <input type="text" className="form-control" id="valor3" placeholder="Digite o valor" name="valor3" value={inputValues.valor3}
                            onChange={handleInputChange} />

                    </div>



                    <h6 className="text-center mt-5">LINHA 5</h6>


                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="detalhes4">Descrição</label>
                        <input type="text" className="form-control" id="detalhes4" placeholder="Digite a descrição do serviço" name="detalhes4" value={inputValues.detalhes4}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="quantidade4">Quantidade</label>
                        <input type="text" className="form-control" id="quantidade4" placeholder="Digite a quantidade" name="quantidade4" value={inputValues.quantidade4}
                            onChange={handleInputChange} />

                    </div>

                    <div className="form-group mb-3">
                        <label className="form-label mt-2" htmlFor="valor4">Valor</label>
                        <input type="text" className="form-control" id="valor4" placeholder="Digite o valor" name="valor4" value={inputValues.valor4}
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