import React, { FC, useState } from "react"
import { Image, Dimensions, TextStyle, View, ViewStyle } from "react-native"

import { observer } from "mobx-react-lite"
import AppIntroSlider from "react-native-app-intro-slider"
import { SafeAreaView } from "react-native-safe-area-context"

import { Button, Text } from "../components"
import { translate } from "../i18n";
import { colors } from "../theme";
import { AppStackScreenProps } from "../navigators"

const welcomeLogo = require("../../assets/images/logo.png");
const secondImage = require("../../assets/images/secondImage.png")
const thirdImage = require("../../assets/images/thirdImage.png")

const $firstTitleContainer: TextStyle = {
  fontWeight: "bold",
  fontSize: 52,
  lineHeight: 60,
  textTransform: "uppercase",
  textAlign: "center",
  letterSpacing: 21,
}

const $subtitleContainer: TextStyle = {
  fontSize: 20,
  lineHeight: 25,
  textAlign: "center",
  textTransform: "capitalize",
  marginVertical: 20,
}

const $otherTitleContainer: TextStyle = {
  fontWeight: '600',
  fontSize: 26,
  lineHeight: 30,
  textAlign: 'center',
  color: colors.palette.black500
}

const $textContainer: ViewStyle = {
  paddingHorizontal: 10
}

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen({navigation}) {
  const screens = [
    {
      id: 1,
      image: welcomeLogo,
      title: translate("brandName"),
      subTitle: translate("onboarding.pageOneSubTIitle"),
      titleSet: $firstTitleContainer,
      subTitleSet: $subtitleContainer,
    },
    {
      id: 2,
      image: secondImage,
      title: translate("onboarding.pageTwoTitle"),
      subTitle: translate("onboarding.pageTwoSubTitle"),
      titleSet: $otherTitleContainer,
      subTitleSet: $subtitleContainer,
    },
    {
      id: 3,
      image: thirdImage,
      title: translate("onboarding.pageThereTitle"),
      subTitle: translate("onboarding.pageThereSubTitle"),
      titleSet: $otherTitleContainer,
      subTitleSet: $subtitleContainer,
    },
  ]

  const WIDTH = Dimensions.get("window").width

  const [showHomePage, setShowHomePage] = useState(false)

  const _nextButton = () => (<Button preset="primary" text={translate("onboarding.nextButton")} />)
  const _doneButton = () => (<Button onPress={() => navigation.navigate('Register')} preset="primary" text={translate("onboarding.doneButton")} />)

  if (!showHomePage) {
    return (
      <SafeAreaView style={$container}>
        <AppIntroSlider 
          data={screens}
          keyExtractor={(item) => item.subTitle}
          renderItem={({ item }) => {
            return (
              <View style={$topContainer}>
                <Image
                  key={1}
                  source={item.image}
                  style={{ width: WIDTH - 80, height: 400 }}
                  resizeMode={"contain"}
                />
                <View style={$textContainer}>
                  <Text style={item.titleSet} text={item.title} />
                  <Text style={item.subTitleSet} text={item.subTitle} />
                </View>
              </View>
            )
          }}
          bottomButton
          activeDotStyle={$activeDotStyle}
          renderNextButton={_nextButton}
          renderDoneButton={_doneButton}
        />
      </SafeAreaView>
    )
  }
})

const $activeDotStyle : ViewStyle = {
    backgroundColor: colors.palette.primary500,
    width: 30
}

const $container: ViewStyle = {
  flex: 1,
  backgroundColor: colors.background,
}

const $topContainer: ViewStyle = {
  width: "100%",
  justifyContent: "center",
  alignItems: "center"
}
// import { observer } from "mobx-react-lite"
// import React, {
//   FC,
// } from "react"
// import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context"
// import {
//   Text,
// } from "../components"
// import { isRTL } from "../i18n"
// import { colors, spacing } from "../theme"

// const welcomeLogo = require("../../assets/images/logo.png")
// const welcomeFace = require("../../assets/images/welcome-face.png")

// export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
// ) {

//   return (
//     <View style={$container}>
//       <View style={$topContainer}>
//         <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
//         <Text
//           testID="welcome-heading"
//           style={$welcomeHeading}
//           tx="welcomeScreen.readyForLaunch"
//           preset="heading"
//         />
//         <Text tx="welcomeScreen.exciting" preset="subheading" />
//         <Image style={$welcomeFace} source={welcomeFace} resizeMode="contain" />
//       </View>

//       <SafeAreaView style={$bottomContainer} edges={["bottom"]}>
//         <View style={$bottomContentContainer}>
//           <Text tx="welcomeScreen.postscript" size="md" />
//         </View>
//       </SafeAreaView>
//     </View>
//   )
// })
//   flexShrink: 1,
//   flexGrow: 1,
//   flexBasis: "57%",
//   justifyContent: "center",
//   paddingHorizontal: spacing.large,
// }

// const $bottomContainer: ViewStyle = {
//   flexShrink: 1,
//   flexGrow: 0,
//   flexBasis: "43%",
//   backgroundColor: colors.palette.neutral100,
//   borderTopLeftRadius: 16,
//   borderTopRightRadius: 16,
//   fontWeight: ""
// }

// const $bottomContentContainer: ViewStyle = {
//   flex: 1,
//   paddingHorizontal: spacing.large,
//   justifyContent: "space-around",
// }

// const $welcomeLogo: ImageStyle = {
//   height: 88,
//   width: "100%",
//   marginBottom: spacing.huge,
// }

// const $welcomeFace: ImageStyle = {
//   height: 169,
//   width: 269,
//   position: "absolute",
//   bottom: -47,
//   right: -80,
//   transform: [{ scaleX: isRTL ? -1 : 1 }],
// }

// const $welcomeHeading: TextStyle = {
//   marginBottom: spacing.medium,
// }
