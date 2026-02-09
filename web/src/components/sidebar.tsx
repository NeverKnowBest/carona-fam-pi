import { LayoutDashboard, Wallet, Settings, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside
      className="
      group                 /* 1. Define este elemento como o 'grupo' pai */
      flex flex-col h-screen 
      w-20 hover:w-64       /* 2. Largura padrão 20, expande para 64 no hover */
      bg-zinc-900 text-zinc-100 border-r border-zinc-800 
      transition-all duration-300 ease-in-out /* 3. Animação suave */
      overflow-hidden       /* 4. Esconde o que sobrar quando encolher */
    "
    >
      {/* Logo / Cabeçalho */}
      <div className="p-6 border-b border-zinc-800 flex items-center whitespace-nowrap">
        {/* O ícone ou inicial do logo sempre aparece */}
        <img
          src="/icon.png"
          alt="Logo"
          className="w-8 h-8 rounded shrink-0 object-contain"
        />

        {/* O texto completo só aparece no hover */}
        <span className="ml-3 font-bold text-xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Money Tracker
        </span>
      </div>

      {/* Links de Navegação */}
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded transition-colors whitespace-nowrap ${
              isActive
                ? "bg-zinc-800 text-green-400"
                : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
            }`
          }
        >
          <LayoutDashboard size={24} className="shrink-0" />{" "}
          {/* shrink-0 impede o ícone de amassar */}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Dashboard
          </span>
        </NavLink>

        <NavLink
          to="/transacoes"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded transition-colors whitespace-nowrap ${
              isActive
                ? "bg-zinc-800 text-green-400"
                : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
            }`
          }
        >
          <Wallet size={24} className="shrink-0" />

          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Transações
          </span>
        </NavLink>

        <NavLink
          to="/configuracoes"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-3 rounded transition-colors whitespace-nowrap ${
              isActive
                ? "bg-zinc-800 text-green-400"
                : "hover:bg-zinc-800 text-zinc-400 hover:text-zinc-100"
            }`
          }
        >
          <Settings size={24} className="shrink-0" />

          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Configurações
          </span>
        </NavLink>
      </nav>

      {/* Rodapé da Sidebar */}
      <div className="p-4 border-t border-zinc-800">
        <button className="cursor-pointer flex items-center gap-3 text-red-400 hover:text-red-300 w-full px-3 py-2 transition-colors whitespace-nowrap">
          <LogOut size={24} className="shrink-0" />

          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Sair
          </span>
        </button>
      </div>
    </aside>
  );
}
