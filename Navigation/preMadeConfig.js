/**
 * With these options, it's possible to build custom transition animations for screens. 
 * We also export various configs from the library with ready-made animations which you can use:
 * /
 
/** 
 * TransitionSpecs: TransitionIOSSpec, FadeInFromBottomAndroidSpec, 
 *                  FadeOutToBottomAndroidSpec,  RevealFromBottomAndroidSpec.
 */

import { TransitionSpecs } from "@react-navigation/stack";

// ...

<Stack.Screen
  name="Profile"
  component={Profile}
  options={{
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
  }}
/>;

/**
 * CardStyleInterpolators: forHorizontalIOS, forVerticalIOS,
 *                  forModalPresentationIOS ,  forFadeFromBottomAndroid,
 *                  forRevealFromBottomAndroid.
 */

import { CardStyleInterpolators } from "@react-navigation/stack";

// ...

<Stack.Screen
  name="Profile"
  component={Profile}
  options={{
      title: "Profile",
      cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    }}
/>;

/**
 * HeaderStyleInterpolators: forUIKit, forFade,
 *                  forStatic.
*/

import { HeaderStyleInterpolators } from "@react-navigation/stack";

// ...

<Stack.Screen
  name="Profile"
  component={Profile}
  options={{
      title: "Profile",
      headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
    }}
/>;


/**
 * TransitionPresets: SlideFromRightIOS, ModalSlideFromBottomIOS,
 *                  ModalPresentationIOS,  FadeFromBottomAndroid ,
 *                  RevealFromBottomAndroid, ScaleFromCenterAndroi,
 *                  DefaultTransition, ModalTransition.
 */

import { TransitionPresets } from "@react-navigation/stack";

// ...

<Stack.Screen
  name="Profile"
  component={Profile}
  options={{
    title: "Profile",
    ...TransitionPresets.ModalSlideFromBottomIOS,
  }}
/>;


/**
 * If you want to customize the transition animations for 
 * all of the screens in the navigator, 
 * you can specify it in screenOptions prop for the navigator.
 * 
 * Example configuration for iOS modal presentation style:
 */

import { TransitionPresets } from "@react-navigation/stack";

// ...

<Stack.Navigator
  initialRouteName="Home"
  screenOptions={({ route, navigation }) => ({
    headerShown: false,
    gestureEnabled: true,
    ...TransitionPresets.ModalPresentationIOS,
  })}
>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Profile" component={Profile} />
</Stack.Navigator>;


/**
 * Transparent modals
 * 
 * A transparent modal is like a modal dialog which overlays the 
 * screen. The previous screen still stays visible underneath. 
 * To get a transparent modal screen, you can specify presentation: 
 * 'transparentModal' in the screen's options.
 */

<Stack.Navigator>
  <Stack.Screen name="Home" component={HomeStack} />
  <Stack.Screen
    name="Modal"
    component={ModalScreen}
    options={{ presentation: "transparentModal" }}
  />
</Stack.Navigator>;


/**
 * If you want to further customize how the dialog animates, 
 * or want to close the screen when tapping the overlay etc., 
 * you can use the useCardAnimation hook to 
 * customize elements inside your screen.
 */

import {
  Animated,
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { useCardAnimation } from "@react-navigation/stack";

function ModalScreen({ navigation }) {
  const { colors } = useTheme();
  const { current } = useCardAnimation();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        ]}
        onPress={navigation.goBack}
      />
      <Animated.View
        style={{
          padding: 16,
          width: "90%",
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: colors.card,
          transform: [
            {
              scale: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0.9, 1],
                extrapolate: "clamp",
              }),
            },
          ],
        }}
      >
        <Text>
          Mise en place is a French term that literally means “put in place.” It
          also refers to a way cooks in professional kitchens and restaurants
          set up their work stations—first by gathering all ingredients for a
          recipes, partially preparing them (like measuring out and chopping),
          and setting them all near each other. Setting up mise en place before
          cooking is another top tip for home cooks, as it seriously helps with
          organization. It’ll pretty much guarantee you never forget to add an
          ingredient and save you time from running back and forth from the
          pantry ten times.
        </Text>
        <Button
          title="Okay"
          color={colors.primary}
          style={{ alignSelf: "flex-end" }}
          onPress={navigation.goBack}
        />
      </Animated.View>
    </View>
  );
}