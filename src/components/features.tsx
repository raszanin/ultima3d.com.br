import { type LucideIcon, ShieldCheck, Sparkles, Zap } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Zap,
    title: 'Prototipagem Rápida',
    description:
      'Do conceito ao protótipo em tempo recorde. Sua ideia ganha forma com agilidade.',
  },
  {
    icon: ShieldCheck,
    title: 'Precisão Técnica',
    description:
      'Materiais premium e tolerâncias de engenharia para peças funcionais reais.',
  },
  {
    icon: Sparkles,
    title: 'Acabamento Exclusivo',
    description:
      'Cada peça é tratada e finalizada como uma obra, não um produto genérico.',
  },
];

export function Features() {
  return (
    <section
      id='servicos'
      className='py-32 bg-slate-50 relative overflow-hidden'
    >
      <div className='max-w-7xl mx-auto px-6 relative'>
        <div className='text-center mb-16'>
          <span className='text-[#7B3FE4] text-xs font-bold uppercase tracking-widest mb-4 block'>
            O que fazemos
          </span>
          <h2 className='text-4xl lg:text-5xl font-black tracking-tight text-[#0D0D0D]'>
            Criação sob medida
          </h2>
          <p className='text-slate-600 mt-4 max-w-xl mx-auto'>
            Não é só impressão. É transformação de ideias em peças únicas,
            feitas exclusivamente para você.
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className='group p-8 bg-white border border-slate-200 rounded-2xl hover:border-[#7B3FE4]/50 hover:shadow-lg transition-all duration-300'>
      <div className='w-14 h-14 bg-[#7B3FE4]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7B3FE4]/20 transition-colors'>
        <Icon size={28} className='text-[#7B3FE4]' aria-hidden='true' />
      </div>
      <h3 className='text-2xl font-bold mb-3 text-[#0D0D0D]'>{title}</h3>
      <p className='text-slate-600 leading-relaxed'>{description}</p>
    </div>
  );
}
