import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import LembreteItem from './components/LembreteItem'
import LembreteInput from './components/LembreteInput'

const estilos = StyleSheet.create({
  telaPrincipalView: { padding: 50 },
});

export default function App() {

  // se usarmos uma funçao ao invez de classe podemos usar state com as sequintes declarações
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  const addLembrete = (lembrete) => {
    setLembretes(() => {
      setContadorLembretes(contadorLembretes + 1)
      return [...lembretes, { value: lembrete, key: contadorLembretes.toString() }]
    })
    // setLembrete('')
  }

  return (
    <View style={estilos.telaPrincipalView}>

        {/* usuario insere os lembretes aqui */}
        <LembreteInput
        onAdicionarLembrete={addLembrete}
        />
        <FlatList
          data={lembretes}
          renderItem={(lembrete) => (
            // FlatList sempre mapeia o item da lista colocada em data para um objeto {item: lembrete}
            <LembreteItem lembrete={lembrete.item.value} />
          )}
        />

    </View>
  );
}


