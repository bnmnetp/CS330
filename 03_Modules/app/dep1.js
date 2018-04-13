// app/dep-1.js
export {dep1}
import {dep2} from './dep2.js';

function dep1() {
  return dep2();
}
