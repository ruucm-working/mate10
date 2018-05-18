import React, {Component} from 'react';
import './Data02.scss'
// import InfoBanner from '../../components/InfoBanner'
import InfoBanner from '../../../Items/My blocks/InfoBanner'

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
        <h1>Data 02</h1>
      </div>
    )
  }
}

export default Data02Component;