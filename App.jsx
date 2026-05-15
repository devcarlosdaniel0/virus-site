import { useState } from "react";
import Navbar    from "./components/Navbar";
import Footer    from "./components/Footer";
import Home      from "./pages/Home";
import Definicao from "./pages/Definicao";
import Tipos     from "./pages/Tipos";
import Prevencao from "./pages/Prevencao";
import Checklist from "./pages/Checklist";
import SobreNos  from "./pages/SobreNos";

const PAGES = {
  home:      Home,
  definicao: Definicao,
  tipos:     Tipos,
  prevencao: Prevencao,
  checklist: Checklist,
  sobre:     SobreNos,
};

export default function App() {
  const [page, setPage] = useState("home");

  const navigate = (to) => {
    setPage(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Page = PAGES[page] || Home;

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <Navbar current={page} navigate={navigate} />

      <div className="flex-1 flex flex-col">
        <Page navigate={navigate} />
      </div>

      <Footer />
    </div>
  );
}
