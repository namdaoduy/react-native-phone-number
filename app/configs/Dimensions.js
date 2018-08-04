import { Dimensions } from 'react-native'

var { height, width } = Dimensions.get('window');

var Dim = {
  height: height,
  width: width,
}

export { Dim }