import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import AddArticle from '../src/components/AddArticle';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<AddArticle />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('AddArticle', () => {
  describe('clicking clear', () => {
    it('clears the message field', () => {
      const {getByTestId} = render(<AddArticle />);

      fireEvent.changeText(getByTestId('messageText'), 'Hello world');
      fireEvent.press(getByTestId('clearButton'));
    });
  });
});
