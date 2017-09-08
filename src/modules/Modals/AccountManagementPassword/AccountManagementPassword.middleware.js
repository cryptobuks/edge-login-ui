import { openLoading, closeLoading } from '../../Loader/Loader.action'

export const checkPassword = (password, account, callback) => {
  return (dispatch, getState, imports) => {
    const t = imports.t
    dispatch(openLoading())
    account.checkPassword(password).then(passwordIsGood => {
      dispatch(closeLoading())
      if (!passwordIsGood) {
        return dispatch(callback(t('server_error_bad_password')))
      }
      if (passwordIsGood) {
        return dispatch(callback(null))
      }
    })
  }
}