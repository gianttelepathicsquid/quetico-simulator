import React, { useState } from 'react';
import { 
  DollarSign, 
  Star, 
  Trophy,
  Package,
  Truck,
  Box,
  Warehouse
} from 'lucide-react';

export const QueticoSimulator = () => {
  const [score, setScore] = useState(0);
  const [efficiency, setEfficiency] = useState(80);
  const [accuracy, setAccuracy] = useState(90);
  const [satisfaction, setSatisfaction] = useState(85);
  const [gameMode, setGameMode] = useState('retail');
  const [currentTip, setCurrentTip] = useState(null);

  // Educational tooltips
  const tooltips = {
    edi: "EDI (Electronic Data Interchange) ensures seamless communication with major retailers",
    compliance: "Meeting retailer-specific requirements for packaging, labeling, and delivery",
    dtc: "Direct-to-Consumer fulfillment for online orders with same-day shipping",
    returns: "Efficient processing of customer returns and inventory updates"
  };

  // Show educational tip
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
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header with Game Mode Selection */}
        <div className="flex justify-between items-center mb-6 bg-slate-800 p-4 rounded-lg">
          <h1 className="text-2xl font-bold text-white">Quetico 3PL Operations Simulator</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setGameMode('retail')}
              className={`px-4 py-2 rounded ${
                gameMode === 'retail' 
                  ? 'bg-sky-500 text-white' 
                  : 'bg-slate-700 text-gray-300'
              }`}
            >
              Retail Fulfillment
            </button>
            <button
              onClick={() => setGameMode('ecommerce')}
              className={`px-4 py-2 rounded ${
                gameMode === 'ecommerce' 
                  ? 'bg-sky-500 text-white' 
                  : 'bg-slate-700 text-gray-300'
              }`}
            >
              eCommerce Fulfillment
            </button>
          </div>
        </div>

        {/* Rest of your simulator code here... */}
{/* Metrics Dashboard */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <DollarSign className="text-green-400 mr-2" />
            <div>
              <div className="text-gray-400 text-sm">Score</div>
              <div className="text-white text-xl">{score}</div>
            </div>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <Star className="text-yellow-400 mr-2" />
            <div>
              <div className="text-gray-400 text-sm">Efficiency</div>
              <div className="text-white text-xl">{efficiency}%</div>
            </div>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <Trophy className="text-sky-400 mr-2" />
            <div>
              <div className="text-gray-400 text-sm">Accuracy</div>
              <div className="text-white text-xl">{accuracy}%</div>
            </div>
          </div>
          <div className="bg-slate-800 p-4 rounded-lg flex items-center">
            <Package className="text-purple-400 mr-2" />
            <div>
              <div className="text-gray-400 text-sm">Satisfaction</div>
              <div className="text-white text-xl">{satisfaction}%</div>
            </div>
          </div>
        </div>

        {/* Main Game Interface */}
        <div className="grid grid-cols-2 gap-6">
          {/* Actions Panel */}
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">
              {gameMode === 'retail' ? 'Retail Operations' : 'eCommerce Operations'}
            </h2>
            <div className="space-y-3">
              {gameMode === 'retail' ? (
                <>
                  <button
                    onClick={() => handleAction('edi')}
                    className="w-full bg-sky-500 text-white p-3 rounded hover:bg-sky-600 transition-colors flex items-center justify-center"
                  >
                    <Truck className="mr-2" size={20} />
                    Process EDI Orders
                  </button>
                  <button
                    onClick={() => handleAction('compliance')}
                    className="w-full bg-sky-500 text-white p-3 rounded hover:bg-sky-600 transition-colors flex items-center justify-center"
                  >
                    <Box className="mr-2" size={20} />
                    Run Compliance Check
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAction('dtc')}
                    className="w-full bg-sky-500 text-white p-3 rounded hover:bg-sky-600 transition-colors flex items-center justify-center"
                  >
                    <Package className="mr-2" size={20} />
                    Process DTC Orders
                  </button>
                  <button
                    onClick={() => handleAction('returns')}
                    className="w-full bg-sky-500 text-white p-3 rounded hover:bg-sky-600 transition-colors flex items-center justify-center"
                  >
                    <Box className="mr-2" size={20} />
                    Handle Returns
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Performance Panel */}
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Performance Metrics</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-gray-300 mb-1">
                  <span>Efficiency</span>
                  <span>{efficiency}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-sky-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${efficiency}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-gray-300 mb-1">
                  <span>Accuracy</span>
                  <span>{accuracy}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-gray-300 mb-1">
                  <span>Customer Satisfaction</span>
                  <span>{satisfaction}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${satisfaction}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Educational Tooltip */}
        {currentTip && (
          <div className="fixed bottom-4 right-4 bg-sky-500 text-white p-4 rounded-lg max-w-md animate-fade-in">
            {currentTip}
          </div>
        )}
      </div>
    </div>
  );
};
        {/* (I'll continue in the next message due to length) */}
