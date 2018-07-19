import MotorCortex from "@kissmybutton/motorcortex";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics =
  Object.setPrototypeOf ||
  ({ __proto__: [] } instanceof Array &&
    function(d, b) {
      d.__proto__ = b;
    }) ||
  function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype =
    b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var __assign =
  Object.assign ||
  function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };

var anime = require("animejs");
var Anime = /** @class */ (function(_super) {
  __extends(Anime, _super);
  function Anime() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Anime.prototype.onGetContext = function() {
    var x = {};
    var z = {};
    for (var key in this.attrs.animatedAttrs) {
      if (this.channel.compoAttributes.hasOwnProperty(key)) {
        var compoAttribute = this.channel.compoAttributes[key];
        for (var i = 0; i <= compoAttribute.length; i++) {
          if (
            !this.attrs.animatedAttrs[key].hasOwnProperty(compoAttribute[i])
          ) {
            continue;
          }
          x[compoAttribute[i]] = [
            this.getInitialValue(key)[compoAttribute[i]],
            this.attrs.animatedAttrs[key][compoAttribute[i]]
          ];
          z[key] = anime.getValue(this.element, compoAttribute[i]);
        }
      } else {
        x[key] = [this.getInitialValue(key), this.attrs.animatedAttrs[key]];
        z[key] = anime.getValue(this.element, key);
      }
    }
    this.target = anime(
      __assign(
        {
          autoplay: false,
          duration: this.props.duration,
          easing: "linear",
          targets: this.element
        },
        (this.attrs || {}).attrs || {},
        x
      )
    );
    anime(__assign({ duration: 0, targets: this.element }, z));
  };
  Anime.prototype.getScratchValue = function(id, attr) {
    if (this.channel.compoAttributes.hasOwnProperty(attr)) {
      var obj = {};
      var compoAttribute = this.channel.compoAttributes[attr];
      for (var i = 0; i <= compoAttribute.length; i++) {
        obj[compoAttribute[i]] = anime.getValue(
          this.element,
          compoAttribute[i]
        );
      }
      return obj;
    }
    return anime.getValue(this.element, attr);
  };
  Anime.prototype.onProgress = function(t) {
    return this.target.seek(this.target.duration * t);
  };
  return Anime;
})(MotorCortex.TimedIncident);

var Channel = /** @class */ (function(_super) {
  __extends(Channel, _super);
  function Channel() {
    var _this = _super.call(this) || this;
    _this.compoAttributes = {
      transform: [
        "translateX",
        "translateY",
        "translateZ",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "scale",
        "scaleX",
        "scaleY",
        "scaleZ",
        "skewX",
        "skewY",
        "perspective"
      ]
    };
    return _this;
  }
  return Channel;
})(MotorCortex.AttributeChannel);

var schemaGuard = {
  npm_name: "@kissmybutton/motorcortex-anime",
  incidents: [
    {
      exportable: Anime
    }
  ],
  channel: Channel
};

export default schemaGuard;
