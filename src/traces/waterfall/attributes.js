/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var extendFlat = require('../../lib/extend').extendFlat;
var colorAttributes = require('../../components/colorscale/attributes');
var colorbarAttrs = require('../../components/colorbar/attributes');

var barAttrs = require('../bar/attributes');

var scatterAttrs = require('../scatter/attributes');
var scatterMarkerAttrs = scatterAttrs.marker;
var scatterMarkerLineAttrs = scatterMarkerAttrs.line;

var markerLineWidth = extendFlat({},
    scatterMarkerLineAttrs.width, { dflt: 0 });

var markerLine = extendFlat({
    width: markerLineWidth,
    editType: 'calc'
}, colorAttributes('marker.line'));

var marker = extendFlat({
    line: markerLine,
    editType: 'calc',
    shape: {
        valType: 'enumerated',
        values: ['rectangle', 'triangle'],
        dflt: 'rectangle',
        role: 'style',
        editType: 'style',
        description: [
            'Defines the shape of positive/negative bars on the plot.',
            'Namely \'triangle`\ option could be used to emphasize on',
            'the direction of the changes.'
        ].join(' ')
    }
}, colorAttributes('marker'), {
    colorbar: colorbarAttrs,
    opacity: {
        valType: 'number',
        arrayOk: true,
        dflt: 1,
        min: 0,
        max: 1,
        role: 'style',
        editType: 'style',
        description: 'Sets the opacity of the bars.'
    }
});

module.exports = {

    marker: marker,
    positiveMarker: marker,
    negativeMarker: marker,

    x: barAttrs.x,
    x0: barAttrs.x0,
    dx: barAttrs.dx,
    y: barAttrs.y,
    y0: barAttrs.y0,
    dy: barAttrs.dy,

    r: barAttrs.r,
    t: barAttrs.t,

    text: barAttrs.text,
    hovertext: barAttrs.hovertext,
    hovertemplate: barAttrs.hovertemplate,

    textposition: barAttrs.textposition,

    textfont: barAttrs.textfont,

    insidetextfont: barAttrs.insidetextfont,

    outsidetextfont: barAttrs.outsidetextfont,

    constraintext: barAttrs.constraintext,

    cliponaxis: barAttrs.cliponaxis,

    orientation: barAttrs.orientation,

    base: barAttrs.base,

    offset: barAttrs.offset,

    width: barAttrs.width,

    selected: barAttrs.selected,
    unselected: barAttrs.unselected
};
