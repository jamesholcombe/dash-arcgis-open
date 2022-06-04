function pyStyleToCss(style: object) {
    var css = '';
    for (var key in style) {
        if (style.hasOwnProperty(key)) {
            css += key + ': ' + style[key] + '; ';
        }
    }
    return css;
}
