


var _react=require('react');var _react2=_interopRequireDefault(_react);
var _ColorPropType=require('../propTypes/ColorPropType');var _ColorPropType2=_interopRequireDefault(_ColorPropType);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/StatusBar/StatusBar.js
 */
var _backgroundColor='';
var _barStyle={};
var _hidden=false;
var _networkActivityIndicatorVisible=false;
var _translucent=false;

var StatusBar=_react2.default.createClass({displayName:'StatusBar',
propTypes:{
animated:_react2.default.PropTypes.bool,
barStyle:_react2.default.PropTypes.oneOf(['default','light-content']),
backgroundColor:_ColorPropType2.default,
hidden:_react2.default.PropTypes.bool,
networkActivityIndicatorVisible:_react2.default.PropTypes.bool,
showHideTransition:_react2.default.PropTypes.oneOf(['fade','slide']),
translucent:_react2.default.PropTypes.bool},


statics:{
setBackgroundColor:function setBackgroundColor(backgroundColor,animated){
_backgroundColor=backgroundColor;
},

setBarStyle:function setBarStyle(barStyle,animated){
_barStyle=barStyle;
},

setHidden:function setHidden(hidden,animated){
_hidden=hidden;
},

setNetworkActivityIndicatorVisible:function setNetworkActivityIndicatorVisible(visible){
_networkActivityIndicatorVisible=visible;
},

setTranslucent:function setTranslucent(translucent){
_translucent=translucent;
},

__getBackgroundColor:function __getBackgroundColor(){
return _backgroundColor;
},

__getBarStyle:function __getBarStyle(){
return _barStyle;
},

__getHidden:function __getHidden(){
return _hidden;
},

__getNetworkActivityIndicatorVisible:function __getNetworkActivityIndicatorVisible(){
return _networkActivityIndicatorVisible;
},

__getTranslucent:function __getTranslucent(){
return _translucent;
}},


render:function render(){
return null;
}});


module.exports=StatusBar;