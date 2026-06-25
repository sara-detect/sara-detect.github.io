import { serif, mono, href, NAV } from './tokens';

export default function Footer() {
  return (
    <footer style={{ background: '#15110f', color: '#c9beb6' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 48, paddingBottom: 52, borderBottom: '1px solid #2a221d' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
              <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg,#6e0f1a,#9a1b2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: serif, fontWeight: 700, fontSize: 18 }}>S</div>
              <div style={{ fontFamily: serif, fontWeight: 600, fontSize: 18, color: '#f4ede9' }}>SARA·Detect</div>
            </div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: '#9a8f86', margin: '0 0 18px', maxWidth: 360 }}>Detecting subacute ruminal acidosis with real-time deep learning and optical gas imaging — a collaboration between Animal Science and the School of Computing at SIU Carbondale.</p>
            <div style={{ fontFamily: mono, fontSize: 11, color: '#8d8075', letterSpacing: '0.06em' }}>USDA-NIFA · GRANT 2023-70001-40997</div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8d8075', marginBottom: 18 }}>Explore</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14.5 }}>
              {NAV.map((item) => (
                <a key={item.key} className="flink" href={href(item.route)} style={{ color: '#c9beb6' }}>{item.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8d8075', marginBottom: 18 }}>Contact &amp; Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14.5 }}>
              <a className="flink" href="mailto:aabugha@siu.edu" style={{ color: '#c9beb6' }}>aabugha@siu.edu</a>
              <a className="flink" href="mailto:khaled.ahmed@siu.edu" style={{ color: '#c9beb6' }}>khaled.ahmed@siu.edu</a>
              <a className="flink" href="https://base-lab.org" target="_blank" rel="noopener" style={{ color: '#c9beb6' }}>base-lab.org ↗</a>
              <a className="flink" href="https://www.nal.usda.gov/research-tools/food-safety-research-projects/detecting-subacute-ruminal-acidosis-using-real-time-deep-learning-algorithm" target="_blank" rel="noopener" style={{ color: '#c9beb6' }}>USDA project record ↗</a>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '22px 0 26px', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontFamily: mono, fontSize: 11, color: '#8d8075' }}>© 2026 Southern Illinois University Carbondale · All rights reserved</div>
          <div style={{ height: 5, width: 200, background: 'linear-gradient(90deg,#1a0a2e,#5b1670,#b1267a,#e8590c,#f9c80e)', borderRadius: 3 }} />
        </div>
      </div>
    </footer>
  );
}
