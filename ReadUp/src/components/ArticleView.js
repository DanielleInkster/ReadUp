import React, {useMemo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const ArticleView = ({article, deleteEntry}) => {
  const ArticleViewComponent = useMemo(() => {
    return (
      <TouchableOpacity style={styles.articleItem} testID="listItem">
        <View style={styles.articleItemView}>
          <Text style={styles.text}>
            {article.title.substring(0, 30).trim()}...
          </Text>
          <Icon
            name="remove"
            style={styles.icon}
            onPress={() => deleteEntry(article)}
            testID="removeArticle"
          />
        </View>
      </TouchableOpacity>
    );
  }, [article, deleteEntry]);

  return ArticleViewComponent;
};

const styles = StyleSheet.create({
  articleItem: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#bbe1fa',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: '3%',
    marginHorizontal: '2%',
  },
  articleItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#1b262c',
    fontSize: 18,
    fontFamily: 'sans-serif-medium',
  },
  icon: {
    fontSize: 25,
    color: 'firebrick',
  },
});

export default React.memo(ArticleView);
