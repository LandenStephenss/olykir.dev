export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-slate-500 py-8 px-6 border-t border-slate-900">
      <div className="max-w-6xl mx-auto text-center">
        <p>
          © {currentYear} Landen Stephens. Built with React and Tailwind CSS.
        </p>
        <p className="mt-2 text-sm">
          Web & Firmware Developer at VibeCTRL • Car Content Creator
        </p>
      </div>
    </footer>
  );
}
