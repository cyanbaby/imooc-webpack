import $ from 'jquery';
import _ from 'lodash';
import { ui } from './jquery.ui';

ui();

 const dom = $('<div>');
 dom.html(_.join(['cyan', 'baby'], ' - '))
 $('body').append(dom);



 /*

jquery.ui使用了$ 而本身没有引入, 是不行滴 
    如果jquery.ui是别人的库咋办呢？难道去改源码？
    用webpack.ProvidePlugin
*/