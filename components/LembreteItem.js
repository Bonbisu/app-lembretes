import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

const LembreteItem = (props) => {

    return (
        <View style={estilos.itemNaLista}>
            <Text>{props.lembrete}</Text>
        </View>
    );
};

const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#DDD',
        borderBottomColor: "#000",
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 7,
        borderRadius: 7,
    }
})

export default LembreteItem;