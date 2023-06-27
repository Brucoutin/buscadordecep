import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  body: {
    marginTop: "3%",

  },
  txtNames: {
    left: '6%',
    marginTop: '5%',
    color: 'black',
    fontWeight: 'bold',
  },
  Input: {
    backgroundColor: "#e7e7e7",
    width: "90%",
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  Icon: {
    alignSelf: 'flex-end',
    bottom: "50%",
    right: '7%'
  },
  nameContainer: {
    alignItems: 'center',

  },
  name: {
    fontSize: 30,
    fontFamily: "SecularOne-Regular",
    color: '#5fa8d2',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    alignSelf: 'center',

  },
  inputForm: {
    backgroundColor: "#e7e7e7",
    width: "90%",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
    color: 'black'
  },
  btnMapa: {
    width: '70%',
    height: '8%',
    backgroundColor: '#020035',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: '3%',
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

});

export default styles;