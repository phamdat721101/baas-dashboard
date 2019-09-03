/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Header from '../Header';
import Footer from '../Footer';
import Providers from '../Lists/Providers';
import { providersType } from '../types';

export const ProvidersView = ({ providers }) => (
  <View>
    <Header />
    <Providers providers={providers} />
    <Footer />
  </View>
);

ProvidersView.propTypes = {
  providers: providersType.isRequired
};

export default ProvidersView;
