import React, {useState} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import CarouselItem from './CarouselItem';
import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const _renderItem = ({item, index}) => {
  return <CarouselItem item={item} index={index} />;
};

function DisplayView({articles}) {
  const [activeSlide, update] = useState(0);
  return (
    <View style={styles.container}>
      <Carousel
        data={articles}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onSnapToItem={(index) => update(index)}
        loop={true}
      />
      <Pagination
        dotsLength={articles.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={{}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3282b8',
  },
});

export default withDatabase(
  withObservables([], ({database}) => ({
    articles: database.collections.get('articles').query().observe(),
  }))(DisplayView),
);
