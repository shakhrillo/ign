/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createStackNavigator, StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import { Icon } from "../components"
import Config from "../config"
import { useStores } from "../models"
import { WelcomeScreen } from "../screens"
import { LoginScreen } from "../screens/Auth/LoginScreen"
import { LoginWithScreen } from "../screens/Auth/LoginWithScreen"
import { RegisterScreen } from "../screens/Auth/Register"
import { ChooseCountryScreen } from "../screens/Settings/ChooseCountryScreen"
import { FillYourProfileScreen } from "../screens/Settings/FillYourProfileScreen"
import { AddYourBestPhotos } from "../screens/Settings/AddBestPhotos"
import { InterestsScreen } from "../screens/Settings/InterestsScreen"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { SelectYourIdeal } from "../screens/Settings/SelectYourIdealScreen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  AuthScreens: undefined
  Welcome: undefined
  Login: undefined
  LoginWith: undefined
  Register: undefined
  ChooseCountry: undefined
  Interests: undefined
  FillYourProfile: undefined
  AddYourBestPhotos: undefined
  SelectYourIdeal: undefined
  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
  AppStackParamList,
  T
>

const $backImage = {marginLeft: 20}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()
const Auth = createStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const {
    authenticationStore: { isAuthenticated },
  } = useStores()

  

  function AuthScreens() {
    return(
      <Auth.Navigator
        initialRouteName={isAuthenticated ? "Welcome" : "Login"}
      >
        <Auth.Screen name="Register" options={{
          headerShown: false,
          // headerBackImage: () => <Icon icon="arrowLeft" />
        }} component={RegisterScreen} />
        <Auth.Screen 
          name="ChooseCountry"
          component={ChooseCountryScreen}
          options={{
            headerShadowVisible: false,
            headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
            headerTitle: '',
            headerBackTitleVisible: false
          }}
        />
        <Auth.Screen 
          name="Interests"
          component={InterestsScreen}
          options={{
            headerShadowVisible: false,
            headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
            headerTitle: '',
            headerBackTitleVisible: false
          }}
        />
        <Auth.Screen 
          name="FillYourProfile"
          component={FillYourProfileScreen}
          options={{
            headerShadowVisible: false,
            headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
            headerTitle: '',
            headerBackTitleVisible: false
          }}
        />
        <Auth.Screen 
          name="AddYourBestPhotos"
          component={AddYourBestPhotos}
          options={{
            headerShadowVisible: false,
            headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
            headerTitle: '',
            headerBackTitleVisible: false
          }}
        />
        <Auth.Screen 
          name="SelectYourIdeal"
          component={SelectYourIdeal}
          options={{
            headerShadowVisible: false,
            headerBackImage: () => <Icon style={$backImage} icon="arrowLeft" />,
            headerTitle: '',
            headerBackTitleVisible: false
          }}
        />
        {isAuthenticated ? (
        <Auth.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
        ) : (
          <>
            <Auth.Screen name="Login" component={LoginScreen} />
          </>
        )}
        {/* <Auth.Screen name="LoginWith" component={LoginWithScreen} /> */}
      </Auth.Navigator>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false
      }}
    >
      <Stack.Screen name="AuthScreens" component={AuthScreens} />
      {/* * 🔥 Your screens go here */}

    </Stack.Navigator>
  )
})

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
