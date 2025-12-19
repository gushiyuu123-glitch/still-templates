import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

/* ------------------------------
   Nav Item Component
------------------------------ */
function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "text-[11px] tracking-[0.32em] uppercase transition-all",
          isActive
            ? "text-white"
            : "text-white/60 hover:text-white/90"
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

/* ------------------------------
   Layout Main
------------------------------ */
export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-white relative">

      {/* ===== 背景の静かなラジアル光 ===== */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.05),transparent_60%)]" />

      {/* ==================================
           Header
      ================================== */}
      <header className="px-6 md:px-10 py-6 flex items-center justify-between relative z-[50]">

        {/* Logo */}
        <Link
          to="/"
          className="text-[11px] tracking-[0.32em] uppercase opacity-85 hover:opacity-100 transition"
        >
          Gushiken Templates
        </Link>

        {/* --- PC Navigation --- */}
        <nav className="hidden md:flex items-center gap-8">
          <NavItem to="/templates">Templates</NavItem>
          <NavItem to="/license">License</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
        </nav>

        {/* --- SP Hamburger --- */}
        <button
          onClick={() => setOpen(true)}
          aria-label="menu"
          className="md:hidden w-8 h-8 flex flex-col justify-between focus:outline-none"
        >
          <span className="block w-full h-[2px] bg-white/85" />
          <span className="block w-full h-[2px] bg-white/85" />
          <span className="block w-full h-[2px] bg-white/85" />
        </button>
      </header>

      {/* ==================================
           Main Content
      ================================== */}
      <main className="px-6 md:px-10 py-20 relative z-10 aq-page-fade">
        <Outlet />
      </main>

      {/* ==================================
           Footer
      ================================== */}
      <footer
  className="
    px-6 md:px-10 py-10 
    text-xs text-white/45 
    relative z-10
    border-t border-white/10   /* ← SANKOUライン */
  "
>
  <div
    className="
      flex flex-col items-center text-center
      md:flex-row md:items-center md:justify-between
      gap-4
    "
  >
    <p className="md:text-left text-center">
      © {new Date().getFullYear()} GUSHIKEN DESIGN — Built with care.
    </p>

    <div className="flex gap-4 text-white/55">
      <a
        className="hover:text-white/90"
        href="https://gushikendesign.com/"
        target="_blank"
      >
        Official
      </a>
      <span className="opacity-40">｜</span>
      <a
        className="hover:text-white/90"
        href="https://quiet-ai.gushikendesign.com/"
        target="_blank"
      >
        Free Images
      </a>
      <span className="opacity-40">｜</span>
      <a
        className="hover:text-white/90"
        href="https://www.instagram.com/gushikendesign/"
        target="_blank"
      >
        Instagram
      </a>
    </div>
  </div>
</footer>


      {/* ==================================
           SP MENU OVERLAY（最上層固定）
           Diorの展示会レベルの没入感
      ================================== */}
      {open && (
        <div
          className="
            fixed inset-0 z-[999]
            bg-black/80 backdrop-blur-[18px]
            flex flex-col items-center justify-center gap-12
            animate-fadeIn
          "
        >
          {/* Close Button（右上固定） */}
          <button
            onClick={() => setOpen(false)}
            className="
              absolute top-8 right-8 text-white/90 
              text-3xl leading-none tracking-wider
              hover:text-white transition
            "
          >
            ×
          </button>

          {/* Menu Items */}
          <Link
            to="/templates"
            onClick={() => setOpen(false)}
            className="text-white text-lg tracking-[0.2em] opacity-90 hover:opacity-100 transition aq-fade-up"
          >
            Templates
          </Link>

          <Link
            to="/license"
            onClick={() => setOpen(false)}
            className="text-white text-lg tracking-[0.2em] opacity-90 hover:opacity-100 transition aq-fade-up aq-delay-1"
          >
            License
          </Link>

          <Link
            to="/faq"
            onClick={() => setOpen(false)}
            className="text-white text-lg tracking-[0.2em] opacity-90 hover:opacity-100 transition aq-fade-up aq-delay-2"
          >
            FAQ
          </Link>
        </div>
      )}
    </div>
  );
}
