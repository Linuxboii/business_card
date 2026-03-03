import { BusinessCard } from './components/BusinessCard';

function App() {
    const cardProps = {
        name: "Sushanth Kasturi",
        title: "Founder and CEO",
        email: "ksushanth477@gmail.com",
        businessEmail: "avlokaibusiness@gmail.com",
        phone: "+91 93466 72015",
        website: "sushanth.avlokai.com"
    };

    const ctoProps = {
        name: "Adapa Rohith",
        title: "Co-Founder and CTO",
        email: "adaparohith29@gmail.com",
        businessEmail: "avlokaibusiness@gmail.com",
        phone: "+91 77319 83447",
        website: "rohith.avlokai.com"
    };

    const themes = [
        { id: 'theme-elegant', name: 'Theme 1: Elegant (Buenard + Lora)' }
    ];

    return (
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
            {/* Hide instructions when printing */}
            <style>
                {`
          @media print {
            .no-print { display: none !important; }
            .theme-section { page-break-after: always; margin-bottom: 0 !important; padding: 0 !important; background: none !important; }
            .theme-title { display: none; }
          }
        `}
            </style>
            <div className="no-print" style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{ fontWeight: 600, fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif' }}>AI Business Card</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Elegant typographic variation.</p>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Press <kbd>Ctrl+P</kbd> or <kbd>Cmd+P</kbd> to print. Background graphics must be enabled in print settings.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%', alignItems: 'center' }}>
                {themes.map((theme, index) => (
                    <div key={index} className="theme-section" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: '800px',
                        padding: '2rem',
                        borderRadius: '16px',
                        background: theme.id === 'theme-minimal' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.03)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <h2 className="theme-title no-print" style={{
                            marginBottom: '2rem',
                            color: theme.id === 'theme-minimal' ? '#111' : '#fff',
                            fontSize: '1.2rem',
                            fontWeight: 600,
                            fontFamily: 'Inter, sans-serif'
                        }}>
                            {theme.name}
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', alignItems: 'center' }}>
                            <BusinessCard {...cardProps} theme={theme.id} />

                            {/* Visual Divider between cards */}
                            <div className="no-print" style={{ width: '80%', height: '1px', background: 'var(--border-subtle)', margin: '1rem 0' }}></div>

                            <BusinessCard {...ctoProps} theme={theme.id} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
