/*
*  TODO: add some comments to the code. Perhaps ^__^
* */

(function(){
    'use strict';

    $.ngSlickPolyfill = function () {

    $('slick').each(function(){

        if($(this).hasClass('slick-initialized')) {
            $(this).slick('unslick');
        }

        var attrsOptions = attrsObject(this),
            breakpointMax = attrsOptions.breakpointMax || 10000,
            breakpointMin = attrsOptions.breakpointMin || 0;

        if(window.innerWidth<breakpointMax && window.innerWidth>breakpointMin) {
            $(this).slick(attrsOptions);
        }

    });

    function attrsObject(element) {
        var attrs = element.attributes,
            attrsObject = {},
            i = attrs.length,
            attr, attrName, attrValue;

        while (i--)
        {
            attr = attrs[i];
            attrName = attr.name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
            if(attr.value === "true") { attrValue = true }
            else if(attr.value === "false") { attrValue = false }
            else if(!isNaN(attr.value)) { attrValue = parseInt(attr.value)}
            else if(isJson(attr.value)) { attrValue = JSON.parse(attr.value.replace(/([a-z][^:]*)(?=\s*:)/g, '"$1"'));}
            else {attrValue = attr.value}
            attrsObject[attrName] = attrValue;
        }
        return attrsObject;
    }

    function isJson(str) {
        str = str.replace(/([a-z][^:]*)(?=\s*:)/g, '"$1"');

        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }


    }

})();
