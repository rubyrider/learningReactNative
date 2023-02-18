import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {createUser} from '../api/users';
import Snackbar from 'react-native-snackbar';

const SignUpForm = ({navigation}: {navigation: any}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!firstName) {
      setError('First name is required.');
      return;
    }

    if (!lastName) {
      setError('Last name is required.');
      return;
    }

    if (!email) {
      setError('Email is required.');
      return;
    }

    if (!password) {
      setError('Password is required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!acceptTerms) {
      setError('Please accept the terms and conditions.');
      return;
    }

    setError('');

    createUser({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: confirmPassword,
      accept_terms: acceptTerms,
    }).then(response => {
      if (response.errors) {
        Object.keys(response.errors).forEach(key => {
          Snackbar.show({
            text: `${key} ${response.errors[key]}`,
            duration: Snackbar.LENGTH_SHORT,
          });
        });
      } else {
        Snackbar.show({
          text: 'Account created successfully.',
          duration: Snackbar.LENGTH_LONG,
        });
        navigation.navigate('Login');
      }
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        defaultValue={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.switchContainer}>
        <Switch value={acceptTerms} onValueChange={setAcceptTerms} />
        <Text>&nbsp;Accept Terms and Conditions</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Registration</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Already Have Account? Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  switchLabel: {
    marginRight: 10,
  },
  input: {
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default SignUpForm;
