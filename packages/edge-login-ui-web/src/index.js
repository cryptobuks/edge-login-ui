import './theme/globals.scss'

import React from 'react'
import { Provider } from 'react-redux'

import createStore from './lib/web/configureStore'
import AccountManagementScene from './modules/AccountManagement/AccountManagement.js'
import ChangePasswordScene from './modules/AccountManagement/ChangePassword/ChangePassword.js'
import ChangePinScene from './modules/AccountManagement/ChangePin/ChangePin.js'
import PasswordRecoveryScene from './modules/AccountManagement/PasswordRecovery/PasswordRecovery.js'
import PasswordRecoveryTokenScene from './modules/AccountManagement/PasswordRecoveryToken/PasswordRecoveryToken.js'
import ContainerX from './modules/Container.js'
import LoginScene from './modules/Login/Login.js'
import SignupScene from './modules/Signup/Signup.js'

String.format = function (format) {
  const args = Array.prototype.slice.call(arguments, 1)
  return format.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] !== 'undefined' ? args[number] : match
  })
}

const store = createStore()

function providerize (Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}

export const AccountManagement = providerize(AccountManagementScene)
export const ChangePassword = providerize(ChangePasswordScene)
export const ChangePin = providerize(ChangePinScene)
export const Container = providerize(ContainerX)
export const Login = providerize(LoginScene)
export const PasswordRecovery = providerize(PasswordRecoveryScene)
export const PasswordRecoveryToken = providerize(PasswordRecoveryTokenScene)
export const Signup = providerize(SignupScene)
