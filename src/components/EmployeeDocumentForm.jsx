import { useNavigate } from "react-router-dom";
import logo from "../imagens/logo-formulario.png"
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';

export const EmployeeDocumentForm = () => {


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
                <button className="btn btn-dark" onClick={() => navigate("/")}>
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



                    <div className="row">

                        <div className="col-2 imagem-form"><img src={logo} alt="logo do formulario" className="logo-formulario" /></div>



                        <div className="col-5 bordar-espaço">
                            <div className=" padrao borde-left-non">
                                <p>MG Contabilidade e Processamento LTDA.</p>
                                <p>Contador:Angelo Riki Souza</p>
                            </div>
                        </div>

                        <div className="col-5  padrao   ">
                            <p>Data Emissão: {today.toLocaleDateString()}</p>
                            <p>Nº do Recibo: 1</p>
                        </div>



                    </div>



                    <div className="row mt-1">

                        <div className="col-6 padraoPequeno">
                            <p>Cliente:</p>
                            <p>Matheus Rosario Cruz Santana</p>

                        </div>



                        <div className="col-3 padraoPequeno borde-left-non">
                            <p>CNPJ</p>
                            <p>09547462520</p>

                        </div>

                        <div className="col-3  padraoPequeno borde-left-non">
                            <p>CEP:</p>
                            <p>40430230</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-5 padraoPequeno borde-top-non">
                            <p>Endereço:</p>
                            <p>Rua mascarenhas de moraes</p>

                        </div>



                        <div className="col-2 padraoPequeno borde-left-non borde-top-non">
                            <p>Numeroº</p>
                            <p>20</p>

                        </div>

                        <div className="col-5  padraoPequeno borde-left-non borde-top-non">
                            <p>Bairro:</p>
                            <p>Vila Ruy Barbosa</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-4 padraoPequeno borde-top-non">
                            <p>Cidade:</p>
                            <p>Salvador</p>

                        </div>



                        <div className="col-4 padraoPequeno borde-left-non borde-top-non">
                            <p>Estado:</p>
                            <p>Bahia</p>

                        </div>

                        <div className="col-4  padraoPequeno borde-left-non borde-top-non">
                            <p>Telefone:</p>
                            <p>71986244580</p>
                        </div>



                    </div>




                    <div className="row mt-2">

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

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">
                            <p>HONORARIOS MÊS 03/2022 </p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non caixa " >

                            <p>CAIXA ECONOMICA AG-3888 C/C 21029-9 OP-01</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non">



                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non">


                        </div>



                    </div>



                    <div className="row ">

                        <div className="col-12 padraoCentro borde-top-non " >

                            <p>TOTAL: R$ 981,34</p>

                        </div>




                    </div>

                    <div className="row mt-2">

                        <div className="col-6 padraoPequeno   " >

                            <p>Recebemos em:</p>

                        </div>
                        <div className="col-6 padraoPequeno borde-left-non " >

                            <p>Assinatura:</p>

                        </div>




                    </div>

                    <div className="row mt-2">

                        <div className="col-12 padraoMini   " >

                            <p>Obs.: Desobrigado a emitir Nota Fiscal, Art. 6, Lei n° 10.423/87 e Art. 108 - Decreto 26.120/88.</p>

                        </div>



                    </div>

                    <div className="row linha-pontuada mt-4"></div>


                </div>

                <div className="folha dois"  >
                    <p className="honorarios">Recibo de Honorários Contábeis</p>

                    <div className="row">

                        <div className="col-2 imagem-form"><img src={logo} alt="logo do formulario" className="logo-formulario" /></div>



                        <div className="col-5 bordar-espaço">
                            <div className=" padrao borde-left-non">
                                <p>MG Contabilidade e Processamento LTDA.</p>
                                <p>Contador:Angelo Riki Souza</p>
                            </div>
                        </div>

                        <div className="col-5  padrao   ">
                            <p>Data Emissão: {today.toLocaleDateString()}</p>
                            <p>Nº do Recibo: 1</p>
                        </div>



                    </div>



                    <div className="row mt-1">

                        <div className="col-6 padraoPequeno">
                            <p>Cliente:</p>
                            <p>Matheus Rosario Cruz Santana</p>

                        </div>



                        <div className="col-3 padraoPequeno borde-left-non">
                            <p>CNPJ</p>
                            <p>09547462520</p>

                        </div>

                        <div className="col-3  padraoPequeno borde-left-non">
                            <p>CEP:</p>
                            <p>40430230</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-5 padraoPequeno borde-top-non">
                            <p>Endereço:</p>
                            <p>Rua mascarenhas de moraes</p>

                        </div>



                        <div className="col-2 padraoPequeno borde-left-non borde-top-non">
                            <p>Numeroº</p>
                            <p>20</p>

                        </div>

                        <div className="col-5  padraoPequeno borde-left-non borde-top-non">
                            <p>Bairro:</p>
                            <p>Vila Ruy Barbosa</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-4 padraoPequeno borde-top-non">
                            <p>Cidade:</p>
                            <p>Salvador</p>

                        </div>



                        <div className="col-4 padraoPequeno borde-left-non borde-top-non">
                            <p>Estado:</p>
                            <p>Bahia</p>

                        </div>

                        <div className="col-4  padraoPequeno borde-left-non borde-top-non">
                            <p>Telefone:</p>
                            <p>71986244580</p>
                        </div>



                    </div>




                    <div className="row mt-2">

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

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>

                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">
                            <p>HONORARIOS MÊS 03/2022 </p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non borde-bottom-non">

                            <p>HONORARIOS MÊS 03/2022</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>1</p>

                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non borde-bottom-non">

                            <p>200</p>
                        </div>



                    </div>


                    <div className="row ">

                        <div className="col-6 padraoCentro borde-top-non caixa " >

                            <p>CAIXA ECONOMICA AG-3888 C/C 21029-9 OP-01</p>

                        </div>



                        <div className="col-3 padraoCentro borde-left-non borde-top-non">



                        </div>

                        <div className="col-3  padraoCentro borde-left-non borde-top-non">


                        </div>



                    </div>



                    <div className="row ">

                        <div className="col-12 padraoCentro borde-top-non " >

                            <p>TOTAL: R$ 981,34</p>

                        </div>




                    </div>

                    <div className="row mt-2">

                        <div className="col-6 padraoPequeno   " >

                            <p>Recebemos em:</p>

                        </div>
                        <div className="col-6 padraoPequeno borde-left-non " >

                            <p>Assinatura:</p>

                        </div>




                    </div>

                    <div className="row mt-2">

                        <div className="col-12 padraoMini   " >

                            <p>Obs.: Desobrigado a emitir Nota Fiscal, Art. 6, Lei n° 10.423/87 e Art. 108 - Decreto 26.120/88.</p>

                        </div>



                    </div>




                </div>

            </div>



        </div >

    )



}

