import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export const Total = ({tamaño, tipo, tipoPago, descuento, cantidad}) => {
			var totalSinDesc;
			var tipoC = tipo;
			var precioC = 0;
			var precioT = 0;
			var totalConDesc;
			var desc;
		

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

			if(tipoPago == "Tarjeta de crédito"){
				descuento = 0.05
			}

			totalSinDesc = (precioC + precioT)*cantidad		
			desc = totalSinDesc*descuento
			totalConDesc = totalSinDesc - desc

  return (
    <>
      <View style={styles.carta}>
        <View>
          <Text style={styles.informacion}>Descuento: {descuento*100}%</Text>
        </View>
        <View>
          <Text style={styles.informacion}>Precio sin descuento ($): {totalSinDesc}</Text>
        </View>
				<View>
          <Text style={styles.informacion}>Precio con descuento ($): {totalConDesc}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  carta: {
    backgroundColor: "#033649",
    height: 100,
    margin: 10,
    borderRadius: 14,
  },
  titulo: {
    align: "center",
    fontWeight: "bold",
    margin: 20,
    marginLeft: 140,
    color: "white",
    fontSize: 25,
  },
  informacion: {
    color: "white",
    marginLeft: 10,
    fontSize: 20,
    marginBottom: 10,
  },
  btnProcesar: {
    padding: 10,
    backgroundColor: "#033649",
    marginVertical: 10,
    borderRadius: 5,
    marginTop: 40,
    margin: 10,
  },
  textoBoton: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
});
