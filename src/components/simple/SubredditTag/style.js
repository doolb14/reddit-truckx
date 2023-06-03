import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: is_selected => ({
    backgroundColor: is_selected ? '#89ABE3' : '#000',
    // borderColor: 'white',
    // borderWidth: is_selected ? 0 : 1,
    borderRadius: 8,
    padding: 4,
  }),
  text: is_selected => ({
    fontWeight: is_selected ? 600 : 300,
  }),
});
export default styles;
