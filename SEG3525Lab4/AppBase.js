import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import styled from 'styled-components';

import Colors from './Colors';


const AppBaseView = styled.View`
  background: ${Colors.baseColor};
  flex: 1;
  padding: 10px;
  padding-top:10px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${Platform.OS === 'ios' ? 'padding-top: 0px;' : ''}
`;


const AppBaseImage = styled.ImageBackground`
  background: ${Colors.baseColor};
  flex: 1;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${Platform.OS === 'ios' ? 'padding-top: 20px;' : ''}
`;


const AppBase = ({ image, children, ...props }) => (
  image ?
    <AppBaseImage
      source={require('./foodBg.png')}
      {...props}
    >
      {children}
    </AppBaseImage> :
    <AppBaseView {...props}>
      {children}
    </AppBaseView>
);
AppBase.defaultProps = {
  image: false,
};

AppBase.propTypes = {
  image: PropTypes.bool,
};


export default AppBase;
