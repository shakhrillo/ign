import { observer } from "mobx-react-lite";
import React, {FC, useState} from "react";
import { FlatList, SafeAreaView, View, ViewStyle } from "react-native";
import { Button, Icon, Screen, TextField, Toggle } from "../../components";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";
import { Divider } from '@rneui/themed';
import { translate } from "../../i18n";

interface ChooseCountryScreenProps extends AppStackScreenProps<"ChooseCountry">{}


const countrys = [
    {name: 'Uzbekistan'},
    
]

export const ChooseCountryScreen: FC<ChooseCountryScreenProps> = observer(function ChooseCountry({navigation}) {

    const [radioSelect, setRadioSelect] = useState(false)
    

    const $renderItemStyle: ViewStyle = {
        marginVertical: spacing.extraSmall
    }

    
    const _renderitem = ({item}) => {
        return <Toggle containerStyle={$renderItemStyle} value={radioSelect} onPress={() => setRadioSelect(!radioSelect)} variant="radio" label={item.name} />
    }
    return (
        <SafeAreaView style={$screenContentContainer} >
            <View style={$container}>
                <TextField placeholder={translate("common.search")} LeftAccessory={() => <Icon icon={"seacrh"} />} />
                <FlatList
                    style={$countryList}
                    data={countrys}
                    renderItem={({item}) => _renderitem({item})}
                />
                <Divider width={1} color={colors.palette.neutral100} />
                <Button onPress={() => navigation.navigate('Interests')} preset={radioSelect ? "primary" : "default"} tx={"common.nextPage"} style={$nextButton} />
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

const $countryList: ViewStyle = {
    marginTop: spacing.medium,
}

const $nextButton: ViewStyle = {
}