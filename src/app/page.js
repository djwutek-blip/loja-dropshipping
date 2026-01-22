import React, { useState, useEffect } from 'react';

export default function PaginaVenda() {
  const [stock, setStock] = useState(7); // Simulação de stock baixo

  // Efeito de urgência: o stock "baixa" sozinho
  useEffect(() => {
    const timer = setTimeout(() => { if(stock > 2) setStock(stock - 1) }, 15000);
    return () => clearTimeout(timer);
  }, [stock]);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen text-slate-900 shadow-2xl">
      {/* Banner de Urgência */}
      <div className="bg-black text-white text-center py-2 text-xs font-bold uppercase tracking-widest">
        Oferta de Lançamento: Termina em 05:42
      </div>

      {/* Imagem do Produto (Roupa Chinesa Trend) */}
      <section className="relative">
        <img 
          src="https://images.unsplash.com" 
          alt="Streetwear Look"
          className="w-full aspect-[3/4] object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold shadow-sm">
          🔥 +127 vendidos hoje
        </div>
      </section>

      {/* Info de Preço e Compra */}
      <section className="p-6 space-y-4">
        <h1 className="text-2xl font-black italic uppercase italic">Conjunto Urban Techwear</h1>
        
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-red-600">29,99€</span>
          <span className="text-lg text-slate-400 line-through">59,99€</span>
        </div>

        {/* Barra de Stock Realista */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold">
            <span>Stock Disponível</span>
            <span className="text-red-600">{stock} unidades</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div className={`h-full bg-red-600 transition-all duration-1000`} style={{width: `${(stock/10)*100}%`}}></div>
          </div>
        </div>

        {/* Botão de Checkout Rápido */}
        <button 
          onClick={() => window.location.href = 'TEU_LINK_CHECKOUT_SHOPIFY'}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-xl text-xl shadow-[0_10px_20px_rgba(34,197,94,0.3)] transition-all active:scale-95"
        >
          QUERO APROVEITAR O DESCONTO
        </button>

        {/* Garantias de Dropshipping */}
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
            <span>📦</span> Envio Prioritário
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
            <span>🛡️</span> Pagamento MB WAY
          </div>
        </div>
      </section>
    </div>
  );
}
