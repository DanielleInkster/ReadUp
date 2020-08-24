import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import withObservables from '@nozbe/with-observables';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const ArticleView = ({article}) => {
  return (
    <TouchableOpacity style={styles.articleItem}>
      <View style={styles.articleItemView}>
        <Text style={styles.text}>
          {article.title.substring(0, 30).trim()}...
        </Text>
        <Icon
          testID="removeArticle"
          name="remove"
          size={20}
          color="firebrick"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  articleItem: {
    padding: 15,
    backgroundColor: '#bbe1fa',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  articleItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#1b262c',
    fontSize: 18,
  },
});

export default ArticleView;
