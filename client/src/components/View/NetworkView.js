/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Peers from '../Lists/Peers';
import Header from '../Header';
import Footer from '../Footer';
import { peerListType } from '../types';

export const NetworkView = ({ peerList }) => (
  <View>
    <Header />
    <Peers peerList={peerList} />
    <Footer />
  </View>
);

NetworkView.propTypes = {
  peerList: peerListType.isRequired
};

export default NetworkView;
