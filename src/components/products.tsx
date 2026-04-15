import { Heart, ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Organizador Geométrico Cubo',
    price: 89.9,
    image: 'cube',
    category: 'Decoração',
    rating: 4.8,
    reviews: 124,
    badge: 'NOVO',
  },
  {
    id: '2',
    name: 'Porta-joias Flor Lotus',
    price: 129.9,
    originalPrice: 159.9,
    image: 'lotus',
    category: 'Acessórios',
    rating: 5.0,
    reviews: 89,
    badge: '20% OFF',
  },
  {
    id: '3',
    name: 'Miniatura Dragão STL',
    price: 59.9,
    image: 'dragon',
    category: 'Colecionáveis',
    rating: 4.9,
    reviews: 256,
  },
  {
    id: '4',
    name: 'Luminária Lua 3D',
    price: 189.9,
    image: 'moon',
    category: 'Iluminação',
    rating: 4.7,
    reviews: 67,
    badge: 'DESTAQUE',
  },
  {
    id: '5',
    name: 'Suporte para Fones',
    price: 79.9,
    image: 'headphone',
    category: 'Escritório',
    rating: 4.6,
    reviews: 143,
  },
  {
    id: '6',
    name: 'Quebra-cabeça 3D',
    price: 99.9,
    image: 'puzzle',
    category: 'Brinquedos',
    rating: 4.8,
    reviews: 92,
  },
  {
    id: '7',
    name: 'Porta-talpetes Minimalista',
    price: 49.9,
    originalPrice: 69.9,
    image: 'vase',
    category: 'Decoração',
    rating: 4.5,
    reviews: 178,
    badge: '30% OFF',
  },
  {
    id: '8',
    name: 'Caneca Gato Cute',
    price: 69.9,
    image: 'mug',
    category: 'Cozinha',
    rating: 4.9,
    reviews: 312,
    badge: 'TOP VENDA',
  },
];

function ProductCard({ product }: { product: Product }) {
  return (
    <div className='group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-[#7B3FE4]/30 hover:shadow-xl transition-all'>
      <div className='relative aspect-square bg-slate-50 flex items-center justify-center p-8'>
        <ProductImage type={product.image} />
        {product.badge && (
          <span className='absolute top-4 left-4 bg-[#7B3FE4] text-white text-xs font-bold px-3 py-1 rounded-full'>
            {product.badge}
          </span>
        )}
        <button
          type='button'
          className='absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#7B3FE4] hover:text-white'
          aria-label='Adicionar aos favoritos'
        >
          <Heart size={18} aria-hidden='true' />
        </button>
      </div>
      <div className='p-6'>
        <p className='text-xs text-slate-400 uppercase tracking-wider mb-2'>
          {product.category}
        </p>
        <h3 className='font-bold text-[#0D0D0D] mb-2 line-clamp-2'>
          {product.name}
        </h3>
        <div className='flex items-center gap-2 mb-4'>
          <div className='flex'>
            <Star
              size={14}
              className={
                product.rating >= 1
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-200'
              }
              aria-hidden='true'
            />
            <Star
              size={14}
              className={
                product.rating >= 2
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-200'
              }
              aria-hidden='true'
            />
            <Star
              size={14}
              className={
                product.rating >= 3
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-200'
              }
              aria-hidden='true'
            />
            <Star
              size={14}
              className={
                product.rating >= 4
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-200'
              }
              aria-hidden='true'
            />
            <Star
              size={14}
              className={
                product.rating >= 5
                  ? 'text-amber-400 fill-amber-400'
                  : 'text-slate-200'
              }
              aria-hidden='true'
            />
          </div>
          <span className='text-xs text-slate-500'>({product.reviews})</span>
        </div>
        <div className='flex items-center justify-between'>
          <div>
            <span className='text-2xl font-black text-[#7B3FE4]'>
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className='text-sm text-slate-400 line-through ml-2'>
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          <button
            type='button'
            className='w-12 h-12 bg-[#7B3FE4] text-white rounded-xl flex items-center justify-center hover:bg-[#6B2FD4] transition-colors'
            aria-label='Adicionar ao carrinho'
          >
            <ShoppingCart size={20} aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductImage({ type }: { type: string }) {
  const colors: Record<string, string> = {
    cube: '#7B3FE4',
    lotus: '#EC4899',
    dragon: '#F59E0B',
    moon: '#F97316',
    headphone: '#0EA5E9',
    puzzle: '#10B981',
    vase: '#8B5CF6',
    mug: '#EF4444',
  };
  const color = colors[type] || '#7B3FE4';

  return (
    <svg
      viewBox='0 0 100 100'
      className='w-full h-full'
      aria-label={`Ilustração de ${type}`}
    >
      <rect
        x='25'
        y='25'
        width='50'
        height='50'
        rx='8'
        fill={`${color}20`}
        stroke={color}
        strokeWidth='2'
      />
      <circle cx='50' cy='50' r='15' fill={`${color}30`} />
      <path d='M35 50 L50 35 L65 50 L50 65 Z' fill={color} opacity='0.5' />
    </svg>
  );
}

export function Products() {
  return (
    <section className='py-20 px-6 bg-slate-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-end justify-between mb-12'>
          <div>
            <span className='text-[#7B3FE4] text-xs font-bold uppercase tracking-widest mb-2 block'>
              Produtos
            </span>
            <h2 className='text-3xl lg:text-4xl font-black text-[#0D0D0D] tracking-tight'>
              Mais Vendidos
            </h2>
          </div>
          <button
            type='button'
            className='hidden md:flex items-center gap-2 text-[#7B3FE4] font-bold hover:underline'
          >
            Ver todos os produtos
          </button>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
