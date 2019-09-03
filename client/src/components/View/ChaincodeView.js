/**
 *    SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import View from '../Styled/View';
import Header from '../Header';
import Footer from '../Footer';
import Chaincodes from '../Lists/Chaincodes';
import { chaincodeListType } from '../types';

export const ChaincodeView = ({ chaincodeList }) => (
  <View>
    <Header />
    <Chaincodes chaincodeList={chaincodeList} />
    <Footer />
  </View>
);

ChaincodeView.propTypes = {
  chaincodeList: chaincodeListType.isRequired
};

export default ChaincodeView;
