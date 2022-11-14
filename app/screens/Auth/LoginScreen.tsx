import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { TextInput, TextStyle, View, ViewStyle } from "react-native"
import { useStores } from "../../models"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps, Toggle } from "../../components"
import { AppStackScreenProps } from "../../navigators"
import { colors, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"

interface LoginScreenProps extends AppStackScreenProps<"Login"> {}

export const LoginScreen: FC<LoginScreenProps> = observer(function LoginScreen(_props) {
  const authPasswordInput = useRef<TextInput>()
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const [rememberCheck, setRememberCheck] = useState(true)
  const {
    authenticationStore: {
      authEmail,
      authPassword,
      setAuthEmail,
      setAuthPassword,
      setAuthToken,
      validationErrors,
    },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credientials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail("ignite@infinite.red")
    setAuthPassword("ign1teIsAwes0m3")
  }, [])

  const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)

    if (Object.values(validationErrors).some((v) => !!v)) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={'eye'}
            color={isAuthPasswordHidden ? colors.palette.primary600 : colors.palette.neutral800}
            containerStyle={props.style}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  useEffect(() => {
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  return (
    <SafeAreaView style={$screenContentContainer}>
      <Text testID="login-heading" tx="loginScreen.signIn" preset="heading" style={$signIn} />
      {attemptsCount > 2 && <Text tx="loginScreen.hint" size="sm" weight="light" style={$hint} />}

      <TextField
        value={authEmail}
        onChangeText={setAuthEmail}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="email"
        autoCorrect={false}
        keyboardType="email-address"
        // labelTx="loginScreen.emailFieldLabel"
        placeholderTx="loginScreen.emailFieldPlaceholder"
        helper={errors?.authEmail}
        status={errors?.authEmail ? "error" : undefined}
        onSubmitEditing={() => authPasswordInput.current?.focus()}
        LeftAccessory={() => <Icon color={colors.palette.primary600} icon="sms" />}
      />

      <TextField
        ref={authPasswordInput}
        value={authPassword}
        onChangeText={setAuthPassword}
        containerStyle={$textField}
        autoCapitalize="none"
        autoComplete="password"
        autoCorrect={false}
        secureTextEntry={isAuthPasswordHidden}
        // labelTx="loginScreen.passwordFieldLabel"
        placeholderTx="loginScreen.passwordFieldPlaceholder"
        helper={errors?.authPassword}
        status={errors?.authPassword ? "error" : undefined}
        onSubmitEditing={login}
        RightAccessory={PasswordRightAccessory}
        LeftAccessory={() => <Icon color={colors.palette.primary600} icon="lock" />}
      />

        <Toggle
          containerStyle={$checkbox}
          value={rememberCheck}
          label={"Remember me"}
          variant="checkbox"
          onValueChange={() => setRememberCheck(!rememberCheck)}
        />

      <Button
        testID="login-button"
        tx="loginScreen.signIn"
        style={$tapButton}
        preset="primary"
        onPress={login}
      />

      <Text style={$forgotText} size={"xs"} tx="loginScreen.forgotPass" />
      <Text textWithLine={true} tx="loginScreen.orContWith" />
      <View style={$loginWithBtn}>
        <Button preset='withIcon' icon="google" />
        <Button preset='withIcon' icon="facebook" />
        <Button preset='withIcon' icon="sms" />
      </View>
    </SafeAreaView>
  )
})

const $screenContentContainer: ViewStyle = {
  height: '100%',
  backgroundColor: colors.palette.neutral100,
  paddingVertical: spacing.huge,
  paddingHorizontal: spacing.large,
  justifyContent: 'flex-end'
}

const $signIn: TextStyle = {
  marginTop: 'auto',
  marginBottom: 'auto',
  textAlign: 'center',
}

const $enterDetails: TextStyle = {
  marginBottom: spacing.large,
}

const $hint: TextStyle = {
  color: colors.tint,
  marginBottom: spacing.medium,
}

const $textField: ViewStyle = {
  marginBottom: spacing.large,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.extraSmall,
}

const $checkbox: ViewStyle = {
  marginBottom: 10
}

const $forgotText: TextStyle = {
  marginVertical: spacing.small,
  textAlign: 'center',
  color: colors.palette.primary600
}

const $loginWithBtn: ViewStyle = {
  marginTop: spacing.medium,
  flexDirection: 'row',
  justifyContent: 'space-around'
}
// @demo remove-file
