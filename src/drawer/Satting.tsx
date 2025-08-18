import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import HomeImage from '../utils/HomeImage';

const Satting = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.emailContainer}>
            <View style={styles.leftContainer}>
              <Image
                source={require('../assets/Mlogo.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 100 / 2,
                  borderWidth: 1,
                  marginTop: 8,
                  marginLeft: 12,
                }}
              />
              <View style={styles.emailName}>
                <Text style={styles.name}>Mrinmoy Bharasa</Text>
                <Text style={styles.email}>mrinmoybharasa@gmail.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        </View>
        <View>
          <TouchableOpacity style={styles.SyncContainer}>
            <View style={styles.syncleftContainer}>
              <Image
                source={require('../assets/sy.png')}
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: 100 / 2,
                  borderWidth: 1,
                  marginTop: 11,
                  marginLeft: 26,
                }}
              />

              <View style={styles.Syncname}>
                <Text style={styles.syname}>Sync</Text>
                <Text>on</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.googleContainer}>
          <View style={styles.googleLeftContainer}>
            <Image
              source={require('../assets/googleLogo.jpg')}
              style={{
                width: 27,
                height: 27,
                borderRadius: 100 / 2,
                borderWidth: 1,
                marginTop: 11,
                marginLeft: 26,
              }}
            />
            <View style={styles.google}>
              <Text style={styles.googlename}>Google services</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            paddingLeft: 22,
            fontSize: 16,
            color: 'blue',
            height: 40,
          }}>
          Basics
        </Text>
        <TouchableOpacity style={styles.EngineContainer}>
          <Text style={{paddingLeft: 16, fontSize: 15, paddingTop: 10}}>
            Search engine
          </Text>
          <Text style={{paddingLeft: 16, fontSize: 15}}>Google</Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Google Password Manager
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Payment methods
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Addresses and more
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Privacy and Security
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Safety check
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Notifications
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Theme
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            paddingTop: 16,
            paddingLeft: 20,
            fontSize: 16,
            color: 'blue',
            height: 60,
          }}>
          Advanced
        </Text>
        <TouchableOpacity style={styles.EngineContainer}>
          <Text style={{paddingLeft: 16, fontSize: 15, paddingTop: 15}}>
            Tabs
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.EngineContainer}>
          <Text style={{paddingLeft: 16, fontSize: 15, paddingTop: 10}}>
            HomePage
          </Text>
          <Text style={{paddingLeft: 16, fontSize: 15}}>On</Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Toolbar shortcut
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Accessiblity
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Site settings
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Languages
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            Downloads
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
        <TouchableOpacity style={styles.BasicsContainer}>
          <Text
            style={{
              paddingLeft: 16,
              fontSize: 16.7,
              paddingTop: 10,
              color: 'black',
            }}>
            About Chrome
          </Text>
        </TouchableOpacity>
        <View style={{height: 1, backgroundColor: '#D8DCDA'}}></View>
      </View>
    </ScrollView>
  );
};

export default Satting;

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#45080',
  //   },
  Sync: {
    width: '100%',
    height: '27%',
    color: 'black',
    backgroundColor: 'white',
  },
  SyncContainer: {
    height: 76,
  },

  emailContainer: {
    height: 75,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  emailName: {},
  name: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  email: {},
  Syncname: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  syncleftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  syname: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 12,
  },
  googleContainer: {
    height: 75,
  },
  googleLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 17,
  },
  google: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  googlename: {
    fontSize: 17,
    paddingTop: 12,
  },
  EngineContainer: {
    height: 70,
  },
  BasicsContainer: {
    height: 52,
  },
});
