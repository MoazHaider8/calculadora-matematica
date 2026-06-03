const squares = [
  { n: 1,  sq: 1   },
  { n: 2,  sq: 4   },
  { n: 3,  sq: 9   },
  { n: 4,  sq: 16  },
  { n: 5,  sq: 25  },
  { n: 6,  sq: 36  },
  { n: 7,  sq: 49  },
  { n: 8,  sq: 64  },
  { n: 9,  sq: 81  },
  { n: 10, sq: 100 },
  { n: 11, sq: 121 },
  { n: 12, sq: 144 },
];

export function RaizCuadradaPerfectSquares() {
  return (
    <section className="bg-white py-12 lg:py-16" aria-labelledby="squares-raizc-heading">
      <div className="site-shell">
        <p className="eyebrow">Referencia</p>
        <h2
          id="squares-raizc-heading"
          className="mt-3 mb-8 text-[1.5rem] font-bold leading-tight lg:text-[1.85rem]"
          style={{ color: '#102a43' }}
        >
          Cuadrados perfectos comunes
        </h2>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {squares.map(({ n, sq }) => (
            <div
              key={n}
              className="overflow-hidden rounded-xl bg-white text-center"
              style={{ border: '1px solid #D7E2EA', boxShadow: '0 1px 6px rgba(16,42,67,0.04)' }}
            >
              <div className="py-2 font-mono text-[10px] font-bold" style={{ background: '#0a3535', color: 'rgba(216,163,26,0.85)' }}>
                {n}² = {sq}
              </div>
              <div className="py-2.5">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">√{sq}</p>
                <p className="font-mono text-base font-bold text-deep-teal">{n}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
