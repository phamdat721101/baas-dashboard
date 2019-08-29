/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Providers from '../Lists/Providers';
import { providersType } from '../types';

export const ProvidersView = ({ providers }) => (
  <View>
    <Providers providers={providers} />
  </View>
);

ProvidersView.propTypes = {
  providers: providersType.isRequired
};

export default ProvidersView;
