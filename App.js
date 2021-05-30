import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Appoint from "./components/Appoint";
import Form from "./components/Form";

export default function App() {
  const [appoint, setAppoint] = useState([
    { id: "1", patient: "Hook", owner: "Ivan", symptom: "No come" },
    {
      id: "2",
      patient: "Quentin",
      owner: "Oscar",
      symptom: "Esta demaciado guapo",
    },
    {
      id: "3",
      patient: "Tomas",
      owner: "Aydin",
      symptom: "Es bien grocero",
    },
  ]);

  const deletePatient = (id) => {
    setAppoint((actualAppoints) => {
      return actualAppoints.filter((appoint) => appoint.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrador de Citas</Text>
      <Form />
      <Text style={styles.title}>
        {appoint.length > 0 ? "Administra tus citas" : "No hay citas"}
      </Text>
      <FlatList
        data={appoint}
        renderItem={({ item }) => (
          <Appoint item={item} deletePatient={deletePatient} />
        )}
        keyExtractor={(appoint) => appoint.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0077b6",
    minHeight: "100%",
  },
  title: {
    color: "#fff",
    marginTop: 30,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
