import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(0);

  function handleRandom() {
    setNumber(Math.floor(Math.random() * 100));
  }
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{number}</Text>
      <TouchableOpacity onPress={handleRandom}>
        <Text>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {fontSize: 38, color: '#fff', fontWeight: 'bold'},
  botao: {
    backgroundColor: '#fff',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
