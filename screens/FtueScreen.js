import React, { Component, PropTypes } from "react";
import {
  AsyncStorage,
  Modal,
  View,
  Text,
  TouchableHighlight
} from "react-native";
import { StyleSheet } from 'react-native';

export default class FtueScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modalVisible: false
      };
    }

    componentDidMount() {
      AsyncStorage.getItem(this.props.pagekey, (err, result) => {
        if (err) {
        } else {
          if (result == null) {
            console.log("null value recieved", result);
            this.setModalVisible(true);
          } else {
            console.log("result", result);
          }
        }
      });
      AsyncStorage.setItem(this.props.pagekey, JSON.stringify({"value":"true"}), (err,result) => {
              console.log("error",err,"result",result);
              });
    }
    setModalVisible(visible) {
      this.setState({ modalVisible: visible });
    }
      render() {
      return (
        <View>
          <Modal
            animationType={"slide"}
            transparent={true}
            style={styles.ftreContainer}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert("Modal has been closed.");
            }}
          >
            <View style={styles.ftreContainer}>
              <View style={styles.ftreTitleContainer}>
                <Text style={styles.ftreTitle}>Regulamin</Text>
              </View>
              <View style={styles.ftreDescriptionContainer}>
                <Text style={styles.ftreDescription} allowFontScaling={true}>
                 tutaj bedzie regulamin
                </Text>
              </View>
              <View style={styles.ftreExitContainer}>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <View style={styles.ftreExitButtonContainer}>
                    <Text style={styles.ftreExitButtonText}>Exit</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    ftreContainer:{
        backgroundColor:'white',
        flex:1,
        marginTop:20,
        marginBottom:30,
        marginLeft:20,
        marginRight:20,
        borderRadius:20,
        borderWidth:4,
        borderColor:'black'
      },
      ftreTitle:{
        color:'black',
            fontWeight:'bold',
        fontSize:20,
        textAlign:'center',
        margin:10,	
      },
      ftreDescription:{
        color:'black',
            fontSize:15,
        marginRight:20,
        marginLeft:20
      },
      ftreCloseIcon:{
        alignSelf:'flex-end',
        flex:0.5,
        marginRight:10
      },
      ftreTitleContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      ftreDescriptionContainer:{
        flex:6.5
      },
      ftreExitContainer:{
        flex:2,
        justifyContent:'flex-start',
        alignItems:'center',
      },
      ftreExitButtonContainer:{
        width:200,
        height:40,
        backgroundColor:'black',
        borderRadius:10,
        justifyContent:'center',
      },
      ftreExitButtonText:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
      }
    });