import React, {Component} from 'react';
import './Data02.scss'
// import InfoBanner from '../../components/InfoBanner'
import InfoBanner from '../../../Items/My blocks/InfoBanner'
// import React, { Component } from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts'
import '../../../Items/Redstone 🔻/3 Recharts/recharts.scss';
// 253, 154, 712

const data01 = [{name: 'Group A', value: 3, fill:'#89a6ff'}, {name: 'Group B', value: 2, fill:'#ff9786'},
                  {name: 'Group C', value: 5, fill:'#e4e4e4'}];
const data02 = [{name: 'Group A', value: 2, fill:'#89a6ff'}, {name: 'Group B', value: 5, fill:'#ff9786'},
                  {name: 'Group C', value: 4, fill:'#e4e4e4'}];
const data03 = [{name: 'Group A', value: 1, fill:'#89a6ff'}, {name: 'Group B', value: 5, fill:'#ff9786'},
                  {name: 'Group C', value: 4, fill:'#e4e4e4'}];
const data04 = [{name: 'Group A', value: 7, fill:'#89a6ff'}, {name: 'Group B', value: 1, fill:'#ff9786'},
                  {name: 'Group C', value: 2, fill:'#e4e4e4'}];

const COLORS = ['#89a6ff', '#ff9786', '#e4e4e4'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


class Data02Component extends Component {
  constructor() {
    super()
    this.state = {
      data02: [],
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="data-02">
        <InfoBanner>
          <InfoBanner.Title />
          <InfoBanner.Cards />
        </InfoBanner>
        <div className="import-text">Import data on pie chart</div>
        <PieChart width={350} height={80} onMouseEnter={this.onPieEnter} fill={COLORS}>
        <Pie
          data={data01} 
          cx="25"
          cy="center"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={30}
          innerRadius={20}

        />

        <Pie
          data={data02} 
          cx="120"
          cy="center"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={30}
          innerRadius={20}

        />

        
        <Pie
          data={data03} 
          cx="215"
          cy="center"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={30}
          innerRadius={20}

        />

        
        <Pie
          data={data04} 
          cx="308"
          cy="center"
          labelLine={false}
          // label={renderCustomizedLabel}
          outerRadius={30}
          innerRadius={20}

        />
      </PieChart>
      </div>
    )
  }
}




export default Data02Component;

