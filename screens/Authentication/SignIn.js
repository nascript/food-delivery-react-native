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

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [saveMe, setSaveMe] = useState(false)

  function isEnableSignin() {
    return email !== '' && password !== '' && emailError === ''
  }

  return (
    <AuthLayout
      title="Let's Sign You In"
      subtitle="Welcome back, you've been missed"
    >
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
          label='Password'
          keyboardType='password'
          autoCompleteType='password'
          secureTextEntry={!showPassword}
          contentContainerStyle={{ marginTop: SIZES.radius }}
          onChange={(value) => {
            // validate email

            setPassword(value)
          }}
          // errorMsg={password}
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

        {/* Save me & Forgot Password */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'space-between',
          }}
        >
          <CustomSwitch
            value={saveMe}
            onChangeValue={(value) => {
              setSaveMe(value)
            }}
          />

          <TextButton
            label='Forgot Password'
            buttonContainerStyle={{ backgroundColor: null }}
            labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
            onPress={() => navigation.navigate('ForgotPassword')}
          />
        </View>

        {/* Sign In */}
        <TextButton
          label='Sign In'
          disabled={isEnableSignin() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: 'center',
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignin()
              ? COLORS.primary
              : COLORS.transparentPrimray,
          }}
        />
        {/* Sig nup */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: SIZES.radius,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Don't have an account ?
          </Text>

          <TextButton
            label='Sign Up'
            buttonContainerStyle={{
              backgroundColor: null,
              marginLeft: 3,
              marginTop: -1,
            }}
            labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
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
