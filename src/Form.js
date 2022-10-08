import React from "react";
import { StyleSheet,Text, View, TouchableHighlight} from "react-native";
import RNPickerSelect from "react-native-picker-select";

export const Form = ({setTotal, setTamaño, setTipo, setTipoPago, setDescuento, setCantidad}) => {
  const seleccionTipo = () => {
    let tipoCafe;
  };

  return (
    <>
			<View>			
      <Text style = {styles.tituloOpcion}>Seleccione el tamaño del café</Text>
        <RNPickerSelect
          style={picketSelectStyles}
          onValueChange={(value) => setTamaño(value)}
          placeholder={{
            label: "Seleccionar tamaño café",
            value: null,
          }}
          items={[
            { label: "Short 8 onz", value: "short" },
            { label: "Tall 12 onz", value: "tall" },
            { label: "Grande 16 onz", value: "grande" },            
          ]}
        />
      </View>
      <View>			
        <Text style = {styles.tituloOpcion}>Seleccione tipo de café</Text>
          <RNPickerSelect
            style={picketSelectStyles}
            onValueChange={(value) => setTipo(value)}
            placeholder={{
              label: "Seleccionar tipo de café",
              value: null,
            }}
            items={[
              { label: "Mocha", value: "Mocha" },
              { label: "Te chai", value: "Te chai" },
              { label: "Americano", value: "Americano" },
              { label: "Frapper", value: "Frapper" },
            ]}
          />
      </View>
      <View style = {styles.contenedorOpciones}>
        <View>
          <Text style = {styles.tituloOpcion}>Seleccione tipo de pago</Text>
            <RNPickerSelect
              style={picketSelectStyles}
              onValueChange={(value) => setTipoPago(value)}
              placeholder={{
                label: "Seleccionar tipo de café",
                value: null,
              }}
              items={[
                { label: "Efectivo", value:  'Efectivo'},
                { label: "Tarjeta de crédito", value: 'Tarjeta de crédito' },                
              ]}
            />
        </View>
        <View>
          <Text style = {styles.tituloOpcion}>Cantidad</Text>
              <RNPickerSelect
                style={picketSelectStyles}
                onValueChange={(value) => setCantidad(value)}
                placeholder={{
                  label: "Seleccionar cantidad",
                  value: null, 
                }}
                items={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3},
                  { label: "4", value: 4 },
                  { label: "5", value: 5 },
                  { label: "6", value: 6 },
                  { label: "7", value: 7 },
                  { label: "8", value: 8 },
                  { label: "9", value: 9 },
                  { label: "10", value: 10 },
                ]}
              />
        </View>        
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewForm: {
    position: "absolute",
    bottom: 0,
    width: "85%",
    paddingHorizontal: 50,
    borderRadius: 30,
    height: 180,
    justifyContent: "center",
  },
  viewInputs: {
    flexDirection: "row",
  },
  input: {
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    width: "60%",
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: "#000",
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: "40%",
    marginLeft: 5,
  },
  tituloOpcion: {
    color: 'white',
    marginBottom: 5,
    fontSize: 19
  },
  columna1 : {
    flex: 1,
    backgroundColor: 'red'
  },
  columna2 : {
    flex: 1,
    backgroundColor: 'blue'
  },
  contenedorOpciones : {    
    /*flexDirection: "row",
    flexWrap: "wrap"*/
  },
  btnProcesar : {
    padding: 10,
    backgroundColor: 'gray',
    marginVertical: 10,
    borderRadius: 5,    
    marginTop: 40
  }, 
  textoBoton: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const picketSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 19,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
    marginLeft: -5,
    marginRight: -5,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    backgroundColor: "#fff",
  },
});
