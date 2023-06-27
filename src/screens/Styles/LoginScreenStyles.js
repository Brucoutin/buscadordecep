import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    divCepView:{
        width:'100%', 
         marginTop:"3%", 
         top:"15%",
         alignItems:'center',
       
    },
    txtCepView:{
        fontSize:50,
        fontFamily:'Pacifico-Regular',
        color:'#FF0000',
    },

    logo: {
        alignSelf: 'center',
        width: '60%',
        
    },
    ViewCard:{
        width: '100%',
        height: '60%',
        backgroundColor:'#f1f1f1',
        marginBottom:'5%',
        bottom:'5%',
        borderTopStartRadius:20, 
        borderTopEndRadius:20
    },
    btnButtons:{
        top:'10%',
        width: '100%',
        height: 200,
        flexDirection:'row', 
        justifyContent:'space-around' 
    },
    btnCep: {
        width: '30%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowColor: '#474747',
        elevation: 12,
        borderLeftWidth: 6,
        borderColor: '#05811a',
        justifyContent: 'center',

    },
    txtCep: {
        fontSize: 17,
        color: '#05811a',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    txtLocalização: {
        fontSize: 17,
        color: '#cc0000',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    btnSalvos: {
        width: '30%',
        height: '60%',
        backgroundColor: '#fff',
        borderRadius: 20,
        alignItems: 'center',
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        shadowColor: '#474747',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowColor: '#474747',
        elevation: 12,
        borderLeftWidth: 6,
        borderColor: '#d68b00',
        justifyContent: 'center',
    },
    txtSalvos: {
        fontSize: 17,
        color: '#d68b00',
        textAlign: 'center',
        fontWeight: 'bold'
    },

})

export default styles;