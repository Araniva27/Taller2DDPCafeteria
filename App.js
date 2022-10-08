//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import { useState } from 'react';
import RNPickerSelect from "react-native-picker-select";
import { Form } from './src/Form';
import { Card } from './src/Card';


export default function App() {
  
  const[total, setTotal] = useState(0);
  const[tamaño, setTamaño] = useState('');
  const[tipo, setTipo] = useState('');
  const[tipoPago, setTipoPago] = useState('');
  const[descuento, setDescuento] = useState('');  
  const[cantidad, setCantidad] = useState(0);


  return (
    <>
        <StatusBar barStyle = "light-content"></StatusBar>    
        <SafeAreaView style = {styles.Header}>
        <Text style = {styles.head}>Cafetería</Text>        
        <View style = {styles}>
          <Form 
              setTotal = {setTotal}
              setTamaño = {setTamaño}
              setTipo = {setTipo}
              setTipoPago = {setTipoPago}
              setDescuento = {setDescuento}
              setCantidad = {setCantidad}
            />
        </View>        
        </SafeAreaView> 
        <Card           
          tamaño = {tamaño}
          tipo = {tipo}
          tipoPago = {tipoPago}
          descuento = {descuento}
          cantidad = {cantidad}
        />
                
    </>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header:{
    backgroundColor: '#033649',
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center'
  },
  head: {
    color: 'white',
    fontSize: 40,    
    marginBottom: 5    
  },    
  texto: {
    fontSize: 20,
    color: 'white',
    marginBottom: 4
  }
});
