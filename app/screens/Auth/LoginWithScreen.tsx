import { translate } from "i18n-js";
import { observer } from "mobx-react-lite";
import React, {FC} from "react";
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { Button, Screen, Text } from "../../components";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";

interface LoginWithScreenProps extends AppStackScreenProps<"LoginWith">{}

export const LoginWithScreen: FC<LoginWithScreenProps> = observer(function LoginWithScreen(){
    return (
        <SafeAreaView style={$safeArea}>
            <View style={$screenContentContainer}>

                <Text style={$brandName} size={"xxxl"} tx={'brandName'} />
                <Text style={$subTitle} size='sm' text="By clicking Log In, you agree with our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy." />

                <Button icon='google' style={$btnMargin} preset="default" tx="loginWith.google" />
                <Button icon='facebook' style={$btnMargin} preset="default" tx="loginWith.facebook" />
                <Button icon='sms' style={$btnMargin} preset="default" tx="loginWith.email" />
                <Text textWithLine={true} tx="loginWith.or" />
                <Button preset="default" style={$btnMargin} tx="loginWith.number" />
                <Text style={$subTitle} size='sm' text="Don’t you have an account?   Sign Up" />
            </View>
        </SafeAreaView>
    )
})

const $safeArea: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
    height: '100%',
}

const $brandName: TextStyle = {
    marginTop: 'auto',
    marginBottom: 'auto',
    fontWeight: "bold",
    lineHeight: 60,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: 21,
}

const $subTitle: TextStyle = {
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 10,
    color: colors.palette.lightSecondary200
}

const $screenContentContainer: ViewStyle = {
    height: '100%',
    backgroundColor: colors.palette.neutral100,
    paddingTop: spacing.huge,
    paddingHorizontal: spacing.large,
}

const $btnMargin: ViewStyle = {
    marginVertical: 12
}