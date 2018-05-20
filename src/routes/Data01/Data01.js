import React, {Component} from 'react';
import './Data01.scss';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import '../../../Items/Redstone 🔻/3 Recharts/recharts.scss';

// // import { log } from 'ruucm-util';
// // import '../../../Items/Redstone 🔻/1 GetData/get-data.scss';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class Data01Component extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="data-01">
        <h1>Data 01</h1>
        <LineChart width={300} height={180} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
      </div>
    )
  }
}

export default Data01Component;

//겟 데이터

// var obj = {
//   method: 'GET',
//   headers: {
//     'X-Auth-Token': 'e600784123014d489c796ab72ed9587d',
//   },
// };

// class Data01Component extends Component {
//   constructor() {
//     super()
//   }
//   componentDidMount() {
//   }
//   render() {
//     return (
//       <div className="data-01">
//         <h1>Data 01</h1>
//       </div>
      
//     )
//   }
// }

// export default class GetData extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }
//   componentDidMount() {
//     fetch('https://api.football-data.org/v1/competitions/394/leagueTable', obj)
//       .then(response => response.json())
//       .then(responseJson => {
//         log('getData 😍', responseJson);
//       });
//   }
//   render() {
//     return (
//       <div className="get-data-default-style">
//         <p>
//         <strong>fetch</strong>를 사용하여, React에서 데이터를 <strong>componentDidMount</strong>에서 가져옵니다
//         </p>
//         <p>(아래 Logs를 확인하세요)</p>
//       </div>
//     );
//   }
// // }