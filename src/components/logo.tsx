export function Logo() {
  return (
    <div className='flex items-center gap-3 group cursor-pointer'>
      <div className='relative w-10 h-10 flex items-center justify-center'>
        <div className='absolute inset-0 border-2 border-[#7B3FE4] rotate-45 rounded-sm group-hover:rotate-90 transition-transform duration-700 ease-in-out' />
        <div className='absolute inset-2 border border-slate-300 rotate-[25deg] opacity-50 group-hover:rotate-0 transition-transform duration-500' />
        <div className='w-2 h-2 bg-[#7B3FE4] rounded-full shadow-[0_0_10px_rgba(123,63,228,0.5)]' />
      </div>
      <div className='flex flex-col leading-none'>
        <span className='text-xl font-black tracking-tighter text-[#0D0D0D] uppercase'>
          Ultima<span className='text-[#7B3FE4]'>3D</span>
        </span>
        <span className='text-[10px] font-bold tracking-[0.4em] text-slate-500 uppercase ml-0.5'>
          Studio
        </span>
      </div>
    </div>
  );
}
