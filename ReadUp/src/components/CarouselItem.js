import React, {useMemo} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ImageBackground,
} from 'react-native';

function trim(item, limit) {
  return item.length > limit ? item.substring(0, limit).trim() + '...' : item;
}

const CarouselItem = ({item, index}) => {
  const CarouselItemComponent = useMemo(() => {
    return (
      <View key={index} style={styles.container}>
        <ImageBackground
          source={require('../images/none.jpg')}
          imageStyle={styles.imageStyle}
          style={styles.background}>
          <Image style={styles.image} source={{uri: item.image}} />
          <View style={styles.textView}>
            <Text style={styles.text} numberOfLines={2}>
              {trim(item.title, 50)}
            </Text>
            <Text style={styles.description} numberOfLines={2}>
              {trim(item.description, 85)}
            </Text>
            <TouchableOpacity
              style={styles.link}
              onPress={() => Linking.openURL(item.url)}
              testID="button">
              <Text style={styles.linkText}>Read On</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }, [item, index]);

  return CarouselItemComponent;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    marginTop: '5%',
    marginBottom: '5%',
    alignSelf: 'center',
    flexDirection: 'column',
    borderRadius: 15,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    borderRadius: 15,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  imageStyle: {
    borderRadius: 15,
  },
  textView: {
    flex: 1,
    height: '45%',
    marginTop: '-52%',
    backgroundColor: 'rgba(187,225,250,0.88)',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  text: {
    color: '#0f4c75',
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '1%',
    marginBottom: '2%',
    marginHorizontal: '3%',
  },
  description: {
    color: '#0f4c75',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
    fontStyle: 'italic',
    textAlign: 'center',
    marginHorizontal: '3%',
  },
  link: {
    opacity: 1.5,
    position: 'absolute',
    bottom: '5%',
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#0f4c75',
    marginHorizontal: '1%',
    alignSelf: 'center',
  },
  linkText: {
    color: '#bbe1fa',
    padding: '3%',
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'bold',
  },
});

export default React.memo(CarouselItem);
