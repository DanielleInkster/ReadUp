import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const AddArticle = ({getData}) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput
        testID="messageText"
        placeholder="Enter URL"
        style={styles.input}
        onChangeText={onChange}
        ref={(input) => {
          this.textInput = input;
        }}
      />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.btn} onPress={() => getData(text)}>
          <Text style={styles.btnText}>
            <Icon name="plus" size={15} />
            {'  Add Article'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID="clearButton"
          style={styles.btn}
          onPress={() => this.textInput.clear()}>
          <Text style={styles.btnText}>
            <Icon name="remove" size={15} />
            {'  Clear'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#bbe1fa',
    height: 60,
    padding: 8,
    marginTop: '5%',
    marginHorizontal: 5,
    fontSize: 16,
    borderColor: '#1b262c',
    borderStyle: 'solid',
    borderWidth: 1.5,
  },

  btn: {
    backgroundColor: '#0f4c75',
    padding: 9,
    height: 40,
    width: '40%',
    marginVertical: '2%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#bbe1fa',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddArticle;
