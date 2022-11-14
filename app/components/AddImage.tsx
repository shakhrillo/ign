import React, {useState} from "react"
import { Dimensions, ImageStyle, Pressable, PressableProps, PressableStateCallbackType, StyleProp, View, ViewStyle } from "react-native"
import { AutoImage } from "./AutoImage"
import { Text } from "./Text"
import * as ImagePicker from 'expo-image-picker';
import { Icon } from "./Icon";
import { colors } from "../theme";

export interface AddImageAccessoryProps {
    style: StyleProp<any>
    pressableState: PressableStateCallbackType
}

export interface AddImageProps extends PressableProps {
    source?: object
    text?: string
    size?: number
    avatar?: boolean 
    imagePick?: boolean 
    containerStyle?: StyleProp<ViewStyle>
    imageStyle?: ImageStyle
    viewStyle?: ViewStyle
}

export function AddImage(props: AddImageProps) {
    const {
        source,
        text,
        size = 20,
        containerStyle: $containerStyle,
        avatar,
        imagePick,
        imageStyle,
        viewStyle
    } = props

    const [image, setImage] = useState(source);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled ) {
          setImage(result.uri);
        }
    };

    const $avatarImage = {
        borderRadius: size / 2,
        width: size,
        height: size
    }

    return(
        <Pressable onPress={pickImage} style={[$containerStyle, {height: 'auto'}]}>
            {avatar && <AutoImage source={{ uri: image ? 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60' : image }} style={$avatarImage} />}
            {imagePick && (
                image ?
                <AutoImage source={{uri: image}} style={[$imagePick, imageStyle]} /> :
                <View style={[$addIcon, viewStyle]}>
                    <Icon icon="add" />
                </View>
            )
            }
            {text &&
                <Text text={text} />
            }

        </Pressable>
    )
}

const $imagePick: ImageStyle = {
    resizeMode: 'cover',
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.transparent
}

const $addIcon: ViewStyle = {
    width: Dimensions.get("window").width*.5-45,
    height: Dimensions.get("window").height*.3,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderWidth: 1,
    borderRadius: 20
}