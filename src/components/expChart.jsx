import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label
} from 'recharts';

const ExpBarChart = ({ filteredData }) => {
  if (!filteredData || filteredData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={filteredData}
          margin={{
            top: 50,  // Increased top margin to accommodate label
            right: 30,
            left: 150,
            bottom: 20
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis
            type="number"
            domain={[0, 7]}
            ticks={[1, 2, 3, 5, 7]}
            position="top"
          >
            <Label
              value="Years"
              position="top"
              offset={-30}  // Move label up slightly
              style={{
                textAnchor: 'middle',
                fontSize: '14px',
                fill: '#666'
              }}
            />
          </XAxis>
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <Bar
            dataKey="years"
            fill="#4f46e5"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpBarChart;