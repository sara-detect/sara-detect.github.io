import { serif, mono } from './tokens';

export default function Funding() {
  return (
    <section style={{ background: '#6e0f1a', color: '#f6e6e2' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '76px 40px', textAlign: 'center' }}>
        <div style={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#e9b9b0', marginBottom: 26 }}>Funding &amp; Acknowledgment</div>
        <p style={{ fontFamily: serif, fontWeight: 400, fontSize: 25, lineHeight: 1.5, color: '#fdf3f0', margin: '0 auto 30px', maxWidth: 880, letterSpacing: '-0.005em' }}>
          This work is supported by the <strong style={{ fontWeight: 600 }}>United States Department of Agriculture, National Institute of Food and Agriculture (USDA-NIFA)</strong>, through the Capacity Building Grants for Non-Land-Grant Colleges of Agriculture.
        </p>
        <div style={{ display: 'inline-flex', gap: 0, border: '1px solid rgba(255,255,255,0.22)', borderRadius: 10, overflow: 'hidden', fontFamily: mono, fontSize: 12.5 }}>
          <span style={{ padding: '12px 20px', background: 'rgba(0,0,0,0.14)', color: '#e9b9b0', letterSpacing: '0.08em' }}>GRANT NO.</span>
          <span style={{ padding: '12px 20px', color: '#fff', letterSpacing: '0.08em' }}>2023-70001-40997</span>
        </div>
      </div>
    </section>
  );
}
