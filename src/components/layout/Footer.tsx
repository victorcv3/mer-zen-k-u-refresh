import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="content-container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-medium text-foreground">
              Mer Zen Kïu
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tu espacio de bienestar holístico en Terrassa. Masajes, Reiki, 
              tratamientos faciales y rituales de belleza para tu equilibrio 
              cuerpo y mente.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">
              Enlaces Rápidos
            </h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/tratamientos" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Tratamientos
              </Link>
              <Link to="/facial" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Facial
              </Link>
              <Link to="/rituales" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Rituales
              </Link>
              <Link to="/producto" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Productos
              </Link>
              <Link to="/normativa" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Normativa
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">
              Contacto
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:677242258" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>677 242 258</span>
              </a>
              <a 
                href="mailto:merzenkiu@gmail.com" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>merzenkiu@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Terrassa - Barcelona</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium text-foreground">
              Síguenos
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/merzenkiu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/merzenkiu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@merzenkiu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-smooth"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Mer Zen Kïu. Todos los derechos reservados.</p>
            <Link to="/normativa" className="hover:text-primary transition-smooth">
              Política y Normativa
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}