import { Pressable, StyleSheet, Text } from 'react-native';

export type Todo = { id: string; title: string; done: boolean };

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

// Props = data/functions passed from parent (App) to child
export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <Pressable
      style={styles.item}
      onPress={() => onToggle(todo.id)}      // tap = toggle done
      onLongPress={() => onDelete(todo.id)}  // long press = delete
    >
      <Text style={[styles.title, todo.done && styles.done]}>
        {todo.done ? '✅ ' : '⬜ '}
        {todo.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: { backgroundColor: '#fff', padding: 14, borderRadius: 10, marginBottom: 8 },
  title: { fontSize: 16 },
  done: { textDecorationLine: 'line-through', color: '#999' },
});