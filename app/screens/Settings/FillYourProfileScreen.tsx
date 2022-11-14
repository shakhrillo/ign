import React, {FC} from "react"
import { observer } from "mobx-react-lite";
import { SafeAreaView, View, ViewStyle } from "react-native";
import { AppStackScreenProps, navigationRef } from "../../navigators";
import { colors, spacing } from "../../theme";
import { Button, Icon, Text, TextField } from "../../components";
import { AddImage } from "../../components/AddImage";
import { translate } from "../../i18n";
import { Divider } from "@rneui/themed";
import { FlatList } from "react-native-gesture-handler";

interface FillYourProfileScreenProps extends AppStackScreenProps<"FillYourProfile">{}

export const FillYourProfileScreen: FC<FillYourProfileScreenProps> = observer(function FillYourProfile({navigation}) {
    const inputs = [
        {   rightAccessory: null,
            placeholder: translate('fillYourProfile.fullName')
        },
        {   rightAccessory: null,
            placeholder: translate('fillYourProfile.nickName')
        },
        {   rightAccessory: null,
            placeholder: translate('fillYourProfile.dateOfBirth')
        },
        {   rightAccessory: () => <Icon icon="sms" />,
            placeholder: translate('fillYourProfile.email')
        },
        {   rightAccessory: null,
            placeholder: ''
        },
        {   rightAccessory: null,
            placeholder: translate('fillYourProfile.gender')
        },
        {   rightAccessory: null,
            placeholder: translate('fillYourProfile.occuption')
        },
    ]
    const _renderItem = ({item}) => (
        <TextField
            placeholder={item.placeholder}
            RightAccessory={item.rightAccessory}
            containerStyle={$textField}
        />
    )
    return(
        <SafeAreaView style={$screenContentContainer} >
            <View style={$container}>
                <Text size="xl" weight="bold" tx={"fillYourProfile.title"} />
                <AddImage size={120} avatar={true} containerStyle={$avatarContainerStyle} />
                <FlatList
                    data={inputs}
                    renderItem={({item}) => _renderItem({item})}
                />
                <Divider width={1} color={colors.transparent} />
                <Button preset="default" onPress={() => navigation.navigate('AddYourBestPhotos')} tx={"common.nextPage"} />
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