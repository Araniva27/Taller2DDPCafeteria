import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, ScrollView } from "react-native";
import { Total } from "./Total";

export const Card = ({ tamaño, tipo, tipoPago, descuento, cantidad }) => {
		/*var totalSinDesc;
    const calcular = () => {
			var tipoC = tipo;
			var precioC = 0;
			var precioT = 0;
			var descuento = 0;
		

			if(tipo == "Mocha"){				
				precioC = 2;				
			}

			if(tipo == "Te chai"){
				precioC = 2.50				
			}
			
			if(tipo == "Americano"){
				precioC = 1.50				
			}

			if(tipo == "Frapper"){
				precioC = 3.00				
			}

			if(tamaño == "short"){
				precioT = 1				
			}

			if(tamaño == "tall"){
				precioT = 1.50				
			}

			if(tamaño == "grande"){
				precioT = 2				
			}

			if(tipoPago == "Efectivo"){
				descuento = 0.15
			}

			if(tipoPago = "Tarjeta de crédito"){
				descuento = 0.05
			}

			totalSinDesc = (precioC + precioT)*cantidad		
    }*/
  return (
    <>
        <ScrollView>
            <View style={styles.carta}>
                <Text style={styles.titulo}>RESUMEN</Text>
                <View>
                    <Text style = {styles.informacion}>Cantidad solicitada: {cantidad}</Text>
                </View>
                <View>
                    <Text style = {styles.informacion}>Tamaño: {tamaño}</Text>
                </View>
                <View>
                    <Text style = {styles.informacion}>Tipo de café: {tipo}</Text>
                </View>
                <View>
                    <Text style = {styles.informacion}>Tipo de pago: {tipoPago}</Text>
                </View>    
                <View>
										{
											/*		
												<TouchableHighlight style = {styles.btnProcesar} onPress = {calcular}>
												<Text style ={styles.textoBoton}>Calcular</Text>
												</TouchableHighlight>
											*/
										}											
                </View>    
                <View>
                    <Total 
                      tamaño = {tamaño}
											tipo = {tipo}
											tipoPago = {tipoPago}
											descuento = {descuento}
											cantidad =  {cantidad}
                    />
                </View>        
            </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  carta: {
    backgroundColor: "grey",
    height: 450,
    margin: 10,
    borderRadius: 14,
  },
  titulo: {
    align: 'center',
    fontWeight: 'bold',
    margin: 20,
    marginLeft: 140,
    color: 'white',
    fontSize: 25    
  },
  informacion: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 10
  },
  btnProcesar : {
    padding: 10,
    backgroundColor: '#033649',
    marginVertical: 10,
    borderRadius: 5,    
    marginTop: 40,
    margin: 10
  }, 
  textoBoton: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15
  }
});
