import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloColecao from './estiloColecao';

function Colecao({ navigation }) {

    const voltar = () => {
        navigation.goBack();
    }

    return(
        <View style={estiloColecao.container}>
            <View style={estiloColecao.borda}>

                <Text style={estiloColecao.texto}>Resumo da Obra</Text>
                <Text style={estiloColecao.texto}> DSAKDSAKDJSAKLDJLASDAS SKDADKSADKSAMLDKASDL NSKDJALKDJSALKDASLKDAS CJDKASLJDLASKDMSALDKSAJLDKSADLASKDJIEPOMPEAKAMDSLKSAMDKLWPFONASNKDAS</Text>
                

      <TouchableOpacity style={estiloColecao.botaoContainer} onPress={voltar}>
                   <Text style={estiloColecao.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Colecao;