/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';

var Axes = require('../../plots/cartesian/axes');
var hasColorscale = require('../../components/colorscale/helpers').hasColorscale;
var colorscaleCalc = require('../../components/colorscale/calc');
var arraysToCalcdata = require('./arrays_to_calcdata');
var calcSelection = require('../scatter/calc_selection');
var includes = require('../../lib').includes;

module.exports = function calc(gd, trace) {
    var xa = Axes.getFromId(gd, trace.xaxis || 'x');
    var ya = Axes.getFromId(gd, trace.yaxis || 'y');
    var size, pos, i;

    var isWaterfall = trace.type === 'waterfall';

    if(trace.orientation === 'h') {
        size = xa.makeCalcdata(trace, 'x');
        pos = ya.makeCalcdata(trace, 'y');
        if(isWaterfall) {
            ya._fallsAfter = trace.falls;
        }
    } else {
        size = ya.makeCalcdata(trace, 'y');
        pos = xa.makeCalcdata(trace, 'x');
        if(isWaterfall) {
            xa._falls = trace.falls;
        }
    }

    // create the "calculated data" to plot
    var serieslen = Math.min(pos.length, size.length);
    var cd = new Array(serieslen);

    // set position and size (as well as for waterfall total size)
    for(i = 0; i < serieslen; i++) {
        cd[i] = {
            p: pos[i],
            s: size[i]
        };

        if(isWaterfall) {
            cd[i].sum = (i === 0) ? 0 : cd[i - 1].sum + cd[i - 1].s;
        }

        if(trace.ids) {
            cd[i].id = String(trace.ids[i]);
        }
    }

    if(isWaterfall) {
        var newCD = [];
        var n = 0;
        var nFalls = 0;
        for(i = 0; i < serieslen; i++) {
            newCD[n] = {
                p: cd[i].p + nFalls,
                s: cd[i].s,
                sum: cd[i].sum,
                isFall: false
            }; n++;

            if(includes(trace.falls.after, i) !== -1) {
                nFalls++;

                newCD[n] = {
                    p: cd[i].p + nFalls,
                    s: cd[i].s,
                    sum: cd[i].sum,
                    isFall: true
                }; n++;
            }
        }
        cd = newCD;
    }

    // auto-z and autocolorscale if applicable
    if(hasColorscale(trace, 'marker')) {
        colorscaleCalc(gd, trace, {
            vals: trace.marker.color,
            containerStr: 'marker',
            cLetter: 'c'
        });
    }
    if(hasColorscale(trace, 'marker.line')) {
        colorscaleCalc(gd, trace, {
            vals: trace.marker.line.color,
            containerStr: 'marker.line',
            cLetter: 'c'
        });
    }

    arraysToCalcdata(cd, trace);
    calcSelection(cd, trace);

    return cd;
};
