/**
 * Stack Navigator provides a way for your app
 *  to transition between screens where each new screen is 
 * placed on top of a stack.
 */

/**
 * To use this navigator, 
 * ensure that you have @react-navigation/native and 
 * its dependencies (follow this guide), 
 * then install @react-navigation/stack:
 * 
 * npm install @react-navigation/stack
 */

/**
 * Then, you need to install and 
 * configure the libraries that are required by the stack navigator:
 */

/**
 * First, install react-native-gesture-handler.
 * 
 * npx expo install react-native-gesture-handler
 */

/**
 * To finalize installation of react-native-gesture-handler, 
 * add the following at the top (make sure it's at the top and 
 * there's nothing else before it) of your entry file, 
 * such as index.js or App.js
 * 
 * import 'react-native-gesture-handler';
 */


/**
 * Optionally, you can also install @react-native-masked-view/masked-view. 
 * This is needed if you want to use UIKit style animations 
 * for the header (HeaderStyleInterpolators.forUIKit)
 * 
 * npx expo install @react-native-masked-view/masked-view
 */

/**
 * To use this navigator, import it from @react-navigation/stack
 */

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

/**
 * header
 * 
 * This accepts a function that returns a React Element to display as a header. 
 * The function receives an object containing the 
 * following properties as the argument
 *  navigation, route, options, layout, progress, back, and styleInterpolator.
 */

/**
 *Make sure to set headerMode to screen as well when using a custom header 
 (see below for more details) 
 */

 import { getHeaderTitle } from "@react-navigation/elements";

 // ..

 header: ({ navigation, route, options, back }) => {
   const title = getHeaderTitle(options, route.name);

   return (
     <MyHeader
       title={title}
       leftButton={
         back ? <MyBackButton onPress={navigation.goBack} /> : undefined
       }
       style={options.headerStyle}
     />
   );
 };
 
 /**
  * If your header's height differs from the default header height, 
  * then you might notice glitches due to measurement being async. 
  * Explicitly specifying the height will avoid such glitches
  * 
  * headerStyle: {
  * height: 80, // Specify the height of your custom header
  * };
  */


 /**
  * But you might want to keep the floating header to have a different transition animation between headers. 
  * To do that, you'll need to specify headerMode: 
  * 'float' in the options, and 
  * then interpolate on the progress.current and 
  * progress.next props in your custom header. 
  * For example, following will cross-fade the header:
  */
 const opacity = Animated.add(progress.current, progress.next || 0).interpolate(
   {
     inputRange: [0, 1, 2],
     outputRange: [0, 1, 0],
   }
 );

 return (
   <Animated.View style={{ opacity }}>{/* Header content */}</Animated.View>
 );

 /**
  * Events
  */


 /**
  * transitionStart
  */
 React.useEffect(() => {
   const unsubscribe = navigation.addListener("transitionStart", (e) => {
     // Do something
   });

   return unsubscribe;
 }, [navigation]);


 /**
  * transitionEnd
  */

 React.useEffect(() => {
   const unsubscribe = navigation.addListener("transitionEnd", (e) => {
     // Do something
   });

   return unsubscribe;
 }, [navigation]);

 /**
  * gestureStart
  */

 React.useEffect(() => {
   const unsubscribe = navigation.addListener("gestureStart", (e) => {
     // Do something
   });

   return unsubscribe;
 }, [navigation]);

 /**
  * gestureEnd
  */

 React.useEffect(() => {
   const unsubscribe = navigation.addListener("gestureEnd", (e) => {
     // Do something
   });

   return unsubscribe;
 }, [navigation]);

 /**
  * gestureCancel
  */

 React.useEffect(() => {
   const unsubscribe = navigation.addListener("gestureCancel", (e) => {
     // Do something
   });

   return unsubscribe;
 }, [navigation]);

 /**
  * Helpers
  */

 /**
  * replace
  */

 navigation.replace("Profile", { owner: "Michaś" });


 /**
  * push
  */

 navigation.push("Profile", { owner: "Michaś" });

 /**
  * pop
  */

 navigation.pop();


 /**
  * popToTop
  */

 navigation.popToTop();
