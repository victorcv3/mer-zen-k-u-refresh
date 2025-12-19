import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tratamientos from "./pages/Tratamientos";
import Facial from "./pages/Facial";
import Rituales from "./pages/Rituales";
import MaquillajePeluqueria from "./pages/MaquillajePeluqueria";
import Producto from "./pages/Producto";
import Normativa from "./pages/Normativa";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tratamientos" element={<Tratamientos />} />
          <Route path="/facial" element={<Facial />} />
          <Route path="/rituales" element={<Rituales />} />
          <Route path="/maquillaje" element={<MaquillajePeluqueria />} />
          <Route path="/producto" element={<Producto />} />
          <Route path="/normativa" element={<Normativa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;