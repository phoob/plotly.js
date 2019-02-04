/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var barAttrs = require('../bar/attributes');

module.exports = {

    x: barAttrs.x,
    x0: barAttrs.x0,
    dx: barAttrs.dx,
    y: barAttrs.y,
    y0: barAttrs.y0,
    dy: barAttrs.dy,

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
    marker: barAttrs.marker,

    selected: barAttrs.selected,
    unselected: barAttrs.unselected,

    r: barAttrs.r,
    t: barAttrs.t,

    _deprecated: barAttrs._deprecated,

    falls: {
        editType: 'calc',

        after: {
            valType: 'data_array',
            dflt: [],
            role: 'info',
            editType: 'calc',
            description: [
                'Specifies the indices of horizontal or vertical slices',
                'on the axis depending on `orientation`.'
            ].join(' ')
        },
        text: {
            valType: 'string',
            dflt: 'sum',
            arrayOk: true,
            role: 'info',
            editType: 'calc',
            description: [
                'Sets text elements associated with all/each `fall`',
                'If a single string, the same string appears over',
                'all the data points.',
                'If an array of string, the items are mapped in order to the',
                'this trace\'s `fall` indices.'
            ].join(' ')
        }
    }
};
