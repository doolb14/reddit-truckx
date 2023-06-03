import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: is_selected => ({
    backgroundColor: is_selected ? '#EA738D' : '#000',
    borderRadius: 8,
    padding: 6,
  }),
  text: is_selected => ({
    fontWeight: is_selected ? 600 : 300,
  }),
});
export default styles;
