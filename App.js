import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import LembreteItem from './components/LembreteItem'
import LembreteInput from './components/LembreteInput'

const estilos = StyleSheet.create({
  telaPrincipalView: { padding: 50 },
  lembreteTextInput: { borderBottomColor: 'black', borderBottomWidth: 1, textAlign: 'center', marginBottom: 4, padding: 12 },
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#DDD',
    borderRadius: 7,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 7
  },
  
  entradaView: {
    marginBottom: 7
  }
});

export default function App() {

  // se usarmos uma funçao ao invez de classe podemos usar state com as sequintes declarações
  const [lembrete, setLembrete] = useState('');
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  const getLembrete = (lembrete) => {
    setLembrete(lembrete);
  }

  const addLembrete = () => {
    setLembretes(() => {
      setContadorLembretes(contadorLembretes + 1)
      return [...lembretes, { value: lembrete, key: contadorLembretes.toString() }]
    })
    // setLembrete('')
  }

  return (
    <View style={estilos.telaPrincipalView}>
      <View style={estilos.entradaView}>
        {/* usuario insere os lembretes aqui */}
        {/* <TextInput
          placeholder="Lembrar..."
          style={estilos.lembreteTextInput}
          value={lembrete}
          onChangeText={getLembrete}
        />
        <Button
          title="Adicionar"
          onPress={addLembrete}
        /> */}
      </View>
      <View>
        <FlatList
          data={lembretes}
          renderItem={(lembrete) => (
            // FlatList sempre mapeia o item da lista colocada em data para um objeto {item: lembrete}
            <LembreteItem lembrete={lembrete.item.value} />
          )}
        />

           {/* renderiza automticamente toda a lista
          ja o flatlist renderiza apenas o que está mostrado na tela, é mais sofisticado 
         <ScrollView> 

          {lembretes.map((l, i) => (
            <View key={i} style={estilos.itemNaListaView}>
              <Text >{l}</Text>
            </View>
          ))}
        </ScrollView>  */}
      

      </View>

    </View>
  );
}


