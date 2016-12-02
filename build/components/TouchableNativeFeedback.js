var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _TouchableWithoutFeedback=require('./TouchableWithoutFeedback');var _TouchableWithoutFeedback2=_interopRequireDefault(_TouchableWithoutFeedback);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

var TouchableNativeFeedback=_react2.default.createClass({displayName:'TouchableNativeFeedback',
propTypes:_extends({},
_TouchableWithoutFeedback2.default.propTypes,{

background:_react2.default.PropTypes.object}),

statics:{
SelectableBackground:function SelectableBackground(){},
SelectableBackgroundBorderless:function SelectableBackgroundBorderless(){},
Ripple:function Ripple(color,borderless){}},

render:function render(){
return null;
}});


module.exports=TouchableNativeFeedback;