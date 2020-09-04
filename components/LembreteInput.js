import React, { useState } from 'react';

import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native'

const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');

    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);
    }

    return (
        <View style={estilos.lembreteView}>
            <TextInput placeholder="Lembrar..."
                style={estilos.lembreteTextInput}
                onChangeText={capturarLembrete}
                value={lembrete}
            />
            <Button
                title="Adicionar"
                onPress={() => props.onAdicionarLembrete(lembrete)}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    lembreteView: {
        // flexDirection: 'row',
        marginBottom: 7
    },
    lembreteTextInput:{
        borderBottomColor: 'black',
        borderBottomWidth:1,
        marginBottom: 7,
        padding:7
    }

})

export default LembreteInput;