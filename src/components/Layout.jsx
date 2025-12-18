import { Outlet, NavLink, Link } from "react-router-dom";

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

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* subtle depth */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_55%)]" />

      <header className="px-6 md:px-10 py-7 flex items-center justify-between">
        <Link to="/" className="text-xs tracking-[0.32em] uppercase opacity-85">
          Gushiken Templates
        </Link>

        <nav className="flex items-center gap-6">
          <NavItem to="/templates">Templates</NavItem>
          <NavItem to="/guides/vercel-analytics">Guides</NavItem>
          <NavItem to="/license">License</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
        </nav>
      </header>

      <main className="px-6 md:px-10 py-20">
        <Outlet />
      </main>

      <footer className="px-6 md:px-10 py-10 text-xs text-white/45">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} GUSHIKEN DESIGN — Built with care.</p>

        <div className="flex gap-4 text-white/55">
  <a className="hover:text-white/90" href="https://gushikendesign.com/" target="_blank">Official</a>
  <span className="opacity-40">｜</span>
  <a className="hover:text-white/90" href="https://quiet-ai.gushikendesign.com/" target="_blank">Free Images</a>
  <span className="opacity-40">｜</span>
  <a className="hover:text-white/90" href="https://www.instagram.com/gushikendesign/" target="_blank">Instagram</a>
</div>

        </div>
      </footer>
    </div>
  );
}
