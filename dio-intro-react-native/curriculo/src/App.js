/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/Icon';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './components/Card';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  function handleRedeSocial(rede) {
    switch (rede) {
      case 'linkedin':
        Alert.alert('Meu LinkedIn', 'https://www.linkedin.com');
        break;
      case 'github':
        Alert.alert('Meu Github', 'https://www.github.com');
        break;
      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com');
        break;

      default:
        break;
    }
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.page}>
        <View style={styles.container_c}>
          <Text>Imagem</Text>
          <Text style={styles.nome}>Nome</Text>

          <Text style={styles.funcao}>Título</Text>
          <View style={styles.redes}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>{' '}
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <Card title="Exp Prof" info="Teste1" />
        <Card title="Form Aca" info="Teste2" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#e7e7e7',
    flex: 1,
  },
  container_c: {
    fontSize: 24,
    fontWeight: '600',
  },
  foto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nome: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'space-between',
    width: '80%',
    backgroundColor: '#ff0000',
  },
  card: {},
  card_header: {},
  card_content: {},
});

export default App;
