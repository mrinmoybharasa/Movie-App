import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LoginImage from './LoginImage';
import InformationField from './InformationField';
import axios from 'axios';
import Toast from 'react-native-toast-message';
const SignUp = props => {
  const navigation = useNavigation();

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Number, setNumber] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [UserPassword, setUserPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const user = async () => {
    // return Alert.alert(UserName, Password);
    //
    // if (
    //   FirstName === 'Mrinmoy' &&
    //   LastName === 'Bharasa' &&
    //   Number === '123456789' &&
    //   UserEmail === 'mrinmoybharasa@gmail.com' &&
    //   UserPassword === 'mrinmoy1234' &&
    //   ConfirmPassword === 'mrinmoy1234'
    // ) {
    //   Alert.alert(
    //     `SingUp successfully ${FirstName}${LastName}${Number}${UserEmail}${UserPassword}${ConfirmPassword}`,
    //   );
    //   navigation.navigate('Login');
    // } else {
    //   Alert.alert(`User name can not found`);
    // }
    //
    // function
    try {
      if (
        !FirstName ||
        !LastName ||
        !Number ||
        !UserEmail ||
        !UserPassword ||
        !ConfirmPassword
      ) {
        return Alert.alert('invalid');
      }
      const {data} = await axios.post('/auth/register', {
        firstname: FirstName,
        lastname: LastName,
        contactNumber: Number,
        email: UserEmail,
        password: UserPassword,
        confirmPassword: ConfirmPassword,
      });

      // Alert.alert(data && data.message);
      Toast.show({
        type: 'success',
        text1: 'SignUp Successful Please Login! ',
        text2: 'Welcome back!', // Optional
        position: 'top', // or 'bottom'
        visibilityTime: 10000,
      });

      navigation.navigate('Login');
    } catch (error) {
      Alert.alert(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <LoginImage>
      <View style={{alignItems: 'center', width: 430}}>
        <Text
          style={{
            // color: 'rgb(220,220,220)',
            color: '#660000',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 50,
          }}>
          SignUp
        </Text>
        <Text
          style={{
            color: '#660000',
            fontSize: 23,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a account
        </Text>
        <View
          style={{
            // backgroundColor: 'white',
            // experimental_backgroundImage: {LoginImage},

            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/images/unknown.png')}
            style={{width: 40, height: 40}}
          />
          {/* <Text
            style={{
              fontSize: 40,
              color: '#dc143c',
              fontWeight: 'bold',
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text> */}
          <InformationField
            placeholder="First Name"
            value={FirstName}
            setValue={setFirstName}
            onChangeText={actualData => setFirstName(actualData)}
          />
          <InformationField
            placeholder="Last Name"
            value={LastName}
            setValue={setLastName}
            onChangeText={actualData => setLastName(actualData)}
          />
          <InformationField
            placeholder="Contact Number"
            keybordType={'number'}
            value={Number}
            setValue={setNumber}
            onChangeText={actualData => setNumber(actualData)}
          />
          <InformationField
            placeholder="Email /Username"
            keybordType={'email-address'}
            value={UserEmail}
            setValue={setUserEmail}
            onChangeText={actualData => setUserEmail(actualData)}
          />
          <InformationField
            placeholder="Password"
            secureTextEntry={true}
            value={UserPassword}
            setValue={setUserPassword}
            onChangeText={actualData => setUserPassword(actualData)}
          />
          <InformationField
            placeholder=" Confirm Password"
            secureTextEntry={true}
            value={ConfirmPassword}
            setValue={setConfirmPassword}
            onChangeText={actualData => setConfirmPassword(actualData)}
          />
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 100,
            }}>
            {/* <Text style={{color: '#7fffd4', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text> */}
          </View>
          {/* <Button
          
            textColor="white"
            bgColor={darkGreen}
            buttonLabel={'SingUp'}
            Press={() => {
              props.navigation.navigate('Login');
            }}
          /> */}
          <TouchableOpacity
            onPress={() => user()}
            style={{
              backgroundColor: '#dc143c',
              borderRadius: 100,
              alignItems: 'center',
              width: 350,
              height: 43,

              paddingVertical: 5,
              marginVertical: 10,
            }}>
            <Text style={{fontSize: 23, color: 'white', fontWeight: 'bold'}}>
              SingUp
            </Text>
          </TouchableOpacity>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16}}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#dc143c',
                  fontSize: 17,
                  fontWeight: 'bold',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LoginImage>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
