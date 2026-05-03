import { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Alert,
  Image, KeyboardAvoidingView, Platform, ScrollView,
} from 'react-native';
import { AuthInput } from '@/components/auth-input';
import { ForgotPassword } from '@/components/forgot-password';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!email || !password) return Alert.alert('Preencha todos os campos');
    Alert.alert('✅ Bem-vindo!', `Olá, ${email}`);
  }

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

        <View style={styles.card}>
          <Image
            source={require('../assets/images/LogoVirtualSchool.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <AuthInput
            label="E-mail"
            placeholder="seu@email.com"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <AuthInput
            label="Senha"
            placeholder="••••••••"
            isPassword
            value={password}
            onChangeText={setPassword}
          />

          <ForgotPassword />

          <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>


        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const PURPLE = '#9900ff';

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: '#fff' },
  scroll: { flexGrow: 1 },

  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 28,
    paddingTop: 60,
  },
  logo: {
    width: '100%',
    height: 280,
    alignSelf: 'center',
    marginBottom: 32,
  },
  button: {
    backgroundColor: PURPLE,
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.4,
  },


});
