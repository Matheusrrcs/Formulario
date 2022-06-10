import { useNavigate, useParams } from "react-router-dom";
import logo from "../imagens/logo-formulario.png"
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print';
import { getEmployeeById, getDocument } from "../services/localstorage";
import { formatCEP, formatCPF_CNPJ } from "../services/Format";

export const EmployeeDocumentForm = () => {

    const { id, indexdoc } = useParams(1)

    const [employee, setEmployee] = useState(getEmployeeById(id))
    const { bairro, cep, cidade, cpf_cnpj, estado, logradouro, nome, numero, telefone } = employee

    const [documentos, setDocumentos] = useState(getDocument(id, indexdoc));


    const { contador, detalhes, detalhes1, detalhes2, detalhes3, detalhes4, quantidade, quantidade1, quantidade2, quantide3, quantidade4, valor, valor1, valor2, valor3, valor4, recibo, conta } = documentos;

    let total = (valor ? parseInt(valor) : 0) + (valor1 ? parseInt(valor1) : 0) + (valor2 ? parseInt(valor2) : 0) + (valor3 ? parseInt(valor3) : 0) + (valor4 ? parseInt(valor4) : 0);

    total = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    const navigate = useNavigate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);


    return (

        <div className="text-center">

            <div className="d-flex justify-content-between  my-5 text-center">
                <button className="btn btn-dark" onClick={() => navigate(`/documentos/${id}`)}>
                    <span><i class="fa-solid fa-arrow-left"></i></span>
                </button>

                <h1>Formulario</h1>

                <div />

            </div>




            <div className="imprimir">
                <button className="btn btn-success my-2 my-sm-0 " onClick={handlePrint}><span><i class="fa-solid fa-print"></i></span> Imprimir</button>
            </div>


            <div className="  sheet" ref={componentRef}  >


                <div className="folha">
                    <p className="honorarios">Recibo de Honorários Contábeis</p>

                    {/* 
                    primeira linha */}
                    <div className="row">

                        <div className="col-2 imagem-form"><img src={logo} alt="logo do formulario" className="logo-formulario" /></div>



                        <div className="col-5 bordar-espaço">
                            <div className=" padrao borde-left-non">
                                <p>MG Contabilidade e Processamento LTDA.</p>
                                <p>CNPJ: 13.270.545/0001-60</p>
                                <p>Rua: R Thomaz Gonzaga</p>
                                <p>Bairro: Pernambues</p>
                                <p>Contador: {contador}</p>
                            </div>
                        </div>

                        <div className="col-5  padrao   ">
                            <p>Data Emissão: {today.toLocaleDateString()}</p>
                            <p>Nº do Recibo: {recibo}</p>
                        </div>



                    </div>


                    {/* segunda linha */}
                    <div className="row  distancia">

                        <div className="col-6 padraoPequeno">
                            <p>Cliente:</p>
                            <p>{nome}</p>

                        </div>



                        <div className="col-3 padraoPequeno borde-left-non">
                            <p>CNPJ</p>
                            <p>{formatCPF_CNPJ(cpf_cnpj)}</p>

                        </div>

                        <div className="col-3  padraoPequeno borde-left-non">
                            <p>CEP:</p>
                            <p>{formatCEP(cep)}</p>
                        </div>



                    </div>

                    {/* terceira linha */}
                    <div className="row ">

                        <div className="col-5 padraoPequeno borde-top-non">
                            <p>Endereço:</p>
                            <p>{logradouro}</p>

                        </div>



                        <div className="col-2 padraoPequeno borde-left-non borde-top-non">
                            <p>Numeroº</p>
                            <p>{numero}</p>

                        </div>

                        <div className="col-5  padraoPequeno borde-left-non borde-top-non">
                            <p>Bairro:</p>
                            <p>{bairro}</p>
                        </div>



                    </div>

                    {/* quarta linha */}
                    <div className="row ">

                        <div className="col-4 padraoPequeno borde-top-non">
                            <p>Cidade:</p>
                            <p>{cidade}</p>

                        </div>



                        <div className="col-4 padraoPequeno borde-left-non borde-top-non">
                            <p>Estado:</p>
                            <p>{estado}</p>

                        </div>

                        <div className="col-4  padraoPequeno borde-left-non borde-top-non">
                            <p>Telefone:</p>
                            <p>{telefone}</p>
                        </div>



                    </div>

                    {/* quinta linha */}
                    <div className="row distancia ">

                        <div className="col-6 padraoCentro">
                            <p>DESCRIÇÃO DOS SERVIÇOS:</p>


                        </div>



                        <div className="col-3 padraoCentro borde-left-non">
                            <p>QUATIDADE:</p>


                        </div>

                        <div className="col-3  padraoCentro borde-left-non">
                            <p>VALOR:</p>

                        </div>



                    </div>


                    {/*  

              linhas de 1 a 5

 */}


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor}</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">
                            <p>{detalhes1} </p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade1}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor1}</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes2}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade2}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor2}</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes3}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantide3}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor3}</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes4}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade4}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor4}</p>
                        </div>



                    </div>



                    <div className="row  ">

                        <div className="col-6 padraoCentro borde-top-non caixa " >

                            <p>{conta}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non">



                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non">


                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-12 padraoCentro borde-top-non txt-right" >

                            <p>TOTAL: {total}</p>

                        </div>




                    </div>


                    {/* linha 6 */}
                    <div className="row distancia">

                        <div className="col-6 padraoPequeno   " >

                            <p>Recebemos em:</p>

                        </div>
                        <div className="col-6 padraoPequeno borde-left-non " >

                            <p>Assinatura:</p>

                        </div>




                    </div>

                    <div className="row distancia">

                        <div className="col-12 padraoMini   " >

                            <p>Obs.: Desobrigado a emitir Nota Fiscal, Art. 6, Lei n° 10.423/87 e Art. 108 - Decreto 26.120/88.</p>

                        </div>



                    </div>

                    <div className="row linha-pontuada mt-4"></div>


                </div>



                <div className="folha dois">
                    <p className="honorarios">Recibo de Honorários Contábeis</p>

                    {/* 
                    primeira linha */}
                    <div className="row">

                        <div className="col-2 imagem-form"><img src={logo} alt="logo do formulario" className="logo-formulario" /></div>



                        <div className="col-5 bordar-espaço">
                            <div className=" padrao borde-left-non">
                                <p>MG Contabilidade e Processamento LTDA.</p>
                                <p>Contador:{contador}</p>
                            </div>
                        </div>

                        <div className="col-5  padrao   ">
                            <p>Data Emissão: {today.toLocaleDateString()}</p>
                            <p>Nº do Recibo: {recibo}</p>
                        </div>



                    </div>


                    {/* segunda linha */}
                    <div className="row  distancia">

                        <div className="col-6 padraoPequeno">
                            <p>Cliente:</p>
                            <p>{nome}</p>

                        </div>



                        <div className="col-3 padraoPequeno borde-left-non">
                            <p>CNPJ</p>
                            <p>{formatCPF_CNPJ(cpf_cnpj)}</p>

                        </div>

                        <div className="col-3  padraoPequeno borde-left-non">
                            <p>{formatCEP(cep)}</p>
                            <p>{cep}</p>
                        </div>



                    </div>

                    {/* terceira linha */}
                    <div className="row ">

                        <div className="col-5 padraoPequeno borde-top-non">
                            <p>Endereço:</p>
                            <p>{logradouro}</p>

                        </div>



                        <div className="col-2 padraoPequeno borde-left-non borde-top-non">
                            <p>Numeroº</p>
                            <p>{numero}</p>

                        </div>

                        <div className="col-5  padraoPequeno borde-left-non borde-top-non">
                            <p>Bairro:</p>
                            <p>{bairro}</p>
                        </div>



                    </div>

                    {/* quarta linha */}
                    <div className="row ">

                        <div className="col-4 padraoPequeno borde-top-non">
                            <p>Cidade:</p>
                            <p>{cidade}</p>

                        </div>



                        <div className="col-4 padraoPequeno borde-left-non borde-top-non">
                            <p>Estado:</p>
                            <p>{estado}</p>

                        </div>

                        <div className="col-4  padraoPequeno borde-left-non borde-top-non">
                            <p>Telefone:</p>
                            <p>{telefone}</p>
                        </div>



                    </div>

                    {/* quinta linha */}
                    <div className="row distancia ">

                        <div className="col-6 padraoCentro">
                            <p>DESCRIÇÃO DOS SERVIÇOS:</p>


                        </div>



                        <div className="col-3 padraoCentro borde-left-non">
                            <p>QUATIDADE:</p>


                        </div>

                        <div className="col-3  padraoCentro borde-left-non">
                            <p>VALOR:</p>

                        </div>



                    </div>


                    {/*  

              linhas de 1 a 5

 */}


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor}</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">
                            <p>{detalhes1} </p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade1}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade1}</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes2}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade2}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor2}</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes3}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantide3}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor3}</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>{detalhes4}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{quantidade4}</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>{valor4}</p>
                        </div>



                    </div>



                    <div className="row  ">

                        <div className="col-6 padraoCentro borde-top-non caixa " >

                            <p>{conta}</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non">



                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non">


                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-12 padraoCentro borde-top-non txt-right" >

                            <p>TOTAL: {total}</p>

                        </div>




                    </div>


                    {/* linha 6 */}
                    <div className="row distancia">

                        <div className="col-6 padraoPequeno   " >

                            <p>Recebemos em:</p>

                        </div>
                        <div className="col-6 padraoPequeno borde-left-non " >

                            <p>Assinatura:</p>

                        </div>




                    </div>

                    <div className="row distancia">

                        <div className="col-12 padraoMini   " >

                            <p>Obs.: Desobrigado a emitir Nota Fiscal, Art. 6, Lei n° 10.423/87 e Art. 108 - Decreto 26.120/88.</p>

                        </div>



                    </div>



                </div>


            </div>



        </div >

    )



}

