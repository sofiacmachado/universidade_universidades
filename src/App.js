import './css/styles.css';
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/homepage'
import Alunos from './components/alunos';
import Cursos from './components/cursos';
import Professores from './components/professores';
import SingleProf from './components/singleProf';
import SingleAluno from "./components/singleAluno";
import SingleCurso from "./components/singleCurso";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/alunos" element={<Alunos />} />
          <Route path="/professores" element={<Professores />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/professores/singleProf" element={<SingleProf />} />
          <Route path="/alunos/singleAluno" element={<SingleAluno />} />
          <Route path="/cursos/singleCurso" element={<SingleCurso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
