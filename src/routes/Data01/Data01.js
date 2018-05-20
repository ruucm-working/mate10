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
          <AreaChart width={335} height={200} data={this.state.data}>
            <Tooltip/>
            <Area type="monotone" dataKey="wins" stroke="#89a6ff"/>
          </AreaChart>
        </div>
      </div>
    )
  }
}