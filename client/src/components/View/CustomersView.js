/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Customers from '../Lists/Customers';
import { customersType } from '../types';

console.log(Customers);
export const CustomersView = ({ customers }) => (
  <View>
    <Customers customers={customers} />
  </View>
);

CustomersView.propTypes = {
  customers: customersType.isRequired
};

export default CustomersView;
