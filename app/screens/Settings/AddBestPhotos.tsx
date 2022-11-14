import React, {FC, useState} from "react"
import { observer } from "mobx-react-lite";
import { Dimensions, ImageStyle, SafeAreaView, TextStyle, View, ViewStyle } from "react-native";
import { AppStackScreenProps } from "../../navigators";
import { colors, spacing } from "../../theme";
import { Button, Icon, Text, TextField } from "../../components";
import { AddImage } from "../../components/AddImage";
import { translate } from "../../i18n";
import { Divider } from "@rneui/themed";
import { FlatList } from "react-native-gesture-handler";

interface AddYourBestPhotosScreenProps extends AppStackScreenProps<"AddYourBestPhotos">{}

export const AddYourBestPhotos: FC<AddYourBestPhotosScreenProps> = observer(function AddYourBestPhotos({navigation}) {

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
    const $imageStyle: ImageStyle = {
        width: Dimensions.get("window").width*.5-45,
        height: Dimensions.get("window").height*.3,
    }
    const $viewStyle: ViewStyle = {
        width: Dimensions.get("window").width*.5-45,
        height: Dimensions.get("window").height*.3,
    }
    const _renderItem = ({item}) => (
        <AddImage 
            imageStyle={$imageStyle}
            viewStyle={$viewStyle}
            source={item.uri}
            imagePick={true}
        />
    )
    return(
        <SafeAreaView style={$screenContentContainer} >
            <View style={$container}>
                <Text size="xl" weight="bold" tx={"addYourBestPhotos.title"} />
                <Text style={$interestsSubtitle} size="md" weight="normal" tx={"addYourBestPhotos.subTitle"} />
                <FlatList
                    numColumns={2}
                    data={inputs}
                    renderItem={({item}) => _renderItem({item})}
                />
                <Divider width={1} color={colors.transparent} />
                <Button preset="default" tx={"common.nextPage"} onPress={() => navigation.navigate("SelectYourIdeal")} />
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