import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Form = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Dueño:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Telefono contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => console.log(text)}
            multiline
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  form: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: "2.5%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderStyle: "solid",
  },
});
export default Form;
