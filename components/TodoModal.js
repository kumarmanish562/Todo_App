import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Color";

export default class TodoModal extends React.Component {
  state = {
    newTodo: "",
  };

  toggleTodoCompleted = (index) => {
    let list = this.props.list;
    list.todos[index].completed = !list.todos[index].completed;
    this.props.updateList(list);
  };

  deleteTodo = (index) => {
    let list = this.props.list;
    list.todos.splice(index, 1);
    this.props.updateList(list);
  };

  addTodo = () => {
    let list = this.props.list;
    if (!this.state.newTodo.trim()) return;
    list.todos.push({ title: this.state.newTodo, completed: false });
    this.props.updateList(list);
    this.setState({ newTodo: "" });
  };

  renderTodo = (todo, index) => {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity
          onPress={() => this.toggleTodoCompleted(index)}
          style={[
            styles.circle,
            { borderColor: this.props.list.color },
            todo.completed && styles.completedCircle,
          ]}
        >
          {todo.completed && <AntDesign name="check" size={16} color={colors.white} />}
        </TouchableOpacity>

        <Text style={[styles.todo, todo.completed && styles.completedTodo]}>
          {todo.title}
        </Text>

        <TouchableOpacity onPress={() => this.deleteTodo(index)}>
          <AntDesign name="delete" size={20} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const list = this.props.list;
    const taskCount = list.todos.length;
    const completedCount = list.todos.filter((todo) => todo.completed).length;

    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={{ position: "absolute", top: 64, right: 32, zIndex: 10 }}
            onPress={this.props.closeModal}
          >
            <AntDesign name="close" size={24} color={colors.black} />
          </TouchableOpacity>

          <View
            style={[styles.section, styles.header, { borderBottomColor: list.color, borderBottomWidth: 3 }]}
          >
            <View>
              <Text style={styles.title}>{list.name}</Text>
              <Text style={styles.taskCount}>
                {completedCount} of {taskCount} tasks
              </Text>
            </View>
          </View>

          <View style={[styles.section, { flex: 3 }]}>
            <FlatList
              data={list.todos}
              renderItem={({ item, index }) => this.renderTodo(item, index)}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={[styles.section, styles.footer]}>
            <TextInput
              style={[styles.input, { borderColor: list.color }]}
              placeholder="Add a task..."
              onChangeText={(text) => this.setState({ newTodo: text })}
              value={this.state.newTodo}
            />
            <TouchableOpacity
              style={[styles.addTodo, { backgroundColor: list.color }]}
              onPress={this.addTodo}
            >
              <AntDesign name="plus" size={16} color={colors.white} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: {
    alignSelf: "stretch",
    paddingHorizontal: 32,
    marginTop: 16,
  },
  header: {
    justifyContent: "flex-end",
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
  },
  taskCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
fontWeight: "600",
},
todoContainer: {
flexDirection: "row",
alignItems: "center",
marginBottom: 16,
},
circle: {
width: 24,
height: 24,
borderRadius: 12,
borderWidth: 2,
marginRight: 16,
alignItems: "center",
justifyContent: "center",
},
completedCircle: {
backgroundColor: colors.green,
borderColor: colors.green,
},
todo: {
flex: 1,
fontSize: 18,
},
completedTodo: {
color: colors.gray,
textDecorationLine: "line-through",
},
footer: {
flexDirection: "row",
alignItems: "center",
paddingHorizontal: 32,
marginBottom: 32,
},
input: {
flex: 1,
height: 48,
borderWidth: StyleSheet.hairlineWidth,
borderRadius: 6,
marginRight: 8,
paddingHorizontal: 8,
fontSize: 18,
},
addTodo: {
height: 48,
width: 48,
borderRadius: 6,
alignItems: "center",
justifyContent: "center",
},
});



