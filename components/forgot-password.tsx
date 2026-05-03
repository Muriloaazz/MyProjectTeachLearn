import { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { AuthInput } from './auth-input';

export function ForgotPassword() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (!email) return Alert.alert('Informe seu e-mail');
    Alert.alert('✅ E-mail enviado', `Verifique sua caixa de entrada em ${email}`);
    setEmail('');
    setVisible(false);
  }

  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.linkWrapper}>
        <Text style={styles.link}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent animationType="slide">
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.overlay}
        >
          <View style={styles.card}>
            <View style={styles.handle} />
            <Text style={styles.emoji}></Text>
            <Text style={styles.title}>Recuperar senha</Text>
            <Text style={styles.subtitle}>
              Digite seu e-mail e enviaremos um link para redefinir sua senha.
            </Text>

            <AuthInput
              label="E-mail"
              placeholder="seu@email.com"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.85}>
              <Text style={styles.buttonText}>Enviar link</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisible(false)} style={styles.cancelWrapper}>
              <Text style={styles.cancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  linkWrapper: { alignSelf: 'flex-end', marginBottom: 4 },
  link: { color: '#6366F1', fontSize: 14, fontWeight: '600' },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 28,
    paddingBottom: 40,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 24,
  },
  emoji: { fontSize: 36, textAlign: 'center', marginBottom: 12 },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#6366F1',
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '700', letterSpacing: 0.3 },
  cancelWrapper: { alignItems: 'center', paddingVertical: 8 },
  cancel: { color: '#9CA3AF', fontSize: 15, fontWeight: '500' },
});
