import {useEffect} from 'react'
import { ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView } from "react-native";
import bg from "../../assets/images/BG.png";
import { useRoute, useNavigation } from '@react-navigation/native'
import Message from "../components/Message";
import messages from "../../assets/data/messages.json";
import InputBox from "../components/InputBox";

const ChatScreen = () => {

    const route = useRoute()
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({title: route.params.name})
    }, [route.params.name])

    return (
        <ImageBackground source={bg} style={styles.bg}>
                <FlatList
                    data={messages}
                    renderItem={({item}) => <Message message={item}/>}
                    style={styles.list}
                    inverted
                />
                <InputBox/>
            </ImageBackground>


    );
};


const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    list: {
        padding: 10,
    }
})


export default ChatScreen
