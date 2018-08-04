import { Dim } from './Dimensions'

var point = Dim.width * 0.04;

const Sizes = {
  XXL: Math.ceil(point),
  XL: Math.ceil(point * 0.9),
  L: Math.ceil(point * 0.8),
  M: Math.ceil(point * 0.7),
  S: Math.ceil(point * 0.6),
  XS: Math.ceil(point * 0.5),
  XXS: Math.ceil(point * 0.4),
  XXXS: Math.ceil(point * 0.3),
}

export { Sizes }