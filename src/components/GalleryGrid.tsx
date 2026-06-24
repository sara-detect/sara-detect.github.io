import { useState } from 'react';
import { serif, mono, c, base } from './tokens';

type Tile = {
  file: string;
  eyebrow: string;
  title: string;
  caption: string; // lightbox caption
  height: number;
  objectPosition?: string;
};

const EXPERIMENTS: Tile[] = [
  { file: 'field-ogi-cow.png', eyebrow: 'FIELD DEPLOYMENT', title: 'Dual OGI cameras recording a steer at the SIU farm', caption: 'Dual OGI cameras recording a steer at the SIU farm', height: 440 },
  { file: 'invitro-fermentation.png', eyebrow: 'IN-VITRO', title: 'ANKOM rumen fermentation array', caption: 'ANKOM in-vitro rumen fermentation array', height: 440 },
];
const CHAMBER: Tile = { file: 'lab-gas-chamber.png', eyebrow: 'CONTROLLED CO₂ RELEASE', title: 'FLIR OGI cameras imaging a calibrated gas chamber', caption: 'FLIR OGI cameras imaging a calibrated CO₂ release chamber', height: 420, objectPosition: 'center 40%' };
const WORKSHOP: Tile = { file: 'workshop-presentation.png', eyebrow: 'AI IN ANIMAL SCIENCE WORKSHOP · MAR 18, 2026', title: 'Presenting CarboFormer results to the SIU animal-science community', caption: 'Presenting CarboFormer at the AI in Animal Science Workshop · Mar 18, 2026', height: 520, objectPosition: 'center 35%' };

const eyebrowStyle = { fontFamily: mono, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: c.maroon2, fontWeight: 600, marginBottom: 28 } as const;

function TileCard({ tile, onOpen }: { tile: Tile; onOpen: (t: Tile) => void }) {
  return (
    <div
      className="card"
      onClick={() => onOpen(tile)}
      style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', border: `1px solid ${c.line}`, cursor: 'pointer' }}
    >
      <img
        src={`${base}assets/${tile.file}`}
        alt={tile.title}
        style={{ width: '100%', height: tile.height, objectFit: 'cover', objectPosition: tile.objectPosition, display: 'block' }}
      />
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '28px 26px 18px', background: 'linear-gradient(0deg, rgba(15,11,9,0.82), transparent)' }}>
        <div style={{ fontFamily: mono, fontSize: 10.5, letterSpacing: '0.1em', color: c.gold, marginBottom: 7 }}>{tile.eyebrow}</div>
        <div style={{ fontFamily: serif, fontSize: 19, color: '#fff', fontWeight: 600, maxWidth: 720 }}>{tile.title}</div>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [open, setOpen] = useState<Tile | null>(null);

  return (
    <>
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '72px 40px 24px' }}>
        <div style={eyebrowStyle}>Experiments &amp; Data Collection</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: 22 }}>
          {EXPERIMENTS.map((t) => <TileCard key={t.file} tile={t} onOpen={setOpen} />)}
        </div>
        <div style={{ marginTop: 22 }}>
          <TileCard tile={CHAMBER} onOpen={setOpen} />
        </div>
      </section>

      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 40px 90px' }}>
        <div style={eyebrowStyle}>Workshop &amp; Outreach</div>
        <TileCard tile={WORKSHOP} onOpen={setOpen} />
      </section>

      {open && (
        <div
          onClick={() => setOpen(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(12,9,8,0.92)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}
        >
          <div style={{ position: 'absolute', top: 26, right: 32, fontFamily: mono, fontSize: 13, color: '#f4ede9', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8, padding: '9px 16px' }}>✕ &nbsp;CLOSE</div>
          <div style={{ maxWidth: 1100, width: '100%' }}>
            <img src={`${base}assets/${open.file}`} alt="Enlarged view" style={{ width: '100%', maxHeight: '78vh', objectFit: 'contain', borderRadius: 12, display: 'block' }} />
            <div style={{ fontFamily: mono, fontSize: 13, color: c.gold, textAlign: 'center', marginTop: 20, letterSpacing: '0.04em' }}>{open.caption}</div>
          </div>
        </div>
      )}
    </>
  );
}
