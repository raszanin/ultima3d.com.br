import {
  Box,
  ChevronRight,
  MousePointer2,
  Share2,
  ShieldCheck,
  Zap,
} from 'lucide-react';

// --- COMPONENTE DO LOGOTIPO (GEOMETRIA PURA) ---
const Logo = () => (
  <div className='flex items-center gap-3 group cursor-pointer'>
    <div className='relative w-10 h-10 flex items-center justify-center'>
      {/* Estrutura Geométrica que remete a um cubo/eixos X,Y,Z */}
      <div className='absolute inset-0 border-2 border-[#1E40AF] rotate-45 rounded-sm group-hover:rotate-90 transition-transform duration-700 ease-in-out'></div>
      <div className='absolute inset-2 border border-slate-300 rotate-[25deg] opacity-50 group-hover:rotate-0 transition-transform duration-500'></div>
      <div className='w-2 h-2 bg-[#1E40AF] rounded-full shadow-[0_0_10px_rgba(30,64,175,0.5)]'></div>
    </div>
    <div className='flex flex-col leading-none'>
      <span className='text-xl font-black tracking-tighter text-slate-900 uppercase'>
        Ultima<span className='text-[#1E40AF]'>3D</span>
      </span>
      <span className='text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase ml-0.5'>
        Studio
      </span>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className='min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-[#1E40AF]'>
      {/* HEADER */}
      <header className='fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100'>
        <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
          <Logo />

          <nav className='hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600'>
            <a
              href='#servicos'
              className='hover:text-[#1E40AF] transition-colors'
            >
              Serviços
            </a>
            <a
              href='#materiais'
              className='hover:text-[#1E40AF] transition-colors'
            >
              Materiais
            </a>
            <a
              href='#portfolio'
              className='hover:text-[#1E40AF] transition-colors'
            >
              Portfólio
            </a>
          </nav>

          <button
            type='button'
            className='bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#1E40AF] transition-all active:scale-95'
          >
            Orçamento
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className='pt-40 pb-20 px-6'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
          <div>
            <div className='inline-block px-3 py-1 bg-blue-50 text-[#1E40AF] text-xs font-bold uppercase tracking-widest rounded-full mb-6'>
              Precisão Industrial . ISO 9001
            </div>
            <h1 className='text-6xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8'>
              A ÚLTIMA <br />
              <span className='text-[#1E40AF]'>CAMADA</span> É A <br />
              PERFEIÇÃO.
            </h1>
            <p className='text-xl text-slate-500 max-w-md leading-relaxed mb-10'>
              Transformamos designs complexos em objetos físicos de alta
              fidelidade. Engenharia, prototipagem e manufatura aditiva de
              elite.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button
                type='button'
                className='bg-[#1E40AF] text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-3 hover:shadow-2xl hover:shadow-blue-200 transition-all'
              >
                Iniciar Projeto <ChevronRight size={20} />
              </button>
              <button
                type='button'
                className='border-2 border-slate-200 text-slate-900 px-8 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all'
              >
                Ver Portfólio
              </button>
            </div>
          </div>

          {/* ELEMENTO VISUAL 3D (REPRESENTAÇÃO TÉCNICA) */}
          <div className='relative aspect-square flex items-center justify-center'>
            <div className='absolute inset-0 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-50 blur-3xl'></div>
            <div className='relative w-full h-full border border-slate-100 rounded-3xl p-8 bg-white shadow-inner flex items-center justify-center overflow-hidden'>
              <div className='absolute top-4 left-4 font-mono text-[10px] text-slate-300'>
                XYZ_COORD_SYSTEM {/* ONLINE */}
              </div>
              <Box className='w-48 h-48 text-[#1E40AF] stroke-[1px] animate-pulse' />
              <div className='absolute bottom-8 right-8 text-right'>
                <p className='text-[10px] font-mono text-slate-400'>
                  STATUS: PRINTING...
                </p>
                <div className='w-32 h-1 bg-slate-100 mt-1 rounded-full overflow-hidden'>
                  <div className='w-2/3 h-full bg-[#1E40AF]'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / DIFERENCIAIS */}
      <section id='servicos' className='py-24 bg-slate-900 text-white'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center'>
                <Zap size={24} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold'>Prototipagem Rápida</h3>
              <p className='text-slate-400 leading-relaxed'>
                Reduza o tempo de desenvolvimento. Receba seu protótipo
                funcional em até 48 horas.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center'>
                <ShieldCheck size={24} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold'>Peças de Engenharia</h3>
              <p className='text-slate-400 leading-relaxed'>
                Materiais técnicos (Nylon, Carbono, TPU) para aplicações
                mecânicas reais e duráveis.
              </p>
            </div>
            <div className='space-y-4'>
              <div className='w-12 h-12 bg-[#1E40AF] rounded-xl flex items-center justify-center'>
                <MousePointer2 size={24} className='text-white' />
              </div>
              <h3 className='text-2xl font-bold'>Acabamento Premium</h3>
              <p className='text-slate-400 leading-relaxed'>
                Tratamento de superfície, pintura e polimento para transformar
                impressões em produtos finais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className='py-20 px-6 border-t border-slate-100'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8'>
          <Logo />
          <div className='text-sm font-mono text-slate-400'>
            HTTP://WWW.ULTIMA3D.COM.BR
          </div>
          <div className='flex gap-6'>
            <Share2
              size={20}
              className='text-slate-300 hover:text-[#1E40AF] cursor-pointer transition-colors'
            />
          </div>
        </div>
        <div className='max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-50 text-center'>
          <p className='text-xs font-bold uppercase tracking-widest text-slate-400'>
            © 2026 Ultima3D Studio — Engenharia em Manufatura Aditiva
          </p>
        </div>
      </footer>
    </div>
  );
}
