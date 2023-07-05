import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    marginTop: "5%",
  },
  Icon: {
    alignSelf: 'flex-end',
    bottom: "50%",
    right: '7%',
  },
  txtNames: {
    left: '6%',
    marginTop: '4%',
    bottom:'2%',
    color: '#05811a',
    fontWeight: 'bold',
  },
  Input: {
    backgroundColor: "#e7e7e7",
    width: "90%",
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputForm: {
    backgroundColor: "#e7e7e7",
    width: "90%",
    height:'8%',
    borderRadius: 10,
    paddingHorizontal: 10,
    alignSelf:'center',
    justifyContent:'center',
    alignItems:'center',
    
  },
  btnMapa: {
    width: '70%',
    height: '8%',
    backgroundColor: '#05811a',
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: '2%',
    bottom:'10%',
    justifyContent: 'center',
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
    flexDirection: 'row',

  },
  txtBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredModal: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.84)',
  },
  cardBody: {
    marginBottom: '2%',
    padding: 10,
  },
  card: {
    backgroundColor: 'gray',
    borderRadius: 5,
    marginTop: '5%',
    width:'90%',
    alignSelf:'center',
    height:'65%',
   
  },
});

export default styles;