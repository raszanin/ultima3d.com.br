import {
  Gamepad2,
  Gem,
  Home,
  Lightbulb,
  type LucideIcon,
  Puzzle,
  UtensilsCrossed,
} from 'lucide-react';

interface Category {
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

const categories: Category[] = [
  { name: 'Decoração', icon: Home, count: 24, color: '#7B3FE4' },
  { name: 'Joias e Acessórios', icon: Gem, count: 18, color: '#EC4899' },
  { name: 'Brinquedos', icon: Gamepad2, count: 12, color: '#F59E0B' },
  { name: 'Organização', icon: Puzzle, count: 21, color: '#0EA5E9' },
  { name: 'Cozinha', icon: UtensilsCrossed, count: 15, color: '#10B981' },
  { name: 'Iluminação', icon: Lightbulb, count: 9, color: '#F97316' },
];

export function Categories() {
  return (
    <section className='py-20 px-6 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-end justify-between mb-12'>
          <div>
            <span className='text-[#7B3FE4] text-xs font-bold uppercase tracking-widest mb-2 block'>
              Categorias
            </span>
            <h2 className='text-3xl lg:text-4xl font-black text-[#0D0D0D] tracking-tight'>
              Explore por categoria
            </h2>
          </div>
          <button
            type='button'
            className='hidden md:flex items-center gap-2 text-[#7B3FE4] font-bold hover:underline'
          >
            Ver todas
          </button>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {categories.map(category => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                type='button'
                className='group bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-[#7B3FE4]/30 hover:shadow-lg transition-all'
              >
                <div
                  className='w-14 h-14 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors'
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <Icon
                    size={28}
                    style={{ color: category.color }}
                    aria-hidden='true'
                  />
                </div>
                <p className='font-bold text-[#0D0D0D] mb-1 group-hover:text-[#7B3FE4] transition-colors'>
                  {category.name}
                </p>
                <p className='text-xs text-slate-400'>
                  {category.count} produtos
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
