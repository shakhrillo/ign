import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import { SafeAreaView, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { Button, Icon, Text, TextField, TextFieldAccessoryProps } from "../../components";
import { translate } from "../../i18n";
import { useStores } from "../../models";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";

interface RegisterScreenProps extends AppStackScreenProps<"Register">{}

export const RegisterScreen: FC<RegisterScreenProps> = observer(function Register({navigation}) {
    
    const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const authPasswordInput = useRef<TextInput>()

    const {
        authenticationStore: {
            authPassword,
            setAuthPassword,
            validationErrors,
        }
    } = useStores()

    useEffect(() => {
        setAuthPassword("ign1teIsAwes0m3")
    })

    const errors: typeof validationErrors = isSubmitted ? validationErrors : ({} as any)

    function login() {
        setIsSubmitted(true)
    
        if (Object.values(validationErrors).some((v) => !!v)) return
    
        // Make a request to your server to get an authentication token.
        // If successful, reset the fields and set the token.
        setIsSubmitted(false)
        setAuthPassword("")
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
    return (
        <SafeAreaView style={$safeArea}>
            <View style={$screenContentContainer}>
                <Text style={$title} weight={'bold'} size={'xl'} tx={'registerScreen.logIn'} />

                <TextField 
                    containerStyle={$textInput}
                    placeholder={
                        translate("registerScreen.enterYourEmail")
                        }
                    LeftAccessory={() => <Icon icon="sms" />}
                />

                <TextField
                    placeholder={
                        translate("registerScreen.enterYourName")
                        }
                    LeftAccessory={
                        () => <Icon icon="profile" />
                        }
                    containerStyle={$textInput}
                    />
                <TextField 
                    placeholder={
                        translate("registerScreen.enterYourPhoneNum")
                        }
                    LeftAccessory={
                        () => <Icon icon="profile" />
                        }
                    containerStyle={$textInput}
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
                
                <Button preset='primary' onPress={() => navigation.navigate('ChooseCountry')} tx={'registerScreen.register'} />
                <Text textWithLine={true} tx={'registerScreen.textWithLine'} />
                <View style={$loginWithBtn}>
                    <Button preset='withIcon' icon="google" />
                    <Button preset='withIcon' icon="facebook" />
                    <Button preset='withIcon' icon="sms" />
                </View>
                <View style={$footerText}>
                    <Text text="Already have an account? Sign in"/>
                </View>
            </View>
        </SafeAreaView>
    )
})

const $textInput: ViewStyle = {
    marginVertical: 12
}

const $safeArea: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
    height: '100%',
}

const $screenContentContainer: ViewStyle = {
    height: '100%',
    backgroundColor: colors.palette.neutral100,
    paddingTop: spacing.huge,
    paddingHorizontal: spacing.large,
}

const $title: TextStyle = {
    marginTop: 'auto',
    marginBottom: 'auto',
    textAlign: 'center',
}
const $loginWithBtn: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-around'
}

const $textField: ViewStyle = {
    marginBottom: spacing.large,
  }

const $footerText: ViewStyle = {
    marginTop: 30,
    marginBottom: 15,
    alignItems: 'center'
}