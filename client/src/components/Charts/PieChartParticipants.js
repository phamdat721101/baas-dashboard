/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import axios from 'axios';

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

export class PieChartParticipants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { value: 2, name: 'Customers', fill: '#0B091A' },
        { value: 1, name: 'Providers', fill: '#6283D0' }
      ]
    };
  }
  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    // let numOfCustomers = 0;
    // let numOfProviders = 0;
    // console.log(numOfCustomers)
    // console.log(numOfProviders)
    // this.setState({
    //     data: [
    //       { value: 6 , name: 'Customers', fill: '#0B091A' },
    //       { value: 7 , name: 'Providers', fill: '#6283D0' },
    //     ]
    //   })
    // this.setState({
    //     data: [
    //       { value: axios.get(urlCustomer).then(response => response.data)
    //         .then((data) => {
    //             console.log(data.length)
    //           return 6
    //          }).catch((err) =>{
    //            console.log(err)
    //          }) , name: 'Customers', fill: '#0B091A' },
    //       { value: axios.get(urlProvider).then(response => response.data)
    //         .then((data) => {
    //           return 7
    //          }).catch((err) =>{
    //            console.log(err)
    //          }), name: 'Providers', fill: '#6283D0' },
    //     ]
    //   })
  }

  orgDataSetup = orgData => {
    // const temp = [];
    // let index = 0;
    // orgData.forEach(element => {
    //   temp.push({
    //     value: parseInt(element.count, 10),
    //     name: element.creator_msp_id,
    //     fill: colors[index]
    //   });
    //   index += 1;
    // });
    // this.setState({ data: temp });
  };

  render() {
    // const API_URL = 'http://localhost:3000';

    // const urlCustomer = `${API_URL}/api/Customer`;
    // const urlProvider = `${API_URL}/api/Provider`;
    // console.log(await axios.get(urlCustomer))
    // const numOfCustomers = axios.get(urlCustomer).then(response => response.data)
    // .then((data) => {
    //   console.log(data.length)
    //   return parseInt(data.length)
    //  }).catch((err) =>{
    //    console.log(err)
    //  })
    //  const numOfProviders = axios.get(urlProvider).then(response => response.data)
    //  .then((data) => {
    //    return parseInt(data.length)
    //   }).catch((err) =>{
    //     console.log(err)
    //   })
    const { data } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <PieChart width={485} height={290} className={classes.chart}>
          <Legend align="right" height={10} />
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
            fill="fill"
          />
          <Tooltip />
        </PieChart>
      </div>
    );
  }
}

// OrgPieChart.propTypes = {
//   transactionByOrg: transactionByOrgType.isRequired
// };

export default withStyles(styles)(PieChartParticipants);
