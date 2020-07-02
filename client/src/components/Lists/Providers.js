/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React, { Component } from 'react';
import matchSorter from 'match-sorter';
import ReactTable from '../Styled/Table';
import { providersType } from '../types';

class Providers extends Component {
  reactTableSetup = () => [
    {
      Header: 'ID',
      accessor: 'proId',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['proId'] },
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
      Header: 'Services',
      accessor: 'services',
      filterMethod: (filter, rows) =>
        matchSorter(
          rows,
          filter.value,
          { keys: ['services'] },
          { threshold: matchSorter.rankings.SIMPLEMATCH }
        ),
      filterAll: true
    }
  ];

  render() {
    const { providers } = this.props;
    return (
      <div>
        <ReactTable
          data={providers}
          columns={this.reactTableSetup()}
          defaultPageSize={5}
          filterable
          minRows={0}
        />
      </div>
    );
  }
}

Providers.propTypes = {
  providers: providersType.isRequired
};

export default Providers;
