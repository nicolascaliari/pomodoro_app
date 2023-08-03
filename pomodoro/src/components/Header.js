import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


const options = ["Pomodoro", "Short Break", "Long Break"]

const Header = ({ currentTime, setCurrentTime, setTime }) => {

const handlePress = (index)=>{
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index)
    setTime(newTime * 60)
}

    return (
        <View style={styles.container}>
            {
                options.map((value, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePress(index)} style={[styles.itemStyle, currentTime !== index && {borderColor:'transparent'}]}>
                        <Text style={{fontWeight:'bold'}}>{value}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}


export default Header;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row'
    },
    itemStyle: {
        borderWidth: 3,
        padding: 5,
        width: '33%',
        borderColor:'white',
        marginVertical:20,
        borderRadius:10,
        alignItems:'center'
    }
});