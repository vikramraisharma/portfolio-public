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
import './tooltip.css';
import { CustomTooltip } from './expToolTip';

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

  // Calculate chart height based on number of items
  // Each bar is 40px high with 20px padding between bars
  const chartHeight = useMemo(() => {
    if (!filteredData) return 500;
    const barHeight = 40;
    const barPadding = 20;
    const totalPadding = 55; // Additional padding for chart margins
    return (filteredData.length * (barHeight + barPadding)) + totalPadding;
  }, [filteredData]);

  if (!filteredData || filteredData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="chart-container">
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            layout="vertical"
            data={filteredData}
            margin={{
              top: 50,
              right: 30,
              left: 200,
              bottom: 5
            }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            {/* <XAxis
              type="number"
              domain={[0, 7]}
              ticks={[1, 2, 3, 5, 7]}
              orientation="top"
              position="top"
            /> */}
            <XAxis
              type="number"
              domain={[0, 7]}
              ticks={[1, 2, 3, 5, 7]}
              orientation="top"
              position="top"
              tickFormatter={(value) => {
                const labels = {
                  1: '1 year',
                  2: '2 years',
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
                width: 180,
                textAnchor: 'end',
                wordWrap: 'break-word'
              }}
              orientation="left"
              width={190}
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

      <div className="chart-nav">
        <button
          onClick={() => setActiveDataset('design')}
          className={`nav-button ${activeDataset === 'design' ? 'active' : ''}`}
          aria-label="Show design experience"
        />
        <button
          onClick={() => setActiveDataset('code')}
          className={`nav-button ${activeDataset === 'code' ? 'active' : ''}`}
          aria-label="Show coding experience"
        />
        <button
          onClick={() => setActiveDataset('business')}
          className={`nav-button ${activeDataset === 'business' ? 'active' : ''}`}
          aria-label="Show business experience"
        />
      </div>
    </div>
  );
};

export default ExpBarChart;