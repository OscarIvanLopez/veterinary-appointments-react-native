import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
} from "react-native";

const Appoint = ({ item, deletePatient }) => {
  const deleteDialog = (id) => {
      console.log('eliminando....', id);
      deletePatient(id);
  };

  return (
    <View style={styles.appoint}>
      <View>
        <Text style={styles.labe}>Paciente: </Text>
        <Text style={styles.text}>{item.patient}</Text>
      </View>

      <View>
        <Text style={styles.labe}>Propietario: </Text>
        <Text style={styles.text}>{item.owner}</Text>
      </View>

      <View>
        <Text style={styles.labe}>Sintomas: </Text>
        <Text style={styles.text}>{item.symptom}</Text>
      </View>

      {/* <Button title="Eliminar" /> */}

      <View>
        <TouchableHighlight
          onPress={() => deleteDialog(item.id)}
          style={styles.btnDelete}
        >
          <Text style={styles.textDelete}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appoint: {
    backgroundColor: "#fff",
    borderBottomColor: "#e1e1e1",
    marginHorizontal: '2.5%',
    marginBottom: 10,
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  labe: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
  },
  btnDelete: {
    padding: 10,
    backgroundColor: "red",
    marginVertical: 10,
  },
  textDelete: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Appoint;
