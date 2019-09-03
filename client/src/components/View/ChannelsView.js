/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Header from '../Header';
import Footer from '../Footer';
import Channels from '../Lists/Channels';
import { channelsType } from '../types';

export const ChannelsView = ({ channels }) => (
  <View>
    <Header />
    <Channels channels={channels} />
    <Footer />
  </View>
);

ChannelsView.propTypes = {
  channels: channelsType.isRequired
};

export default ChannelsView;
