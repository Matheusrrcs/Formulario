import { Navbar } from './components';
import {Route,Routes} from 'react-router';
import {EmployeeList,EmployeeForm} from './components';
 

export const App = () => {

    return (
        <div>


            < Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<EmployeeList/>}/>
                    <Route path="/criar-empresa" element={<EmployeeForm/>}/>
                    <Route path="/editar-empresa/:id" element={<EmployeeForm/>}/>
                </Routes>
            </div>

        </div>

    )

}