import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './logo';

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/products', label: 'Produtos' },
];

export function Header() {
  return (
    <header className='fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        <Link href='/'>
          <Logo />
        </Link>

        <nav className='hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='hover:text-[#7B3FE4] transition-colors'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type='button'
          className='relative p-2 text-slate-600 hover:text-[#7B3FE4] transition-colors'
          aria-label='Carrinho de compras'
        >
          <ShoppingCart size={24} />
          <span className='absolute -top-1 -right-1 w-5 h-5 bg-[#7B3FE4] text-white text-xs font-bold rounded-full flex items-center justify-center'>
            0
          </span>
        </button>
      </div>
    </header>
  );
}
