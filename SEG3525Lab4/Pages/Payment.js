import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, View, StyleSheet, Switch } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import styled from 'styled-components';
import SafeArea from 'react-native-safe-area-view';

import PrimaryText from '../PrimaryText';
import Colors from '../Colors';
import RoundButton from '../components/RoundButton';

/**
 * Données requise afin de valider la form de carte
 */
// {
//     "values": {
//      "number": "5526 8471 8286 3520",
//      "expiry": "11/30",
//      "cvc": "555",
//      "name": "Full",
//      "postalCode": "885698",
//      "type": "master-card"
//     },
//     "valid": true,
//     "status": {
//      "number": "valid",
//      "expiry": "valid",
//      "cvc": "valid",
//      "name": "valid",
//      "postalCode": "valid"
// }

//payment info stuff
const s = StyleSheet.create({
    container: {
      backgroundColor: "#F5F5F5",
      marginTop: 60,
    },
    label: {
      color: "black",
      fontSize: 12,
    },
    input: {
      fontSize: 16,
      color: "black",
    },
  });

const windowWidth = Dimensions.get('window').width - 18;

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

const USE_LITE_CREDIT_CARD_INPUT = false;


class Payment extends Component{
    
    _onChange = formData => {
        /* eslint no-console: 0 */
        console.log(JSON.stringify(formData, null, " "));
        this.setState((s, p) => ({
            cardData: formData,
            validData: formData.valid,
          }));
      };
    
      _onFocus = field => {
        /* eslint no-console: 0 */
        console.log(field);
      };

    doPayment = async () => {
        console.log(button)
    }

    static navigationOptions = {
        title: 'Payment',
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
        const {navigate} = this.props.navigation;
          const {totalAmount} = this.props;
          return (
              <View>
            <SafeArea>
            <KeyboardAvoidingView behavior="padding" enabled> 
                <ScrollView>
                    <View>
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
                    </View>
                  { USE_LITE_CREDIT_CARD_INPUT ?
                    (<LiteCreditCardInput
                        autoFocus
                        inputStyle={s.input}

                        validColor={"black"}
                        invalidColor={"red"}
                        placeholderColor={"darkgray"}

                        onFocus={this._onFocus}
                        onChange={this._onChange} />) :
                        (<CreditCardInput
                            autoFocus

                            requiresName
                            requiresCVC
                            requiresPostalCode

                            labelStyle={s.label}
                            inputStyle={s.input}
                            validColor={"black"}
                            invalidColor={"red"}
                            placeholderColor={"darkgray"}

                            onFocus={this._onFocus}
                            onChange={this._onChange} />)
                    } 
                    <View>
                    <RoundButton
                            loading={this.state.loadingPayment}
                            title="Continue"
                            buttonColor={Colors.slateGrey}
                            onPress={() => this.doPayment()}
                            disabled={!this.state.validData}
                            baseStyle={{
                                marginTop: 40,
                                margingBottom: Platform.OS === 'ios' ? 100 : 20,
                            }}
                            />

                            <RoundButton
                            title="Cancel"
                            baseStyle={{
                                marginTop : 40,
                                margingBottom : Platform.OS === 'ios' ? 100 : 20,
                            }}
                            />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

            </SafeArea>
              </View>
          );
      }
}

Payment.defaultProps = {
    createdOrder: null,
};

Payment.propTypes = {
    totalAmount: PropTypes.number.isRequired,
    //doCancelOrder: PropTypes.func.isRequired,
    //createdOrder: PropTypes.object,
};

export default Payment;