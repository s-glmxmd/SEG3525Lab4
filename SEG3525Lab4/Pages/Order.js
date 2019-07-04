import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View , Button, FlatList } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Payment from './Payment';
import Item from '../components/Item';
import BillReceipt from '../components/Receipt';
import ViewRow from '../components/ViewRow';

class Order extends Component{ 
  // static navigationOptions = {
  //   title: 'Order',
  // };

    constructor(props){
        super(props);
        // this.state={
        //     cartData: state.cart.cartData,
        //     createdOrder: state.orders.createdOrder,
        // };
        initMapStateToProps();
        initMapDispatchToProps();
    }

    componentDidMount() {
        this.props.fetchCartItems();
      }
    
    handleItemValueChange = (item, qty) => {
        if (qty === 0) {
          this.props.deleteCartItem(item._id);
        } else {
          this.props.updateCartItemQty(item._id, qty);
        }
      };

    _renderItem = ({ item }) => (
        <Item
      key={item._id}
      name={item.food.name}
      price={`$${item.price * item.qty}`}
      qty={item.qty}
      onChange={qty => this.handleItemValueChange(item, qty)}
    />
    );

    renderBillReceipt = (billInfo) => {
        const { cartData } = this.props;
    
        if (cartData.length > 0) {
          return (
            <BillReceipt
              style={{
                borderTopWidth: 4,
                borderTopColor: '#eee',
              }}
              billInfo={billInfo}
            />
          );
        }
        return null;
      };

    renderCartItems = (cartData) => {
        if (cartData.length > 0) {
          return (
            <FlatList
              style={{
                elevation: 2,
                borderWidth: 1,
                borderColor: '#fcfcfc',
              }}
              data={cartData}
              renderItem={this._renderItem}
              keyExtractor={item => item._id}
            />
          );
        }
    
        return (
          <ViewRow>
            <PrimaryText>
              Your Cart is empty.
            </PrimaryText>
          </ViewRow>
        );
      };

    renderFooter = (totalAmount) => {
        const { cartData } = this.props;
    
        if (cartData.length > 0) {
          return (
            <FooterContainer>
              <AmountContainer>
                <PrimaryText>$ {totalAmount}</PrimaryText>
              </AmountContainer>
              <PayButton
                onPress={() => this.handlePayment(totalAmount)}
              >
                <FooterText>
                  Proceed To Pay
                </FooterText>
              </PayButton>
            </FooterContainer>
          );
        }
        return null;
      };

    render() {
      // const {navigate} = this.props.navigation;
        const { cartData } = this.props;

        let totalBill = parseFloat(cartData.reduce(
        (total, item) => total + (item.price * item.qty),
        0,
        ));
        const taxPercent = 15;

        const tax = +(totalBill * (taxPercent / 100)).toFixed(2);

        const billInfo = [
        {
            name: 'Items Total',
            total: totalBill,
        },
        {
            name: `Taxes (${taxPercent}%)`,
            total: tax,
        },
        {
            name: 'Delivery Charges',
            total: 5,
        },
        ];

        totalBill += (tax + 5);

        const {navigate} = this.props.navigation;
        return(
            <View>
                <ScrollView>
                    <BR size={10} />
                    {this.renderCartItems(cartData)}
                    <BR />
                    {this.renderBillReceipt(billInfo)}
                    <BR />
                </ScrollView>
                {this.renderFooter(totalBill)}
                <Button 
                title="Proceed to checkout" 
                onPress={() => navigate('Payment') } 
                />
            </View>
        );
    }
}

Order.defaultProps = {
    createdOrder: null,
  };
  
  Order.propTypes = {
    cartData: PropTypes.array.isRequired,
    deleteCartItem: PropTypes.func.isRequired,
    fetchCartItems: PropTypes.func.isRequired,
    updateCartItemQty: PropTypes.func.isRequired,
    createOrder: PropTypes.func.isRequired,
    createdOrder: PropTypes.object,
  };



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function initMapStateToProps(state) {
    return {
      cartData: state.cart.cartData,
      createdOrder: state.orders.createdOrder,
    };
  }
  
  function initMapDispatchToProps(dipatch) {
    return bindActionCreators({
      deleteCartItem,
      fetchCartItems,
      updateCartItemQty,
      createOrder,
    }, dipatch);
  }

export const updateCartItems = (data, qty) => ({
    type: 'UPDATE_CART_ITEMS',
    payload: {
      ...data,
      qty,
    },
  });
  
  export const updateCartItemQty = (id, qty) => ({
    type: 'UPDATE_CART_ITEM_QTY',
    payload: {
      foodId: id,
      qty,
    },
  });
  
  export const deleteCartItem = id => ({
    type: 'DELETE_CART_ITEM',
    payload: id,
  });

  export const fetchCartItems = () => ({
    type: 'FETCH_CART_ITEMS',
  });

  export const saveNewCart = data => ({
    type: 'SAVE_NEW_CART',
    payload: data,
  });
  
  
  export const saveItemInfoToCart = data => ({
    type: 'SAVE_ITEM_INFO',
    payload: data,
  });
  
  export const cleanCart = () => ({
    type: 'CLEAN_CART_ITEMS',
  });

export default Order;
