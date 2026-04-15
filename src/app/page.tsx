import type { Metadata } from 'next';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { WhyUs } from '@/components/why-us';

export const metadata: Metadata = {
  title: 'Ultima3D Store | Produtos Personalizados em Impressão 3D',
  description:
    'Loja online de produtos únicos impressos em 3D. Decoração, acessórios, organizers e presentes personalizados. Feitos sob medida para você.',
  keywords: [
    'loja 3D',
    'produtos personalizados',
    'impressão 3D',
    'decoração',
    'presente criativo',
  ],
};

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
      <main>
        <Hero />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
}
