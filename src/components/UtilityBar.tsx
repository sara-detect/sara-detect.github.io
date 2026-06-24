import { mono } from './tokens';

export default function UtilityBar() {
  return (
    <div
      className="utilbar"
      style={{ background: '#6e0f1a', color: '#f0d4ce', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 40px', fontFamily: mono, fontSize: 11, letterSpacing: '0.13em', textTransform: 'uppercase' }}
    >
      {/* full text on desktop, abbreviated on mobile */}
      <span className="u-full">Southern Illinois University Carbondale · College of Agricultural Sciences</span>
      <span className="u-short">SIU Carbondale · Agricultural Sciences</span>
      <span className="u-full" style={{ opacity: 0.92 }}>USDA-NIFA · Grant No. 2023-70001-40997</span>
      <span className="u-short">USDA-NIFA · Grant 2023-70001-40997</span>
    </div>
  );
}
