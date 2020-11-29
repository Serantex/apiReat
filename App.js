import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';


const axios = require('axios');

export default class App extends Component{

  constructor(props){
    super(props);
    this.state ={consulteApi:false, item: []};
  }

  hundlerBt(){
    this.setState(()=>{return {consulteApi:false}});
    axios.get("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
          .then(response=>{
            this.setState(() => {return {consulteApi: true, item:  response.data}});
          })
          .catch((error)=>{
            console.log(error);
          });
  }

  render(){
    if(this.state.consulteApi){
      return (
        <>
        <View style={styles.container}>
    
          <Button
            onPress={this.hundlerBt.bind(this)}
            title="Consultar Precio dolar"
            color="#006400"
            accessibilityLabel="Learn more about this purple button"
          />

      <>
          <View style={styles.containerDolar}>
            <Text>Precio dolar Blue Compra</Text>
            <Text>{this.state.item[1].casa.compra}</Text>
            <Text>Precio dolar Blue Venta</Text>
            <Text>{this.state.item[1].casa.venta}</Text>
            <Text>Precio dolar Oficial Compra</Text>
            <Text>{this.state.item[0].casa.compra}</Text>
            <Text>Precio dolar Oficial Venta</Text>
            <Text>{this.state.item[0].casa.venta}</Text>  
          </View>
          </>

        </View>
    </>
  );

}else{

 return (
  <>
  <View style={styles.container}>

    <Button
      onPress={this.hundlerBt.bind(this)}
      title="Consultar Precio dolar"
      color="#006400"
      accessibilityLabel="Learn more about this purple button"
    />
  
  </View>

   
  </>
);

}

    }

     /* const renderItem = ({ item }) => {
        return (
          <>
          <View style={styles.container}>
            <Text>Precio dolar Blue Compra</Text>
            <Text>{this.state.item[1].casa.compra}</Text>
            <Text>Precio dolar Blue Venta</Text>
            <Text>{this.state.item[1].casa.venta}</Text>
            <Text>Precio dolar Oficial Compra</Text>
            <Text>{this.state.item[0].casa.compra}</Text>
            <Text>Precio dolar Oficial Venta</Text>
            <Text>{this.state.item[0].casa.venta}</Text>  
          </View>
          </>
        );
      };*/
}

const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop:80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


