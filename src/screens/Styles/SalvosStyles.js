import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  containerModal:{
    flex:1,
  },
  ViewLottie:{
    marginTop:'30%',
    top:'5%', 
    alignItems:'center',
  },
  TextLottie:{
    color: "#d68b00", 
    fontSize:30, 
    fontFamily:'SecularOne-Regular'
  },
  centeredModalLottie:{
    flex:1,
    backgroundColor:"#fff"
  },
  propertyListContainer: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderLeftWidth: 6,
    borderColor: '#009e00',
  },
  image: {
    height: 150,
    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBody: {
    marginBottom: 10,
    padding: 10,
  },
  textCep: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black'
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  textCard: {
    fontSize: 14,
    marginBottom: 5,
    color: 'black'
  },
  Footer: {
    padding: 10,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
    alignSelf: 'flex-end',
  },
  centeredModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.84)',
  },

});

export default styles;