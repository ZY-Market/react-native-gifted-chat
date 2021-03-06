/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Color from './Color';

export default function Send({ text, containerStyle, onSend, children, textStyle, label }) {
  let sendStyle = (text.trim().length > 0) ? styles.text : textStyle;
  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={() => {
        onSend({ text: text.trim() }, true);
      }}
      accessibilityTraits="button"
    >
      <View>{children || <Text style={sendStyle}>{label}</Text>}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    justifyContent: 'flex-end',
  },
  text: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 15,
    backgroundColor: Color.backgroundTransparent,
    marginLeft: 10,
    marginRight: 10,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
  children: null,
  alwaysShowSend: false,
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.element,
  alwaysShowSend: PropTypes.bool,
};
