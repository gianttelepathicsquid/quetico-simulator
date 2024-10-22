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
        {/* (I'll continue in the next message due to length) */}
