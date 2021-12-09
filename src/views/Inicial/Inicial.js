import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({ navigation }) { 

    const abrirColecao = () => {
        navigation.navigate('Colecao')
    }

    const abrirItem = () => {
        navigation.navigate('Item')
    }
    
    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Inicio</Text>

<TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirColecao}>
                    <Text style={estiloInicial.botaoTexto}>Resumo da Obra</Text> 
                </TouchableOpacity>

<TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirItem}>
                    <Text style={estiloInicial.botaoTexto}>Curiosidades</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicial;