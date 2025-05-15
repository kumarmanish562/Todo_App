import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { AntDesign} from '@expo/vector-icons'
import colors from "../Color"

export default class AddListModal extends React.Component {
  render() {
    return (
  <KeyboardAvoidingView style={styles.container} behavior="padding">
    <TouchableOpacity style={{position:"absolute", top:64, right:32}} onPress={this.props.closeModal}>
        <AntDesign name="close" size={24} olor={colors.black} />
    </TouchableOpacity>

      <View style={{alignSelf: "stretch", marginHorizontal:32}}>
        <Text style={styles.title}>Create Todo List </Text>
        <TextInput style={styles.input} placeholder="List Name?" />
      </View>
<TouchableOpacity style={[styles.create]}>
  <Text style={{color: colors.white, fontWeight: "600"}}>Create!</Text>
</TouchableOpacity>



  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title : {
    fontSize: 28,
    fontWight: 280,
    color: colors.black,
    alignSelf: "center",
    marginBottom: 16,
  },
  input : {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 6,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 16
  },
  create: {
    marginTop:24,
    height: 50,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center"
  }
});
