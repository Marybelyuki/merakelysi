import React, { useState } from 'react';

const Merakelysi = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'books', title: 'Mis Libros por Leer', emoji: '📚' },
    { id: 'calendar', title: 'Calendario de Lecturas', emoji: '📅' },
    { id: 'progress', title: 'Mi Progreso', emoji: '📈' },
    { id: 'quotes', title: 'Frases de Lecturas', emoji: '📝' },
    { id: 'challenges', title: 'Retos Lectores', emoji: '🧩' },
    { id: 'wishlist', title: 'Wishlist de libros', emoji: '💖' },
    { id: 'stats', title: 'Estadísticas', emoji: '📊' },
    { id: 'reviews', title: 'Reseñas Personales', emoji: '✍️' },
    { id: 'playlist', title: 'Playlist Spotify', emoji: '🎧' },
    { id: 'scrapbook', title: 'Scrapbook Literario', emoji: '📔' },
    { id: 'diary', title: 'Diario de Lectura', emoji: '📓' },
    { id: 'clubs', title: 'Mis Clubes de Lectura', emoji: '📚' },
    { id: 'monthly', title: 'Retos del Mes', emoji: '🎯' },
    { id: 'finished', title: 'Lecturas Terminadas', emoji: '✅' },
    { id: 'favorites', title: 'Favoritos del Año', emoji: '🌟' },
    { id: 'suggestions', title: 'Sugerencias Automáticas', emoji: '🤖' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef7f0 0%, #faf2f2 25%, #f0f4f8 50%, #f8f0f5 75%, #f5f3ff 100%)',
      padding: '2rem'
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
        <p style={{ fontSize: '1.2rem', color: '#6b7280', marginBottom: '1rem' }}>
          Mi espacio literario
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
          <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Datos guardados automáticamente</span>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => alert(`Próximamente: ${item.title}`)}
            style={{
              background: 'linear-gradient(135deg, #fda4af, #f472b6)',
              color: 'white',
              padding: '2rem',
              borderRadius: '1.5rem',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'center',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              {item.emoji}
            </div>
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Merakelysi;