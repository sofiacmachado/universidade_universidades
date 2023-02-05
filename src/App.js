import './css/styles.css';
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage'
import Alunos from './components/alunos';
import Cursos from './components/cursos';
import Professores from './components/professores';
import SingleProf from './components/single_page/singleProf';
import SingleAluno from "./components/single_page/singleAluno";
import SingleCurso from "./components/single_page/singleCurso";
import AddCurso from './components/add/addCurso';


export default function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/professores" element={<Professores />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/addCurso" element={<AddCurso />} />
          <Route path="/professores/singleProf/:id" element={<SingleProf />} />
          <Route path="/alunos/singleAluno/:id" element={<SingleAluno />} />
          <Route path="/cursos/singleCurso/:id" element={<SingleCurso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
