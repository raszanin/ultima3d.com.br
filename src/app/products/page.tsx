import { Construction } from 'lucide-react';
import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'Produtos | Ultima3D Store - Em breve',
  description:
    'Nossa loja de produtos está em construção. Em breve você poderá encontrar produtos únicos impressos em 3D.',
};

export default function ProdutosPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main className='pt-32 pb-20 px-6'>
        <div className='max-w-2xl mx-auto text-center'>
          <div className='w-24 h-24 mx-auto mb-8 bg-[#7B3FE4]/10 rounded-full flex items-center justify-center'>
            <Construction
              size={48}
              className='text-[#7B3FE4]'
              aria-hidden='true'
            />
          </div>
          <h1 className='text-4xl lg:text-5xl font-black text-[#0D0D0D] tracking-tight mb-4'>
            Em construção
          </h1>
          <p className='text-xl text-slate-600 mb-8'>
            Nossa loja está sendo preparada com muito carinho para você.
            <br />
            Em breve você encontrará produtos únicos impressos em 3D.
          </p>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-[#7B3FE4]/10 rounded-full'>
            <span className='w-2 h-2 bg-[#7B3FE4] rounded-full animate-pulse' />
            <span className='text-sm font-bold text-[#7B3FE4]'>
              Aguarde novidades em breve
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
