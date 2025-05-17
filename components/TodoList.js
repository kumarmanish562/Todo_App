import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal } from 'react-native';
import colors from '../Color';
import { AntDesign } from '@expo/vector-icons';
import TodoModal from './TodoModal';

export default class TodoList extends React.Component {
  state = { 
    showListVisible: false
  };

  toggleListModal = () => {
    this.setState({ showListVisible: !this.state.showListVisible });
  }

  render() {
    const { list } = this.props;
    const completedCount = list.todos.filter(todo => todo.completed).length;
    const remainingCount = list.todos.length - completedCount;
    return (
      <View>
        <Modal 
          animationType="slide" 
          visible={this.state.showListVisible} 
          onRequestClose={this.toggleListModal}
        >
          <TodoModal 
            list={list} 
            closeModal={this.toggleListModal} 
            updateList={this.props.updateList}
          />
        </Modal>

        <TouchableOpacity 
          style={[styles.listContainer, { backgroundColor: list.color }]} 
          onPress={this.toggleListModal}
        >
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.count}>{remainingCount}</Text>
              <Text style={styles.subtitle}>Remaining</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.count}>{completedCount}</Text>
              <Text style={styles.subtitle}>Completed</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 220,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  listTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.white,
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  statBox: {
    alignItems: 'center',
    flex: 1,
  },
  count: {
    fontSize: 36,
    fontWeight: '300',
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
    marginTop: 4,
  },
});
