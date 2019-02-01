/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var Lib = require('../../lib');
var barDefaults = require('../bar/defaults');
var attributes = require('./attributes');

module.exports = function supplyDefaults(traceIn, traceOut, defaultColor, layout) {

    barDefaults(traceIn, traceOut, defaultColor, layout);

    function coerce(attr, dflt) {
        return Lib.coerce(traceIn, traceOut, attributes, attr, dflt);
    }

    coerce('report.text');
    coerce('report.after');
};
