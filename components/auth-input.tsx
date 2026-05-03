import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, TextInputProps } from 'react-native';

type AuthInputProps = TextInputProps & {
  label: string;
  isPassword?: boolean;
};

export function AuthInput({ label, isPassword = false, style, ...props }: AuthInputProps) {
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.row, focused && styles.rowFocused]}>
        <TextInput
          style={[styles.input, style]}
          secureTextEntry={isPassword && !visible}
          autoCapitalize="none"
          placeholderTextColor="#9CA3AF"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setVisible(v => !v)} style={styles.toggle}>
            <Text style={styles.toggleText}>{visible ? 'Ocultar' : 'Mostrar'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 18, width: '100%' },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    borderRadius: 12,
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
  },
  rowFocused: {
    borderColor: '#7b00ff',
    backgroundColor: '#fff',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 52,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
  },
  toggle: { paddingHorizontal: 14 },
  toggleText: { fontSize: 13, color: '#6366F1', fontWeight: '600' },
});
