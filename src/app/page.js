"use client";

import React, { useState, useEffect } from 'react';

export default function PaginaVenda() {
  const [stock, setStock] = useState(7);

  useEffect(() => {
    const timer = setTimeout(() => { 
      if(stock > 2) setStock(prev => prev - 1);
    }, 15000);
    return () => clearTimeout(timer);
  }, [stock]);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen text-slate-900 shadow-2xl font-sans">
      <div className="bg-black text-white text-center py-2 text-[10px] font-bold uppercase tracking-widest">
        Oferta de Lançamento: Termina Hoje
      </div>

      <section className="relative">
        <img 
          src="https://images.unsplash.com" 
          alt="Roupa Chinesa Trend"
          className="w-full aspect-[3/4] object-cover"
        />
      </section>

      <section className="p-6 space-y-4">
        <h1 className="text-2xl font-black uppercase italic">Conjunto Urban Techwear</h1>
        
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-red-600">29,99€</span>
          <span className="text-lg text-slate-400 line-through">59,99€</span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold italic">
            <span>STOCK DISPONÍVEL</span>
            <span className="text-red-600">{stock} UNIDADES</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-red-600 transition-all duration-1000" style={{width: `${(stock/10)*100}%`}}></div>
          </div>
        </div>

        <button 
          onClick={() => window.location.href = 'TEU_LINK_STRIPE_AQUI'}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-xl text-xl shadow-lg transition-all active:scale-95"
        >
          ADICIONAR AO CARRINHO
        </button>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 opacity-60">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
            📦 Envio Prioritário
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase">
            🛡️ Pagamento Seguro
          </div>
        </div>
      </section>
    </div>
  );
}
