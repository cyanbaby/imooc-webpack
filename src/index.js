import _ from 'lodash';
var element = document.createElement('div');
element.innerHTML = _.join(['cyan', 'baby'], '-');
document.body.appendChild(element);
