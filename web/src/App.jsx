import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./layouts/app-layout"; // <--- Importamos o Layout
import { Login } from "./pages/login";
import { Inicio } from "./pages/inicio";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTA PÚBLICA (Sem Sidebar) */}
        {/* O Login ocupa a tela toda, então fica fora do Layout */}
        <Route path="/" element={<Login />} />

        {/* ROTAS PRIVADAS (Com Sidebar) */}
        {/* Aqui criamos um grupo. Tudo que estiver aqui dentro, ganha a Sidebar de brinde */}
        <Route element={<AppLayout />}>
          <Route path="/inicio" element={<Inicio />} />

          {/* Futuramente você adiciona mais aqui: */}
          {/* <Route path="/transacoes" element={<Transacoes />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
