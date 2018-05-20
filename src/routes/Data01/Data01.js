import React, {Component} from 'react';
import './Data01.scss';
import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import '../../../Items/Redstone 🔻/3 Recharts/recharts.scss';
import { log } from 'ruucm-util';
import { map } from 'lodash';
import '../../../Items/Redstone 🔻/2 UseData/use-data.scss';

// // import { log } from 'ruucm-util';
// // import '../../../Items/Redstone 🔻/1 GetData/get-data.scss';

var obj = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d',
  },
};

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
export default class Data01Component extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    log('getData 😍');
    fetch('https://api.football-data.org/v1/competitions/394/leagueTable', obj)
      .then(response => response.json())
      .then(responseJson => {
        log('setSate 🛍', responseJson);
        this.setState({
          data: [
            {
              name: 'Bayern',
              goalsAgainst: responseJson.standing[0].goalsAgainst,
              goals: responseJson.standing[0].goals,
              wins: responseJson.standing[0].wins,
              draws: responseJson.standing[0].draws,
              losses: responseJson.standing[0].losses,
            },
            {
              name: 'BVB',
              goalsAgainst: responseJson.standing[1].goalsAgainst,
              goals: responseJson.standing[1].goals,
              wins: responseJson.standing[1].wins,
              draws: responseJson.standing[1].draws,
              losses: responseJson.standing[1].losses,
            },
            {
              name: 'Leverkusen',
              goalsAgainst: responseJson.standing[2].goalsAgainst,
              goals: responseJson.standing[2].goals,
              wins: responseJson.standing[2].wins,
              draws: responseJson.standing[2].draws,
              losses: responseJson.standing[2].losses,
            },
            {
              name: 'Gladbach',
              goalsAgainst: responseJson.standing[3].goalsAgainst,
              goals: responseJson.standing[3].goals,
              wins: responseJson.standing[3].wins,
              draws: responseJson.standing[3].draws,
              losses: responseJson.standing[3].losses,
            },
          ],
        });
      });
  }
  render() {
    return (
      <div className="data-01">
        <h1>2015-2016<br/>
        바이에른뮌헨의 최근 리그 승패 횟수</h1>
        {log('this.state 💎', this.state)}
        <AreaChart width={335} height={200} data={this.state.data}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <Tooltip/>
          <Area type="monotone" dataKey="wins" stroke="#89a6ff"/>
        </AreaChart>
      </div>
    )
  }
}