
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Contato from './pages/contato';
import NaoEmcontrado from './pages/naoEmcontrado';


export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='*' element={<NaoEmcontrado/>} />
            </Routes>
        </BrowserRouter>
    )
}
