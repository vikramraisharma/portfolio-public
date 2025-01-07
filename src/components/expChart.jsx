import React, { useState, useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import '../App.css';
import { CustomTooltip } from './expToolTip'; // This is correct if expToolTip is in the same components folder

const ExpBarChart = ({ designData, codeData, bizData }) => {
  const [activeDataset, setActiveDataset] = useState('design');

  const getCurrentData = () => {
    switch(activeDataset) {
      case 'design':
        return designData;
      case 'code':
        return codeData;
      case 'business':
        return bizData;
      default:
        return designData;
    }
  };

  const filteredData = getCurrentData();

  const chartHeight = useMemo(() => {
    if (!filteredData) return 500;
    const barHeight = 40;
    const barPadding = 20;
    const totalPadding = 55;
    return (filteredData.length * (barHeight + barPadding)) + totalPadding;
  }, [filteredData]);

  if (!filteredData || filteredData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="chart-container">
      <div className="chart-nav">
        <button
          onClick={() => setActiveDataset('design')}
          className={`nav-button ${activeDataset === 'design' ? 'active' : ''}`}
          aria-label="Show design experience">Design</button>
        <button
          onClick={() => setActiveDataset('code')}
          className={`nav-button ${activeDataset === 'code' ? 'active' : ''}`}
          aria-label="Show coding experience">Software</button>
        <button
          onClick={() => setActiveDataset('business')}
          className={`nav-button ${activeDataset === 'business' ? 'active' : ''}`}
          aria-label="Show business experience">Business Development</button>
      </div>
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            layout="vertical"
            data={filteredData}
            margin={{
              top: 20,
              right: 50,
              left: 50,  // Reduced from 200
              bottom: 20
            }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis
              type="number"
              domain={[0, 7]}
              ticks={[1, 3, 5, 7]}
              orientation="top"
              position="top"
              tickFormatter={(value) => {
                const labels = {
                  1: '1 year',
                  3: '3 years',
                  5: '5 years',
                  7: '7 years'
                };
                return labels[value] || value;
              }}
            />
            <YAxis
              type="category"
              dataKey="name"
              tick={{ 
                fontSize: 14,
                width: 120,  // Reduced from 180
                textAnchor: 'end',
                wordWrap: 'break-word'
              }}
              orientation="left"
              width={110}  // Reduced from 190
            />
            <Tooltip 
              cursor={{ fill: "var(--bg-light)" }}
              content={<CustomTooltip/>}
            />
            <Bar
              dataKey="years"
              fill="var(--secondary-light)"
              radius={[0, 4, 4, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpBarChart;