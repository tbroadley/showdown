/**
 * Created by Estevao on 11-01-2015.
 */

showdown.subParser('hashBlock', function (text, options, globals) {
    'use strict';
    text = text.replace(/(^\n+|\n+$)/g, '');
    return '\n\n~K' + (globals.gHtmlBlocks.push(text) - 1) + 'K\n\n';
});
