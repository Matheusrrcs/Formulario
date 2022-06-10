import { EmployeeDeletDocument, EmployeeDocumentForm, Navbar } from './components';
import { Route, Routes } from 'react-router';
import { EmployeeList, EmployeeForm, EmployeeDelet, EmployeeDocuments, EmployeeFormDocuments } from './components';


export const App = () => {

    return (
        <div>


            < Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<EmployeeList />} />
                    <Route path="/criar-empresa" element={<EmployeeForm />} />
                    <Route path="/editar-empresa/:id" element={<EmployeeForm />} />
                    <Route path="/deletar/:id/" element={<EmployeeDelet />} />

                    <Route path="/documentos/:id" element={<EmployeeDocuments />} />
                    <Route path="/criar-documentos/:index" element={<EmployeeFormDocuments />} />
                    <Route path="/editar-documento/:index/doc/:indexdoc" element={<EmployeeFormDocuments />} />
                    <Route path="/deletar/:id/doc/:indexdoc" element={<EmployeeDeletDocument />} />
                    <Route path="/formulario/:id/doc/:indexdoc" element={<EmployeeDocumentForm/>}/>
                </Routes>
            </div>

        </div>

    )

}