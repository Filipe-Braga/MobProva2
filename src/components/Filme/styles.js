import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: "#c76e2e",
        padding: 10,
        margin: 3,
        border: ' 3px solid #2b1f16',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 10
    },
    viewImg: {
        width: '30%',
        height: 150,
    },
    
    img: {
        width: '100%',
        height: '100%',
        border: ' 3px solid #2b1f16',
        borderRadius: 10
    },

    viewData: {
        padding: 10,
        width: '50%',
        height: '50%',
    },

    nome: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    }, 

    descricao: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    }, 

    pa: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },

    btn: {
        padding: 10,
        backgroundColor: '#2E87C7',
        borderRadius: 10
    }
});

export default styles;