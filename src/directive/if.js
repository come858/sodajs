import Sodajs from './../sodajs';

Sodajs.directive('if', {
    priority: 9,
    link: function({expression, parseSodaExpression, scope, el}){
        var expressFunc = parseSodaExpression(expression, scope);

        if(expressFunc){
        }else{
            el.parentNode && el.parentNode.removeChild(el);
        }
    }
});
