import React from 'react';
import { useWindowSize } from './use-window-size';

export default function App() {
  const { width, height } = useWindowSize();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Window Size Tracker</h1>
      <div style={{ 
        background: '#f0f0f0', 
        padding: '20px', 
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h2>Current Window Size:</h2>
        <p><strong>Width:</strong> {width}px</p>
        <p><strong>Height:</strong> {height}px</p>
      </div>
      
      <div style={{ 
        background: '#e3f2fd', 
        padding: '15px', 
        borderRadius: '8px',
        border: '1px solid #2196f3'
      }}>
        <h3>Instructions:</h3>
        <p>Resize your browser window to see the values update in real-time!</p>
        <p>If the values are stuck at 0x0, you need to implement the missing parts.</p>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Visual Indicator:</h3>
        <div style={{
          width: Math.min(width / 4, 300),
          height: Math.min(height / 4, 200),
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          border: '2px solid #333',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          {width > 0 ? `${Math.round(width/4)} × ${Math.round(height/4)}` : 'No Data'}
        </div>
        <p style={{ fontSize: '12px', color: '#666' }}>
          This box scales with your window size (1/4 scale, max 300×200)
        </p>
      </div>
    </div>
  );
}