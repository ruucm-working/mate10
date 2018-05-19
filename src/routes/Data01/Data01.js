import React, {Component} from 'react';
import './Data01.scss';
import '../../../Items/Redstone 🔻/3 Recharts/recharts.scss';
import { log } from 'ruucm-util';
import '../../../Items/Redstone 🔻/1 GetData/get-data.scss';

var obj = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d',
  },
};

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
      </div>
      
    )
  }
}

export default class GetData extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch('https://api.football-data.org/v1/competitions/394/leagueTable', obj)
      .then(response => response.json())
      .then(responseJson => {
        log('getData 😍', responseJson);
      });
  }
  render() {
    return (
      <div className="get-data-default-style">
        <p>
        <strong>fetch</strong>를 사용하여, React에서 데이터를 <strong>componentDidMount</strong>에서 가져옵니다
        </p>
        <p>(아래 Logs를 확인하세요)</p>
      </div>
    );
  }
}

// export default Data01Component;