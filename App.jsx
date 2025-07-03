function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef7f0 0%, #faf2f2 25%, #f0f4f8 50%, #f8f0f5 75%, #f5f3ff 100%)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '4rem', 
          fontWeight: 'bold', 
          background: 'linear-gradient(to right, #f43f5e, #a855f7, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem'
        }}>
          Merakelysi
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#6b7280' }}>
          Mi espacio literario
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #fda4af, #f472b6)',
          color: 'white',
          padding: '2rem',
          borderRadius: '1.5rem',
          textAlign: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
          Mis Libros por Leer
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #a78bfa, #8b5cf6)',
          color: 'white',
          padding: '2rem',
          borderRadius: '1.5rem',
          textAlign: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📅</div>
          Calendario de Lecturas
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #34d399, #10b981)',
          color: 'white',
          padding: '2rem',
          borderRadius: '1.5rem',
          textAlign: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
          Mi Progreso
        </div>
        
        <div style={{
          background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
          color: 'white',
          padding: '2rem',
          borderRadius: '1.5rem',
          textAlign: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          cursor: 'pointer'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
          Mis Clubes de Lectura
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '3rem', color: '#9ca3af' }}>
        <p>✨ Próximamente más funcionalidades ✨</p>
      </div>
    </div>
  );
}

export default App;
   
