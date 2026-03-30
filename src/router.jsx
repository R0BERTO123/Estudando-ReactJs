
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Contato from './pages/contato';
import Gatos from './pages/gatos';
import Eventos from './pages/eventos';

import NaoEmcontrado from './pages/naoEmcontrado';


export default function Navegacao() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/gatos' element={<Gatos/>} />
                <Route path='*' element={<NaoEmcontrado/>} />
                <Route path='/eventos' element={<Eventos/>}/>
            </Routes>
        </BrowserRouter>
    )
}
