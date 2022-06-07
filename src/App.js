import { EmployeeDocuments, Navbar } from './components';
import {Route,Routes} from 'react-router';
import {EmployeeList,EmployeeForm, EmployeeDelet} from './components';
 

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
                </Routes>
            </div>

        </div>

    )

}