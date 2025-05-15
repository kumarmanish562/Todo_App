import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import colors from "../Color";
const TodoList = ({ list }) => {
  const completedCount = list.todos.filter(todo => todo.complete).length;
  const remainingCount = list.todos.length - completedCount;
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
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
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 220,
    elevation: 4, // Android shadow
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
