/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Header from '../Header';
import Footer from '../Footer';
import Customers from '../Lists/Customers';
import { customersType } from '../types';

export const CustomersView = ({ customers }) => (
  <View>
    <Header />
    <Customers customers={customers} />
    <Footer />
  </View>
);

CustomersView.propTypes = {
  customers: customersType.isRequired
};

export default CustomersView;
