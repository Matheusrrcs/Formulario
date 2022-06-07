import {  Navbar } from './components';
import {Route,Routes} from 'react-router';
import {EmployeeList,EmployeeForm, EmployeeDelet,EmployeeDocuments,EmployeeFormDocuments} from './components';
 

export const App = () => {

    return (
        <div>


            < Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<EmployeeList/>}/>
                    <Route path="/criar-empresa" element={<EmployeeForm/>}/>
                    <Route path="/editar-empresa/:id" element={<EmployeeForm/>}/>
                    <Route path="/deletar/:id" element={<EmployeeDelet/>}/>
                    <Route path="/documentos/:id" element={<EmployeeDocuments/>}/>
                    <Route path="/criar-documentos/:id" element={<EmployeeFormDocuments/>}/>
                </Routes>
            </div>

        </div>

    )

}