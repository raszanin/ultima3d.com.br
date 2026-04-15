import {
  Box,
  ChevronRight,
  RefreshCw,
  Shield,
  ShoppingBag,
  Truck,
} from 'lucide-react';

export function Hero() {
  return (
    <section className='bg-gradient-to-br from-[#7B3FE4]/5 via-white to-[#7B3FE4]/5 pt-40 pb-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div>
            <span className='inline-flex items-center gap-2 px-4 py-2 bg-[#7B3FE4] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6'>
              <span className='w-2 h-2 bg-white rounded-full animate-pulse' />
              Novos produtos toda semana
            </span>
            <h1 className='text-5xl lg:text-6xl font-black text-[#0D0D0D] leading-[0.95] tracking-tight mb-6'>
              Produtos únicos,
              <br />
              <span className='text-[#7B3FE4]'>impressos</span> pra você.
            </h1>
            <p className='text-xl text-slate-600 max-w-lg leading-relaxed mb-8'>
              Peças decorativas, organizers, presentes personalizados e muito
              mais. Feitos sob medida com tecnologia 3D de última geração.
            </p>
            <div className='flex flex-wrap gap-4'>
              <button
                type='button'
                className='bg-[#7B3FE4] text-white px-8 py-5 rounded-2xl font-bold flex items-center gap-3 hover:shadow-xl hover:shadow-[#7B3FE4]/20 transition-all'
              >
                Ver Produtos <ChevronRight size={20} aria-hidden='true' />
              </button>
              <button
                type='button'
                className='border-2 border-slate-200 text-[#0D0D0D] px-8 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all'
              >
                Personalizar
              </button>
            </div>
          </div>

          <div className='relative'>
            <div className='aspect-square bg-gradient-to-br from-[#7B3FE4]/10 to-[#7B3FE4]/5 rounded-3xl flex items-center justify-center overflow-hidden'>
              <VisualizationPlaceholder />
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-slate-200'>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-[#7B3FE4]/10 rounded-xl flex items-center justify-center'>
              <Truck size={24} className='text-[#7B3FE4]' aria-hidden='true' />
            </div>
            <div>
              <p className='font-bold text-[#0D0D0D]'>Frete grátis</p>
              <p className='text-sm text-slate-500'>Acima de R$ 150</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-[#7B3FE4]/10 rounded-xl flex items-center justify-center'>
              <Shield size={24} className='text-[#7B3FE4]' aria-hidden='true' />
            </div>
            <div>
              <p className='font-bold text-[#0D0D0D]'>Garantia</p>
              <p className='text-sm text-slate-500'>30 dias</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-[#7B3FE4]/10 rounded-xl flex items-center justify-center'>
              <RefreshCw
                size={24}
                className='text-[#7B3FE4]'
                aria-hidden='true'
              />
            </div>
            <div>
              <p className='font-bold text-[#0D0D0D]'>Troca fácil</p>
              <p className='text-sm text-slate-500'>7 dias</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <div className='w-12 h-12 bg-[#7B3FE4]/10 rounded-xl flex items-center justify-center'>
              <ShoppingBag
                size={24}
                className='text-[#7B3FE4]'
                aria-hidden='true'
              />
            </div>
            <div>
              <p className='font-bold text-[#0D0D0D]'>Pagamento seguro</p>
              <p className='text-sm text-slate-500'>Pix ou cartão</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualizationPlaceholder() {
  return (
    <div className='relative aspect-square w-full max-w-md'>
      <div className='absolute inset-0 bg-gradient-to-tr from-[#7B3FE4]/10 to-transparent rounded-3xl' />
      <div className='relative w-full h-full border border-slate-200 rounded-3xl p-8 bg-white shadow-xl flex items-center justify-center overflow-hidden'>
        <div className='absolute top-4 left-4 font-mono text-[10px] text-slate-400'>
          XYZ_COORD_SYSTEM {'{'}ONLINE{'}'}
        </div>
        <Box className='w-48 h-48 text-[#7B3FE4] stroke-[1] animate-pulse' />
        <div className='absolute bottom-8 right-8 text-right'>
          <p className='text-[10px] font-mono text-slate-400'>
            STATUS: PRINTING...
          </p>
          <div className='w-32 h-1 bg-slate-100 mt-1 rounded-full overflow-hidden'>
            <div className='w-2/3 h-full bg-[#7B3FE4]' />
          </div>
        </div>
      </div>
    </div>
  );
}
