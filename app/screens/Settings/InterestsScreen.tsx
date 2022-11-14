import React,{FC, useState} from 'react'
import { Divider } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import { Dimensions, FlatList, SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { Button, Text, Toggle } from "../../components";
import { translate } from "../../i18n";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";

interface InterestsScreenProps extends AppStackScreenProps<"Interests">{}

export const InterestsScreen: FC<InterestsScreenProps> = observer(function InterestsScreenProps({navigation}) {
    const interests = [
        {interes: translate("interestsScreen.cars")},
        {interes: translate("interestsScreen.fashion")},
        {interes: translate("interestsScreen.movies")},
        {interes: translate("interestsScreen.covid19")},
        {interes: translate("interestsScreen.nature")},
        {interes: translate("interestsScreen.adventure")},
        {interes: translate("interestsScreen.fitness")},
        {interes: translate("interestsScreen.dancing")},
        {interes: translate("interestsScreen.beauty")},
        {interes: translate("interestsScreen.handicraft")},
        {interes: translate("interestsScreen.astrology")},
        {interes: translate("interestsScreen.collecting")},
        {interes: translate("interestsScreen.singing")},
        {interes: translate("interestsScreen.shopping")},
        {interes: translate("interestsScreen.technology")},
        {interes: translate("interestsScreen.design")},
        {interes: translate("interestsScreen.life")},
        {interes: translate("interestsScreen.casual")},
        {interes: translate("interestsScreen.humor")},
        {interes: translate("interestsScreen.sciense")},
        {interes: translate("interestsScreen.family")},
        {interes: translate("interestsScreen.fashion")},
    ]
    const [checkeds, setCheckeds] = useState(0)

    function _renderItem({item}) {
        return (
            <View style={$listItem} >
                <Toggle 
                    text={item.interes}
                    variant={'checkboxWithText'}
                    icon={'add'}
                />
            </View>
        )
    }
    return (
        <SafeAreaView style={$screenContentContainer}>
            <View style={$container}>
                <View style={$checkeds}>
                    <Text style={$checkedsText}>{checkeds}/{interests.length}</Text>
                </View>
                <Text size="xl" weight="bold" tx={"interestsScreen.title"} />
                <Text style={$interestsSubtitle} size="md" weight="normal" tx={"interestsScreen.subtitle"} />
                <FlatList 
                    data={interests}
                    keyExtractor={(item) => item.interes}
                    renderItem={({item}) => _renderItem({item})}
                    numColumns={2}
                />
                <Text />
                <Divider width={1} color={colors.palette.neutral100} />
                <Button preset={"primary"} tx={"common.nextPage"} onPress={() => navigation.navigate("FillYourProfile")} />
            </View>
        </SafeAreaView>
    )
})

const $screenContentContainer: ViewStyle = {
    backgroundColor: colors.palette.neutral100,
}
const $container: ViewStyle = {
    paddingHorizontal: spacing.large,
    height: '100%'
}

const $listItem: ViewStyle = {
    width: Dimensions.get("screen").width / 2 - 32,
    marginVertical: 5,
    marginHorizontal: 5,
}

const $checkeds: ViewStyle = {
    width: 70,
    marginLeft: 'auto',
    backgroundColor: colors.palette.neutral500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
}

const $checkedsText: TextStyle = {
    color: colors.palette.neutral100
}

const $interestsSubtitle: TextStyle = {
    marginVertical: spacing.medium
}