import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

/* ============================
   Nav Item
============================ */
function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-xs tracking-[0.28em] uppercase transition",
          isActive ? "text-white" : "text-white/60 hover:text-white/90",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

/* ============================
   Layout Component
============================ */
export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white relative">
      {/* Background subtle gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.05),transparent_55%)]" />

      {/* ============================
           Header
      ============================ */}
      <header className="px-6 md:px-10 py-6 flex items-center justify-between relative z-50">

        {/* Logo */}
        <Link
          to="/"
          className="text-xs tracking-[0.32em] uppercase opacity-85 hover:opacity-100 transition"
        >
          Gushiken Templates
        </Link>

        {/* PC Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItem to="/templates">Templates</NavItem>
          <NavItem to="/license">License</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
        </nav>

        {/* SP Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="menu"
            className="w-7 h-7 flex flex-col justify-between focus:outline-none"
          >
            <span
              className={`block w-full h-[2px] bg-white/85 transition-all ${
                open ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-[2px] bg-white/85 transition-all ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-full h-[2px] bg-white/85 transition-all ${
                open ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* ============================
           SP Menu Overlay
      ============================ */}
      {open && (
        <div
          className="
            fixed inset-0 z-40
            bg-black/70 backdrop-blur-xl
            flex flex-col items-center justify-center
            gap-10
            animate-fadeIn
          "
        >
          <Link
            to="/templates"
            onClick={() => setOpen(false)}
            className="text-white text-lg tracking-wide opacity-90 hover:opacity-100 transition"
          >
            Templates
          </Link>

          <Link
            to="/license"
            onClick={() => setOpen(false)}
            className="text-white text-lg tracking-wide opacity-90 hover:opacity-100 transition"
          >
            License
          </Link>

          <Link
            to="/faq"
            onClick={() => setOpen(false)}
            className="text-white text-lg tracking-wide opacity-90 hover:opacity-100 transition"
          >
            FAQ
          </Link>
        </div>
      )}

      {/* ============================
           Main Outlet
      ============================ */}
      <main className="px-6 md:px-10 py-20 relative z-10">
        <Outlet />
      </main>

      {/* ============================
           Footer
      ============================ */}
      <footer className="px-6 md:px-10 py-10 text-xs text-white/45 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} GUSHIKEN DESIGN — Built with care.</p>

          <div className="flex gap-4 text-white/55">
            <a className="hover:text-white/90" href="https://gushikendesign.com/" target="_blank">
              Official
            </a>
            <span className="opacity-40">｜</span>
            <a className="hover:text-white/90" href="https://quiet-ai.gushikendesign.com/" target="_blank">
              Free Images
            </a>
            <span className="opacity-40">｜</span>
            <a className="hover:text-white/90" href="https://www.instagram.com/gushikendesign/" target="_blank">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
