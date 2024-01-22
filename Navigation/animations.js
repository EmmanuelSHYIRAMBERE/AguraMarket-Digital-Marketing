/**
 * Stack Navigator exposes various options to
 * configure the transition animation when a screen is added or removed.
 * These transition animations can be customized on a per-screen basis by
 * specifying the options in the options prop for each screen.
 */

/**
 * transitionSpec
 *
 * An object which specifies the animation type
 * (timing or spring) and their options (such as duration for timing)
 */

/**
 * A config which uses spring animation looks like this
 */

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

/**
 * We can pass this config in the transitionSpec option
 */

<Stack.Screen
  name="Profile"
  component={Profile}
  options={{
    transitionSpec: {
      open: config,
      close: config,
    },
  }}
/>;

/**
 * cardStyleInterpolator
 *
 * This is a function which specifies interpolated styles for
 * various parts of the card
 */

/**
 * A config which just fades the screen looks like this:
 */

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

/**
 * We can pass this function in cardStyleInterpolator option:
 */

<Stack.Screen
  name="Profile"
  component={Profile}
  options={{ cardStyleInterpolator: forFade }}
/>;

/**
 * Say we want to animate both screens during the transition.
 * The easiest way to do it would be to combine the
 * progress value of current and next screens:
 */

const progress = Animated.add(
  current.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  }),
  next
    ? next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: "clamp",
      })
    : 0
);

/**
 * A config which translates the previous screen slightly to the left,
 * and translates the current screen from the right edge
 * would look like this:
 */

const forSlide = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

/**
 * headerStyleInterpolator
 *
 * This is a function which specifies interpolated styles for various parts of the header
 */

/**
 * A config which just fades the elements looks like this:
 */

const forFades = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

/**
 * We can pass this function in headerStyleInterpolator option:
 */

<Stack.Screen
  name="Profile"
  component={Profile}
  options={{ headerStyleInterpolator: forFade }}
/>;
