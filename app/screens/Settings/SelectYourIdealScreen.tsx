import React, {FC, useState} from "react"
import { observer } from "mobx-react-lite";
import { SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";
import { Button, Icon, iconRegistry, Text, Toggle } from "../../components";
import { Divider } from "@rneui/themed";

interface SelectYourIdealScreenProps extends AppStackScreenProps<"SelectYourIdeal">{}

export const SelectYourIdeal: FC<SelectYourIdealScreenProps> = observer(function SelectYourIdeal() {

    const inputs = [
        {
            uri: 'https://images.unsplash.com/photo-1667847988796-74c9067756e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        },
        {
            uri: 'https://images.unsplash.com/photo-1667988152364-52ab908cd3bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
        },
        {
            uri: null
        },
        {
            uri: null
        }
    ]
    return(
        <SafeAreaView style={$screenContentContainer} >
            <View style={$container}>
                <Text size="xl" weight="bold" tx={"selectYourIdeal.title"} />
                <Text style={$interestsSubtitle} size="md" weight="normal" tx={"selectYourIdeal.subTitle"} />
                <Toggle
                    variant={'checkboxWithText'}
                />
                <Divider width={1} color={colors.transparent} />
                <Button preset="default" tx={"common.nextPage"} />
            </View>
        </SafeAreaView>
    )
})

const $screenContentContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
}
const $container: ViewStyle = {
    paddingHorizontal: spacing.large,
    backgroundColor: colors.palette.neutral100,
    height: '100%'
}
const $avatarContainerStyle: ViewStyle = {
    alignItems: 'center',
    marginVertical: 30
}
const $textField: ViewStyle = {
    marginBottom: spacing.medium,
}
const $interestsSubtitle: TextStyle = {
    marginVertical: spacing.medium
}