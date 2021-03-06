import React, {Component} from 'react';
import './Data01.scss';
import { LineChart, Line, AreaChart, Area, Brush, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import '../../../Items/Redstone 🔻/3 Recharts/recharts.scss';
import { log } from 'ruucm-util';
import { map } from 'lodash';

// // import { log } from 'ruucm-util';
// // import '../../../Items/Redstone 🔻/1 GetData/get-data.scss';

var obj = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d',
  },
};

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
      <div className="use-data-default-style">
        <h1>2015-2016<br/>
        바이에른뮌헨의 최근 리그 승패 횟수</h1>
        {log('this.state 💎', this.state)}
        <div className="recharts-wrapping">
          <AreaChart width={335} height={150} margin={{top: 10, right: -5, left:0, bottom: -100}} data={this.state.data}>
            <defs>
              <linearGradient id="colorwins" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#89a6ff" stopOpacity={0.8}/>
                <stop offset="80%" stopColor="#89a6ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip/>
            <Area type="monotone" dataKey="wins" stroke="#89a6ff" fillOpacity={1} fill="url(#colorwins)"/>
          </AreaChart>
        </div>
      </div>
    )
  }
}