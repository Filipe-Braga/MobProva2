import { Button, Image, Text, View } from "react-native";

import styles from "./styles";

export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.filme.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>{props.filme.nome}</Text>
                <Text style={styles.descricao}>{props.filme.descricao}</Text>
                <Text style={styles.pa}>Poder de Ataque: {props.filme.pa}</Text>
                <Text style={styles.pa}>Peso: {props.filme.peso}</Text>
                <Button style={styles.btn} title="Trocar"/>
            </View>
        </View>
    );
}