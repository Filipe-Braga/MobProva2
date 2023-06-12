
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Filme from '../../components/Filme';


export default function ItensPages(){

    const filmes = [
        {
          nome: 'Espada Demoniaca de Aazael',
          descricao: 'Esse item lendário é a personificação da corrupção da mais pura alma',
          pa: '20',
          peso: '5kg',
          imgUrl: "https://i.pinimg.com/550x/3d/f4/63/3df463b9e3e7fb571eb9a9ec05fd91d5.jpg"
        },
        {
          nome: 'Escudo do Corno de Makhunik',
          descricao: 'Forjado pelos anões, esse artefato é bruto e violento, assim como seus criadores',
          pa: '5',
          peso: '30kg',
          imgUrl: "https://e7.pngegg.com/pngimages/866/292/png-clipart-dwarf-shield-role-playing-game-dwarf-game-shield.png"
        },
        {
          nome: 'Arco Alado de AirHome',
          descricao: 'Incubido de uma magia especial, esse item nunca erra seu alvo',
          pa: '10',
          peso: '1kg',
          imgUrl: "https://pm1.narvii.com/6583/342a2c7a40d6731f9256edd6980eff89653060e9_hq.jpg"
        },
      ];

    return(
        <View style={styles.container}>
            {filmes.map(f => <Filme filme={f}/>)}
            <StatusBar style='auto' />
            
            <link to ={screen: 'Login'}>Login </link>
            <link to ={screen: 'ItensPage'>Cadastro </link>
            <link to ={screen: 'Cadastro'>Recuperar senha </link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7084a7',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });