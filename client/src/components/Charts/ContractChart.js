/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import Chart from 'react-apexcharts';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import 'chart.js';

const colors = ['#0B091A', '#6283D0', '#0D3799', '#7C7C7C'];

const styles = theme => {
  const { type } = theme.palette;
  const dark = type === 'dark';
  return {
    container: {
      paddingLeft: '10%',
      '& .recharts-layer': {
        fill: dark ? 'rgb(42, 173, 230) !important' : '#5bc5c2 !important'
      },
      '& .recharts-scatter-line': {
        stroke: dark ? '#ffc145 !important' : '#5bc5c2 !important',
        strokeWidth: '2 !important'
      },
      '& .recharts-text': {
        fill: dark ? '#ffffff !important' : undefined
      },
      '& .recharts-cartesian-axis-line': {
        stroke: dark ? '#ffffff' : undefined
      }
    },
    chart: {
      top: -30
    }
  };
};
let data = [
  {
    name: 'Page A',
    pv: 20
  },
  {
    name: 'Page B',
    pv: 13
  },
  {
    name: 'Page C',
    pv: 9
  },
  {
    name: 'Page D',
    pv: 39
  },
  {
    name: 'Page E',
    pv: 48
  },
  {
    name: 'Page F',
    pv: 38
  },
  {
    name: 'Page G',
    pv: 43
  },
  {
    name: 'PQD',
    pv: 12
  }
];
export class ContractChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ['Working', 'Completed']
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40]
        }
      ]
    };
  }

  async componentDidMount() {
    await this.getData();
    setInterval(this.getData, 3000);
  }

  componentWillUnmount() {
    // clearInterval(this.interVal);
  }

  //   syncData = currentChannel => {
  //     const {
  //       getBlocksPerHour,
  //       getBlocksPerMin,
  //       getTransactionPerHour,
  //       getTransactionPerMin
  //     } = this.props;

  //     getBlocksPerMin(currentChannel);
  //     getBlocksPerHour(currentChannel);
  //     getTransactionPerMin(currentChannel);
  //     getTransactionPerHour(currentChannel);
  //   };
  getData = async () => {
    const API_URL = 'http://103.48.80.41:3000';
    const urlContract = `${API_URL}/api/contract`;
    const numOfContracts = [];
    await axios
      .get(urlContract)
      .then(response => response.data)
      .then(data => {
        for (let item of data) {
          numOfContracts.push(item);
        }
      })
      .catch(err => {
        console.log(err);
      });
    console.log(data);
    data.push({ name: 'pqd', pv: numOfContracts.length });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="500"
          height="260"
        />
        {/* <LineChart  width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }} >            
            <XAxis />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />            
        </LineChart> */}
      </div>
    );
  }
}

export default withStyles(styles)(ContractChart);
