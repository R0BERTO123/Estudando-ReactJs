
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './pages/app';
import Contato from './pages/contato';
import Gatos from './pages/gatos';
import Eventos from './pages/eventos';
import VarEstado from './pages/varEstado';
import Task from './pages/task';
import Component from './pages/comp';
import CatalogoDeFilmes from './pages/catalogoDeFilmes';

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
                <Route path='/contador' element={<VarEstado/>}/>
                <Route path='/task' element={<Task/>}/>
                <Route path='/component' element={<Component/>}/>
                <Route path='/catalogo' element={<CatalogoDeFilmes/>}/>
            </Routes>
        </BrowserRouter>
    )
}
