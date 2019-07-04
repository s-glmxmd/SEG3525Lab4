import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { CreditCardInput } from 'react-native-credit-card-input';
import styled from 'styled-components';
import SafeArea from 'react-native-safe-area-view';

import PrimaryText from '../PrimaryText';
import Colors from '../Colors';
import AppBase from '../AppBase';

let totalAmount = 0;

const BR = styled.View`
  height: ${props => (props.size ? props.size : 20)}
`;

const Heading = styled.Text`
  font-size: 14px;
  color: #9DA8BA;
  text-align: center;
  margin-bottom: 10px;
`;

const Subheading = styled.Text`
  font-size: 16px;
  color: #213052;
  text-align: center;
`;

const Section = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px 20px;
  background: #FFF;
`;
const SectionItem = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;  
`;

class Payment extends Component{
    
    _onChange = (form) => {
        this.setState((s, p) => ({
          cardData: form,
          validData: form.valid,
        }));
      };

    static navigationOptions = {
        title: (<PrimaryText style={{ flex: 1, paddingTop: 10}}> Make Payment</PrimaryText>),
        headerStyle: {
          backgroundColor: '#1c1d20',
          borderBottomWidth: 1,
          borderStyle: 'solid',
          borderColor: '#1c1d20',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitle: 'Home',
        headerLeft: null,
      };

      constructor(props) {
          super(props);
          this.state = {
            cardData: {},
            validData: false,
            loadingPayment: false,
          };
      }

      render() {
          const {totalAmount} = this.props;
          return (
              <AppBase>
                  <SafeArea>

                    <KeyboardAvoidingView behavior={Platform.OS='ios'? 'padding' : ''}>
                        <ScrollView bounces={false}>
                            <BR size={10}/>
                            <Section>
                                <SectionItem>
                                    <Heading>
                                        {'Order number'.toUpperCase()} 
                                    </Heading>
                                    <Subheading>
                                        {'342543'}
                                    </Subheading>
                                </SectionItem>
                            </Section>
                            <Section>
                                <SectionItem>
                                    <Heading>
                                        SELLER
                                    </Heading>
                                    <Subheading>
                                        Restaurant App
                                    </Subheading>
                                </SectionItem>
                                <SectionItem>
                                    <Heading>
                                        PRICE
                                    </Heading>
                                    <Subheading>
                                        $ {totalAmount}
                                    </Subheading>
                                </SectionItem>
                                <Section style={{
                                    elevation: 2,
                                    borderBottomWidth: 2,
                                    borderBottomColor: '#eee',
                                }}>
                                    <SectionItem>
                                        <Heading>
                                            DATE
                                        </Heading>
                                        <Subheading>
                                            {new Date().toDateString()}
                                        </Subheading>
                                    </SectionItem>
                                </Section>
                            </Section>
                            <View>
                                <CreditCardInput
                                    requiresCVC
                                    cardScale={1}
                                    inputContainerStyle={{
                                        backgroundColor: '#FFF',
                                        paddingTop: 15,
                                        paddingBottom: 5,
                                        flexDirection: 'column',
                                        paddingLeft: 20,
                                        paddingRight: 20,
                                        borderWidth: 1,
                                        borderColor: '#eee',
                                        minWidth: 150,
                                        borderRadius: 6,
                                    }} 
                                    onChange={debounce(this._onChange, 500)}
                                    />
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                  </SafeArea>
              </AppBase>
          );
      }
}

Payment.defaultProps = {
    createdOrder: null,
};

Payment.propTypes = {
    //totalAmount: PropTypes.number.isRequired,
    //doCancelOrder: PropTypes.func.isRequired,
    //createdOrder: PropTypes.object,
};

export default Payment;