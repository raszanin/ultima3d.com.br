import { type LucideIcon, ShieldCheck, Sparkles, Zap } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Sparkles,
    title: 'Feito sob demanda',
    description:
      'Cada produto é impresso especificamente para você. Sem estoque, sem desperdício.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade garantida',
    description:
      'Materiais premium e acabamento impecável. Seu produto passa por rigoroso controle.',
  },
  {
    icon: Zap,
    title: 'Personalização total',
    description:
      'Escolha cores, tamanhos e acabamentos. Transforme como quiser.',
  },
];

export function WhyUs() {
  return (
    <section className='py-20 px-6 bg-white relative overflow-hidden'>
      <div className='max-w-7xl mx-auto relative'>
        <div className='text-center mb-12'>
          <span className='text-[#7B3FE4] text-xs font-bold uppercase tracking-widest mb-4 block'>
            Por que nós
          </span>
          <h2 className='text-3xl lg:text-4xl font-black tracking-tight text-[#0D0D0D]'>
            Impressão 3D com qualidade premium
          </h2>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map(feature => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className='text-center p-8 bg-slate-50 rounded-3xl hover:bg-[#7B3FE4]/5 transition-colors'
              >
                <div className='w-16 h-16 mx-auto mb-6 bg-[#7B3FE4]/10 rounded-2xl flex items-center justify-center'>
                  <Icon
                    size={32}
                    className='text-[#7B3FE4]'
                    aria-hidden='true'
                  />
                </div>
                <h3 className='text-xl font-bold mb-3 text-[#0D0D0D]'>
                  {feature.title}
                </h3>
                <p className='text-slate-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
