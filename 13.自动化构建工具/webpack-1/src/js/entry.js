import {foo,far} from './math';
import data from '../data/data.json';

import '../css/test.css';

document.write("entry.js is working" + "<br>");
document.write(foo(3) + "<br>");
document.write(far(3) + "<br>");
document.write(JSON.stringify(data));