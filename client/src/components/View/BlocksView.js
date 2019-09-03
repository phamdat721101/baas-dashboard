/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Header from '../Header';
import Footer from '../Footer';
import Blocks from '../Lists/Blocks';
import {
  blockListType,
  currentChannelType,
  getTransactionType,
  transactionType
} from '../types';

export const BlocksView = ({
  blockList,
  currentChannel,
  getTransaction,
  transaction,
  blockListSearch,
  getBlockListSearch,
  transactionByOrg
}) => (
  <View>
    <Header />
    <Blocks
      blockList={blockList}
      currentChannel={currentChannel}
      transaction={transaction}
      getTransaction={getTransaction}
      transactionByOrg={transactionByOrg}
      blockListSearch={blockListSearch}
      getBlockListSearch={getBlockListSearch}
    />
    <Footer />
  </View>
);

BlocksView.propTypes = {
  blockList: blockListType.isRequired,
  currentChannel: currentChannelType.isRequired,
  getTransaction: getTransactionType.isRequired,
  transaction: transactionType
};

BlocksView.defaultProps = {
  transaction: null
};

export default BlocksView;
