/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BlocksView from './View/BlocksView';
import NetworkView from './View/NetworkView';
import TransactionsView from './View/TransactionsView';
import ChaincodeView from './View/ChaincodeView';
import DashboardView from './View/DashboardView';
import ChannelsView from './View/ChannelsView';
import CustomersView from './View/CustomersView';
import ProvidersView from './View/ProvidersView';
import Login from './Login/Login';
import { chartSelectors } from '../state/redux/charts';
import { tableOperations, tableSelectors } from '../state/redux/tables';
import axios from 'axios';

import {
  blockListType,
  chaincodeListType,
  channelsType,
  currentChannelType,
  dashStatsType,
  getTransactionType,
  peerListType,
  peerStatusType,
  transactionType,
  transactionByOrgType,
  transactionListType,
  customersType
} from './types';
import PageNotFound from './View/PageNotFound';

const {
  currentChannelSelector,
  blockActivitySelector,
  channelListSelector,
  dashStatsSelector,
  peerStatusSelector,
  transactionByOrgSelector
} = chartSelectors;

const {
  blockListSelector,
  chaincodeListSelector,
  channelsSelector,
  peerListSelector,
  transactionSelector,
  transactionListSelector,
  blockListSearchSelector,
  transactionListSearchSelector,
  customerListSelector
} = tableSelectors;

const styles = theme => {
  const { type } = theme.palette;
  const dark = type === 'dark';
  return {
    main: {
      color: dark ? '#ffffff' : undefined
    }
  };
};

export const Main = props => {
  const {
    customers,
    classes,
    blockList,
    blockActivity,
    chaincodeList,
    channels,
    currentChannel,
    dashStats,
    getTransaction,
    peerList,
    peerStatus,
    transaction,
    transactionByOrg,
    transactionList,
    blockListSearch,
    transactionListSearch,
    getBlockListSearch,
    getTransactionListSearch
  } = props;

  const blocksViewProps = {
    blockList,
    blockListSearch,
    getBlockListSearch,
    transactionByOrg,
    currentChannel,
    getTransaction,
    transaction
  };
  const chaincodeViewProps = {
    chaincodeList
  };

  const channelsViewProps = {
    channels
  };

  const dashboardViewProps = {
    blockList,
    dashStats,
    peerStatus,
    transactionByOrg,
    blockActivity
  };

  const networkViewProps = {
    peerList
  };

  const transactionsViewProps = {
    currentChannel,
    transaction,
    transactionList,
    getTransaction,
    transactionByOrg,
    transactionListSearch,
    getTransactionListSearch
  };

  const API_URL = 'http://103.48.80.41:3000';
  const urlCustomer = `${API_URL}/api/Customer`;
  const urlProvider = `${API_URL}/api/Provider`;
  const listOfCustomers = [];
  const listOfProviders = [];

  axios
    .get(urlCustomer)
    .then(response => response.data)
    .then(data => {
      for (let item of data) {
        const itemCustomer = {};
        itemCustomer.cuId = item.cuId;
        itemCustomer.username = item.username;
        itemCustomer.signature = item.signature;
        listOfCustomers.push(itemCustomer);
      }
    })
    .catch(err => {
      console.log(err);
    });

  axios
    .get(urlProvider)
    .then(response => response.data)
    .then(data => {
      for (let item of data) {
        const itemProvider = {};
        itemProvider.proId = item.proId;
        itemProvider.username = item.username;
        itemProvider.signature = item.signature;
        listOfProviders.push(itemProvider);
      }
    })
    .catch(err => {
      console.log(err);
    });

  const customersViewProps = {
    customers: listOfCustomers
  };

  const providersViewProps = {
    providers: listOfProviders
  };

  return (
    <Router>
      <div className={classes.main}>
        <Switch>
          <Route exact path="/" render={() => <Login />} />
          <Route
            exact
            path="/customers"
            render={() => <CustomersView {...customersViewProps} />}
          />
          <Route
            exact
            path="/providers"
            render={() => <ProvidersView {...providersViewProps} />}
          />
          <Route
            exact
            path="/dashboard"
            render={() => <DashboardView {...dashboardViewProps} />}
          />
          <Route
            exact
            path="/blocks"
            render={() => <BlocksView {...blocksViewProps} />}
          />
          <Route
            exact
            path="/chaincodes"
            render={() => <ChaincodeView {...chaincodeViewProps} />}
          />
          <Route
            exact
            path="/channels"
            render={() => <ChannelsView {...channelsViewProps} />}
          />
          <Route
            exact
            path="/network"
            render={() => <NetworkView {...networkViewProps} />}
          />
          <Route
            exact
            path="/transactions"
            render={() => <TransactionsView {...transactionsViewProps} />}
          />
          <Route exact render={() => <PageNotFound />} />
        </Switch>
      </div>
    </Router>
  );
};

Main.propTypes = {
  blockList: blockListType.isRequired,
  chaincodeList: chaincodeListType.isRequired,
  channels: channelsType.isRequired,
  currentChannel: currentChannelType.isRequired,
  dashStats: dashStatsType.isRequired,
  getTransaction: getTransactionType.isRequired,
  peerList: peerListType.isRequired,
  peerStatus: peerStatusType.isRequired,
  transaction: transactionType.isRequired,
  transactionByOrg: transactionByOrgType.isRequired,
  transactionList: transactionListType.isRequired,
  customers: customersType.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    state => ({
      blockList: blockListSelector(state),
      chaincodeList: chaincodeListSelector(state),
      channelList: channelListSelector(state),
      channels: channelsSelector(state),
      currentChannel: currentChannelSelector(state),
      dashStats: dashStatsSelector(state),
      peerList: peerListSelector(state),
      peerStatus: peerStatusSelector(state),
      transaction: transactionSelector(state),
      transactionByOrg: transactionByOrgSelector(state),
      transactionList: transactionListSelector(state),
      blockListSearch: blockListSearchSelector(state),
      transactionListSearch: transactionListSearchSelector(state),
      blockActivity: blockActivitySelector(state),
      customers: customerListSelector(state)
    }),
    {
      getTransaction: tableOperations.transaction,
      getBlockListSearch: tableOperations.blockListSearch,
      getTransactionListSearch: tableOperations.transactionListSearch
    }
  )
)(Main);
