import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Image,
  FlatList,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export type CarouselImage = {
  id: string;
  source: ImageSourcePropType;
};

type CarouselProps = {
  images: CarouselImage[];
  width?: number;
  height?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  borderRadius?: number;
  containerStyle?: StyleProp<ViewStyle>;
  imageResizeMode?: 'cover' | 'contain' | 'stretch' | 'center';
};

const Carousel: React.FC<CarouselProps> = ({
  images,
  width = SCREEN_WIDTH,
  height = 200,
  autoPlay = false,
  autoPlayInterval = 3000,
  showDots = true,
  borderRadius = 12,
  containerStyle,
  imageResizeMode = 'cover',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<CarouselImage>>(null);

  useEffect(() => {
    setActiveIndex(0);
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: false,
    });
  }, [images]);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      setActiveIndex(nextIndex);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [activeIndex, autoPlay, autoPlayInterval, images.length]);

  const handleScroll = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);

    setActiveIndex(Math.max(0, Math.min(index, images.length - 1)));
  };

  const renderItem = ({item}: {item: CarouselImage}) => (
    <View style={[styles.slide, {width, height, borderRadius}]}>
      <Image
        source={item.source}
        style={[styles.image, {borderRadius}]}
        resizeMode={imageResizeMode}
      />
    </View>
  );

  if (images.length === 0) {
    return null;
  }

  return (
    <View style={[{width}, containerStyle]}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        extraData={activeIndex}
      />

      {showDots && images.length > 1 && (
        <View style={styles.pagination}>
          {images.map((image, index) => (
            <View
              key={image.id}
              style={[
                styles.dot,
                index === activeIndex && styles.activeDot,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 6,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#D6D6D6',
  },
  activeDot: {
    width: 18,
    backgroundColor: '#6B3F24',
  },
});

export default Carousel;
