import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { AuthLayout } from '../'
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButtonSecond,
} from '../../components'
import { icons, SIZES, COLORS, constants, FONTS } from '../../constants'
import { utils } from '../../utils'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignIn = ({ navigation }) => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [saveMe, setSaveMe] = useState(false)

  const [userNameError, setUserNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  function isEnableSignUp() {
    return (
      email !== '' &&
      userName !== '' &&
      password !== '' &&
      emailError === '' &&
      userNameError === '' &&
      passwordError === ''
    )
  }

  return (
    <AuthLayout
      title='Getting Started'
      subtitle='Create an account to continue'
    >
      <KeyboardAwareScrollView keyboardDismissMode='on-drag'>
        <View style={{ flex: 1, marginTop: SIZES.padding * 2 }}>
          {/* Form Input */}

          <FormInput
            label='Email'
            keyboardType='email-address'
            autoCompleteType='email'
            onChange={(value) => {
              // validate email
              utils.validateEmail(value, setEmailError)
              setEmail(value)
            }}
            errorMsg={emailError}
            appendComponent={
              <View style={{ justifyContent: 'center' }}>
                <Image
                  source={
                    email === '' || (email !== '' && emailError === '')
                      ? icons.correct
                      : icons.cross
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      email === ''
                        ? COLORS.gray
                        : email != '' && emailError === ''
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <FormInput
            label='Username'
            keyboardType='username'
            // autoCompleteType='username'
            onChange={(value) => {
              // validate email
              utils.validateUserName(value, setUserNameError)
              setUserName(value)
            }}
            errorMsg={userNameError}
            appendComponent={
              <View style={{ justifyContent: 'center' }}>
                <Image
                  source={
                    userName === '' || (userName !== '' && userNameError === '')
                      ? icons.correct
                      : icons.cross
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      userName === ''
                        ? COLORS.gray
                        : userName != '' && userNameError === ''
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <FormInput
            label='Password'
            keyboardType='password'
            autoCompleteType='password'
            secureTextEntry={!showPassword}
            contentContainerStyle={{ marginTop: SIZES.radius }}
            onChange={(value) => {
              // validate password
              utils.validatePassword(value, setPasswordError)
              setPassword(value)
            }}
            errorMsg={passwordError}
            appendComponent={
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Image
                  source={showPassword ? icons.eye_close : icons.eye}
                  style={{ height: 20, width: 20, tintColor: COLORS.gray }}
                />
              </TouchableOpacity>
            }
          />

          {/* Sign In */}
          <TextButton
            label='Sign Up'
            disabled={isEnableSignUp() ? false : true}
            buttonContainerStyle={{
              height: 55,
              alignItems: 'center',
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              backgroundColor: isEnableSignUp()
                ? COLORS.primary
                : COLORS.transparentPrimray,
            }}
          />
          {/* Sign In */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: SIZES.radius,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
              Already have an account ?
            </Text>

            <TextButton
              label='Sign In'
              buttonContainerStyle={{
                backgroundColor: null,
                marginLeft: 3,
                marginTop: -1,
              }}
              labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
              onPress={() => navigation.navigate('SignIn')}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
      {/* Footer */}
      <View style={{ marginBottom: 40 }}>
        {/* Facebook Login */}
        <TextIconButtonSecond
          // iconStyle={{ tintColor: COLORS.white }}
          contentContainerStyle={{
            height: 50,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition='LEFT'
          label='Continue with Facebook'
          labelStyle={{ marginLeft: SIZES.radius, color: COLORS.white }}
          onPress={() => console.log('LOGIN FACEBOOK')}
        />
        {/* Google Login */}
        <TextIconButtonSecond
          // iconStyle={{ tintColor: null }}
          contentContainerStyle={{
            height: 50,
            alignItems: 'center',
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            borderWidth: 1,
            borderColor: COLORS.lightGray1,
          }}
          icon={icons.google}
          iconPosition='LEFT'
          label='Continue with Google'
          labelStyle={{ marginLeft: SIZES.radius, color: COLORS.black }}
          onPress={() => console.log('LOGIN GOOGLE')}
        />
      </View>
    </AuthLayout>
  )
}

export default SignIn
