import React, { useState } from 'react';
import { 
  DollarSign, 
  Star, 
  Trophy,
  Package,
  Truck,
  Box
} from 'lucide-react';

export const QueticoSimulator = () => {
  const [score, setScore] = useState(0);
  const [efficiency, setEfficiency] = useState(80);
  const [accuracy, setAccuracy] = useState(90);
  const [satisfaction, setSatisfaction] = useState(85);
  const [gameMode, setGameMode] = useState('retail');
  const [currentTip, setCurrentTip] = useState(null);

  const tooltips = {
    edi: "EDI (Electronic Data Interchange) ensures seamless communication with major retailers",
    compliance: "Meeting retailer-specific requirements for packaging, labeling, and delivery",
    dtc: "Direct-to-Consumer fulfillment for online orders with same-day shipping",
    returns: "Efficient processing of customer returns and inventory updates"
  };

  const showTip = (type) => {
    setCurrentTip(tooltips[type]);
    setTimeout(() => setCurrentTip(null), 3000);
  };

  const handleAction = (actionType) => {
    showTip(actionType);
    switch(actionType) {
      case 'edi':
        setScore(prev => prev + 500);
        setEfficiency(prev => Math.min(100, prev + 2));
        break;
      case 'compliance':
        setScore(prev => prev + 300);
        setAccuracy(prev => Math.min(100, prev + 3));
        break;
      case 'dtc':
        setScore(prev => prev + 200);
        setSatisfaction(prev => Math.min(100, prev + 2));
        break;
      case 'returns':
        setScore(prev => prev + 250);
        setSatisfaction(prev => Math.min(100, prev + 4));
        break;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0f172a', padding: '1.5rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '1.5rem',
          backgroundColor: '#1e293b',
          padding: '1rem',
          borderRadius: '0.5rem'
        }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
            Quetico 3PL Operations Simulator
          </h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => setGameMode('retail')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                backgroundColor: gameMode === 'retail' ? '#0ea5e9' : '#334155',
                color: 'white'
              }}
            >
              Retail Fulfillment
            </button>
            <button
              onClick={() => setGameMode('ecommerce')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                backgroundColor: gameMode === 'ecommerce' ? '#0ea5e9' : '#334155',
                color: 'white'
              }}
            >
              eCommerce Fulfillment
            </button>
          </div>
        </div>

        {/* Metrics Dashboard */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '1rem',
          marginBottom: '1.5rem'
        }}>
          {/* Score */}
          <div style={{
            backgroundColor: '#1e293b',
            padding: '1rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            <DollarSign color="#4ade80" style={{ marginRight: '0.5rem' }} />
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Score</div>
              <div style={{ color: 'white', fontSize: '1.25rem' }}>{score}</div>
            </div>
          </div>

          {/* Efficiency */}
          <div style={{
            backgroundColor: '#1e293b',
            padding: '1rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Star color="#facc15" style={{ marginRight: '0.5rem' }} />
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Efficiency</div>
              <div style={{ color: 'white', fontSize: '1.25rem' }}>{efficiency}%</div>
            </div>
          </div>

          {/* Accuracy */}
          <div style={{
            backgroundColor: '#1e293b',
            padding: '1rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Trophy color="#0ea5e9" style={{ marginRight: '0.5rem' }} />
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Accuracy</div>
              <div style={{ color: 'white', fontSize: '1.25rem' }}>{accuracy}%</div>
            </div>
          </div>

          {/* Satisfaction */}
          <div style={{
            backgroundColor: '#1e293b',
            padding: '1rem',
            borderRadius: '0.5rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Package color="#a855f7" style={{ marginRight: '0.5rem' }} />
            <div>
              <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Satisfaction</div>
              <div style={{ color: 'white', fontSize: '1.25rem' }}>{satisfaction}%</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          backgroundColor: '#1e293b',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          marginBottom: '1.5rem'
        }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            fontWeight: 'bold', 
            color: 'white',
            marginBottom: '1rem'
          }}>
            {gameMode === 'retail' ? 'Retail Operations' : 'eCommerce Operations'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {gameMode === 'retail' ? (
              <>
                <button
                  onClick={() => handleAction('edi')}
                  style={{
                    width: '100%',
                    backgroundColor: '#0ea5e9',
                    color: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Truck style={{ marginRight: '0.5rem' }} size={20} />
                  Process EDI Orders
                </button>
                <button
                  onClick={() => handleAction('compliance')}
                  style={{
                    width: '100%',
                    backgroundColor: '#0ea5e9',
                    color: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box style={{ marginRight: '0.5rem' }} size={20} />
                  Run Compliance Check
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleAction('dtc')}
                  style={{
                    width: '100%',
                    backgroundColor: '#0ea5e9',
                    color: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Package style={{ marginRight: '0.5rem' }} size={20} />
                  Process DTC Orders
                </button>
                <button
                  onClick={() => handleAction('returns')}
                  style={{
                    width: '100%',
                    backgroundColor: '#0ea5e9',
                    color: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Box style={{ marginRight: '0.5rem' }} size={20} />
                  Handle Returns
                </button>
              </>
            )}
          </div>
        </div>

        {/* Educational Tooltip */}
        {currentTip && (
          <div style={{
            position: 'fixed',
            bottom: '1rem',
            right: '1rem',
            backgroundColor: '#0ea5e9',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
            maxWidth: '20rem'
          }}>
            {currentTip}
          </div>
        )}
      </div>
    </div>
  );
};
