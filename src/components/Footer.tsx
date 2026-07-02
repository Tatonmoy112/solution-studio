export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-[#121212]">
      <div className="container mx-auto max-w-[1550px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-black text-white tracking-tighter uppercase font-mono">Studio<span className="text-teal-500">.</span></span>
            <p className="text-slate-500 text-sm font-mono uppercase tracking-[0.2em]">Enterprise Software Agency</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-mono">
              © {new Date().getFullYear()} Solution Studio • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
