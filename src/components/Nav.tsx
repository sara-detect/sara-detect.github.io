import { serif, c, href, NAV, type PageKey } from './tokens';

export default function Nav({ active }: { active: PageKey }) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(10px)', borderBottom: `1px solid ${c.line}` }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 40px' }}>
        <a href={href('')} style={{ display: 'flex', alignItems: 'center', gap: 13 }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(135deg,#6e0f1a,#9a1b2a)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: serif, fontWeight: 700, fontSize: 19 }}>S</div>
          <div style={{ fontFamily: serif, fontWeight: 600, fontSize: 19, color: c.ink }}>SARA<span style={{ color: c.maroon2 }}>·</span>Detect</div>
        </a>
        <nav style={{ display: 'flex', gap: 32, fontSize: 14.5, fontWeight: 500, color: '#4a443f' }}>
          {NAV.map((item) => {
            const on = item.key === active;
            return (
              <a
                key={item.key}
                className={on ? undefined : 'navlink'}
                href={href(item.route)}
                style={{
                  paddingBottom: 4,
                  borderBottom: `2px solid ${on ? c.maroon : 'transparent'}`,
                  ...(on ? { color: c.maroon, fontWeight: 600 } : null),
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
