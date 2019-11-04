import _ from 'lodash';
import jquery from 'jquery';


var element = document.createElement('div');
element.innerHTML = _.join(['cyan', 'baby'], '-');
document.body.appendChild(element);
