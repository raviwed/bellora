import type { ReactNode } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  type ImageSourcePropType,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

const defaultBackgroundImage = require("../assets/belloraBackground.png");

type SafeAreaComponentProps = {
  children: ReactNode;
  imageSource?: ImageSourcePropType;
};

const SafeAreaComponent = ({
  children,
  imageSource = defaultBackgroundImage,
}: SafeAreaComponentProps) => {
    return (
      <View style={styles.container}>
        <Image
          source={imageSource}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea} edges={['top', 'bottom', 'left', 'right']}>
          {children}
        </SafeAreaView>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  backgroundImage: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
  },

  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default SafeAreaComponent
