// import React, { useState } from "react"
// import { Image, Dimensions, View, Text, SafeAreaView } from "react-native"
import AppIntroSlider from "react-native-app-intro-slider"
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// import { COLORS } from "../../colors/colors";

import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import { Image, Dimensions, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button, Text } from "../components"
import { isRTL, translate } from "../i18n"
import { colors, spacing } from "../theme"

const welcomeLogo = require("../../assets/images/logo.png")
const welcomeFace = require("../../assets/images/welcome-face.png")

const $titleContainer: TextStyle = {
  fontWeight: "bold",
  fontSize: 52,
  lineHeight: 60,
  textTransform: "uppercase",
  textAlign: "center",
  letterSpacing: 21,
}

const $subtitleContainer: TextStyle = {
  fontSize: 20,
  lineHeight: 20,
  textAlign: "center",
  textTransform: "capitalize",
  marginVertical: 20,
}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen() {
  const screens = [
    {
      id: 1,
      image: welcomeLogo,
      title: translate("onboarding.brandName"),
      subTitle: translate("onboarding.pageOneSubTIitle"),
      titleSet: $titleContainer,
      subTitleSet: $subtitleContainer,
    },
    {
      id: 2,
      // image: require("../../Photos/two.png"),
      title: "Share your interests with the whole world.",
      subTitle:
        "Matches are based on common interests and languages. Ready to seal your first letter and meet a new love?",
      titleSet: $titleContainer,
      subTitleSet: $subtitleContainer,
    },
    {
      id: 3,
      // image: require("../../Photos/there.png"),
      title: "Let`s start your journey with us now!",
      subTitle:
        "Do not wait until the conditions are perfect to begin. Beginning makes the conditions perfect.",
      titleSet: $titleContainer,
      subTitleSet: $subtitleContainer,
    },
  ]
  // const buttonLabel = (label) => {
  //   return (
  //     <View
  //       style={{
  //         width: "100%",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         height: 45,
  //         borderRadius: 21,
  //         // backgroundColor: COLORS.yellow
  //       }}
  //     >
  //       <Text
  //         style={
  //           {
  //             // color: COLORS.black
  //           }
  //         }
  //       >
  //         {label}
  //       </Text>
  //     </View>
  //   )
  // }
  // const skipButton = (label) => {
  //   return (
  //     <View
  //       style={{
  //         marginVertical: 10,
  //         width: "100%",
  //         alignItems: "center",
  //         justifyContent: "center",
  //         height: 45,
  //         borderRadius: 21,
  //         backgroundColor: "#f5f5f5",
  //         flexDirection: "row",
  //         // shadowColor: COLORS.secondary,
  //         // shadowColor: "#000",
  //         shadowOffset: {
  //           width: 0,
  //           height: 3,
  //         },
  //         shadowOpacity: 0.27,
  //         shadowRadius: 4.65,

  //         elevation: 4,
  //       }}
  //     >
  //       {/* <Icon name="exit-to-app" size={22} color={COLORS.black} /> */}
  //       <Text
  //         style={{
  //           // color: COLORS.black,
  //           marginLeft: 10,
  //         }}
  //       >
  //         {label}
  //       </Text>
  //     </View>
  //   )
  // }

  const WIDTH = Dimensions.get("window").width

  const [showHomePage, setShowHomePage] = useState(false)

  if (!showHomePage) {
    return (
      <AppIntroSlider
        style={
          {
            // backgroundColor: COLORS.white
          }
        }
        data={screens}
        renderItem={({ item }) => {
          return (
            <View style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
              <Image
                key={1}
                source={item.image}
                style={{ width: WIDTH - 80, height: 400 }}
                resizeMode={"contain"}
              />
              <View>
                <Text style={item.titleSet}>{item.title}</Text>

                <Text style={item.subTitleSet}>{item.subTitle}</Text>
              </View>
            </View>
          )
        }}
        bottomButton
        showSkipButton
        activeDotStyle={{
          // backgroundColor: COLORS.yellow,
          width: 30,
        }}
        renderDoneButton={() => <Button text="Next +" />}
        renderNextButton={() => <Button text="Next" />}
        renderSkipButton={() => <Button isActive={true} text="Next -" />}
        // renderDoneButton={() => buttonLabel("Let’s start")}
        // renderSkipButton={() => skipButton("Already have Account?")}

        // onDone={() => navigation.navigate('RegistrationScreen')}
        // onSkip={() => navigation.navigate('HomeScreen')}
      />
    )
  }
})

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

// const $container: ViewStyle = {
//   flex: 1,
//   backgroundColor: colors.background,
// }

// const $topContainer: ViewStyle = {
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
