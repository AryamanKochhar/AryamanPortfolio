import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function MarketData() {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        // Using Yahoo Finance API for Nifty 50 (^NSEI)
        const response = await axios.get('https://query1.finance.yahoo.com/v7/finance/quote?symbols=^NSEI');
        setMarketData(response.data.quoteResponse.result[0]);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch market data');
        setLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  // Dummy chart data (replace with real historical data if available)
  const chartData = {
    labels: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
    datasets: [
      {
        label: 'Nifty 50',
        data: [25000, 25100, 25050, 25200, 25150, 25300, 25250], // Replace with real data
        borderColor: '#E09F3E',
        backgroundColor: 'rgba(224, 159, 62, 0.2)',
        fill: true,
      },
    ],
  };

  if (loading) return <p>Loading market data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="market-data">
      <h2>Market Data</h2>
      <div className="market-card">
        <h3>Nifty 50</h3>
        <p>Current Price: {marketData?.regularMarketPrice || 'N/A'}</p>
        <p>Change: {marketData?.regularMarketChange || 'N/A'} ({marketData?.regularMarketChangePercent || 'N/A'}%)</p>
        <Line data={chartData} />
      </div>
      {/* Add more indices (BSE, NSE) by fetching additional symbols */}
    </section>
  );
}

export default MarketData;