/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { customersType } from '../types';

class Customers extends Component {
  reactTableSetup = () => [
    {
      Header: 'ID',
      accessor: 'cuId',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['cuId'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true,
      width: 100
    },
    {
      Header: 'User Name',
      accessor: 'username',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['username'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    },
    {
      Header: 'Signature',
      accessor: 'signature',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['signature'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true,
      width: 125
    }
  ];

  render() {
    const { customers } = this.props;
    return (
      <div>
        <ReactTable
          data={customers}
          columns={this.reactTableSetup()}
          defaultPageSize={5}
          filterable
          minRows={0}
        />
      </div>
    );
  }
}

Customers.propTypes = {
  customers: customersType.isRequired
};

export default Customers;
