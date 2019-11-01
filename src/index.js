import avatar from './avatar.png';		
import './index.css'
import './test.css'

var img = new Image();
img.src = avatar;
img.classList.add('avatar');

var img2 = new Image();
img2.src = avatar;
img2.classList.add('test');


var root = document.getElementById('root');
root.append(img);
root.append(img2);





