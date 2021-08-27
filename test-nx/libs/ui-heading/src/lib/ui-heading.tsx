
import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export interface UiHeadingProps {
  text: string;
  onPress: () => void
}

export const UiHeading = (props: UiHeadingProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { paddingTop: 5, paddingBottom: 10 },
  text: { fontSize: 24, fontWeight: '500', color: 'blue' },
});

export default UiHeading;
