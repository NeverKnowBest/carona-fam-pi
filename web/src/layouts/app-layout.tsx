import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

export function AppLayout() {
  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100">
      {/* Barra Lateral Fixa */}
      <Sidebar />

      {/* Conteúdo Variável (Onde as páginas vão aparecer) */}
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
