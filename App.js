import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
} from 'react-native';
import colors from './Color';
import { AntDesign } from '@expo/vector-icons';
import tempData from './tempData';
import TodoList from './componets/TodoList';
import AddListModal from './componets/AddListModal';

const { width } = Dimensions.get('window');

export default class App extends React.Component {
state = {
  addTodoVisible : true
}
 toggleAddTodoModal(){
  this.setState({addTodoVisible: !this.state.addTodoVisible})
 }

  render() {
    return (
      <View style={styles.container}>
        <Modal animatedType="slide" 
        visible={this.state.addTodoVisible} 
        onRequestClose={()=> this.toggleAddTodoModal()}>
         
         <AddListModal closeModal={() =>  this.toggleAddTodoModal()}/>
        </Modal>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.divider} />
          <Text style={styles.title}>
            Todo <Text style={styles.titleHighlight}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        {/* Add List Button */}
        <View style={styles.addSection}>
          <TouchableOpacity style={styles.fab} onPress={()=> this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={28} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.addLabel}>Add New List</Text>
        </View>

        {/* List Display */}
        <View style={styles.listSection}>
          <FlatList
            data={tempData}
            keyExtractor={(item) => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          />
        </View>

        {/* Bottom Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            💡 Stay productive. Keep ticking those tasks!
          </Text>
          <View style={styles.footerCurve} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    backgroundColor: colors.lightblue,
    height: 2,
    width: '80%',
    marginVertical: 10,
    borderRadius: 2,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.black,
  },
  titleHighlight: {
    fontWeight: '300',
    color: colors.blue,
  },
  addSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  fab: {
    backgroundColor: colors.blue,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  addLabel: {
    marginTop: 12,
    fontSize: 15,
    fontWeight: '600',
    color: colors.black,
    textAlign: 'center',
  },
  listSection: {
    height: 275,
    paddingLeft: 24,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: colors.blue,
    paddingVertical: 20,
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerText: {
    color: colors.white,
    fontSize: 14,
    fontStyle: 'italic',
  },
  footerCurve: {
    height: 6,
    width: 50,
    backgroundColor: colors.white,
    borderRadius: 3,
    marginTop: 8,
  },
});
