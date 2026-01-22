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
      {/* BANNER DE URGÊNCIA */}
      <div className="bg-red-600 text-white text-center py-2 text-[10px] font-bold uppercase tracking-widest">
        Promoção de Lançamento 2026 - Termina em breve
      </div>

      {/* FOTO DO PRODUTO (Link de alta qualidade) */}
      <section className="space-y-2">
        <img 
          src="https://images.unsplash.com" 
          alt="Foto principal"
          className="w-full aspect-[3/4] object-cover rounded-b-3xl shadow-sm"
        />
        <div className="flex gap-2 px-4">
          <img 
            src="https://images.unsplash.com" 
            alt="Detalhe 1"
            className="w-1/2 aspect-square object-cover rounded-xl border border-slate-100"
          />
          <img 
            src="https://images.unsplash.com" 
            alt="Detalhe 2"
            className="w-1/2 aspect-square object-cover rounded-xl border border-slate-100"
          />
        </div>
      </section>
      {/* DETALHES DE VENDA */}
      <section className="p-6 space-y-4">
        <h1 className="text-2xl font-black uppercase tracking-tighter">Conjunto Streetwear Neo-Classic</h1>
        
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-extrabold text-red-600">29,99€</span>
          <span className="text-lg text-slate-400 line-through">59,99€</span>
        </div>

        {/* BARRA DE STOCK DINÂMICA */}
        <div className="space-y-1 bg-red-50 p-3 rounded-lg border border-red-100">
          <div className="flex justify-between text-[11px] font-bold text-red-700 uppercase">
            <span>Últimas unidades em Lisboa</span>
            <span>{stock} restantes</span>
          </div>
          <div className="w-full bg-red-200 h-1.5 rounded-full overflow-hidden">
            <div className="h-full bg-red-600 transition-all duration-1000" style={{width: `${(stock/10)*100}%`}}></div>
          </div>
        </div>

        {/* BOTÃO DE PAGAMENTO - IMPORTANTE: COLA O TEU LINK ENTRE AS ASPAS */}
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_00w4gy3M90i2gS69SZgQE00'}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-xl text-xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] transition-all active:scale-95 animate-bounce"
        >
          COMPRAR AGORA (MB WAY)
        </button>

        {/* GARANTIAS PARA PORTUGAL */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100 opacity-80">
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase">
            📦 Envio 10-12 dias
          </div>
          <div className="flex items-center gap-2 text-[9px] font-bold uppercase">
            🛡️ Devolução Grátis
          </div>
        </div>
      </section>
    </div>
  );
}
