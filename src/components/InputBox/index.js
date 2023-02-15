import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from '@expo/vector-icons'



const InputBox = () => {
    const onSend = () => {
        console.warn('Hi!!!!')
    }
    return (
       <View style={styles.container}>
           <AntDesign name='plus' size={24} color='royalbluew'/>
           <TextInput style={styles.input} placeholder='type your message...'/>
           <MaterialIcons onPress={onSend} style={styles.send} name='send' size={28} color='#fff'/>
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        padding: 10,
        alignItems: "center",
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 50,
        paddingHorizontal: 10,
        borderColor: 'lightgrey',
        borderWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 10,
    },
    send: {
        backgroundColor: "royalblue",
        padding: 7,
        borderRadius: 50,
        overflow: "hidden",
    },
})
export default InputBox
