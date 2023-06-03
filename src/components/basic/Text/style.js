import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: is_dark_color_scheme => ({
    color: is_dark_color_scheme ? 'white' : 'black',
  }),
});
export default styles;
