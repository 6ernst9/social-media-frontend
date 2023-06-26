import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView:{
        width: '100%',
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        paddingVertical: 51,
        gap: 10
    },
    header:{
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    numbersContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    numbers:{
        fontWeight: 'bold',
        fontSize: 24
    },
    profilePhoto:{
        width: 90,
        height: 90,
        borderRadius: 100
    },
    detailsContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 10,
        gap: 2.5
    },
    name:{
        fontWeight: 'bold',
        fontSize: 20
    },
    buttonsContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 5
    }
});

export default styles;