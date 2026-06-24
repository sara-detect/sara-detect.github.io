import { mono } from './tokens';

export default function UtilityBar() {
  return (
    <div style={{ background: '#6e0f1a', color: '#f0d4ce', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 40px', fontFamily: mono, fontSize: 11, letterSpacing: '0.13em', textTransform: 'uppercase' }}>
      <span>Southern Illinois University Carbondale · College of Agricultural Sciences</span>
      <span style={{ opacity: 0.92 }}>USDA-NIFA · Grant No. 2023-70001-40997</span>
    </div>
  );
}
