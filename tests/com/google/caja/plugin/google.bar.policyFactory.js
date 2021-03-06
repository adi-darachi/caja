// Copyright (C) 2012 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Policy factory for test api named "google.bar"; see test-apitaming.js.
 */
caja.tamingGoogleLoader.addPolicyFactory('google.bar', function(frame, utils) {

  var f = {};

  f.getValue = function() {};
  f.isCustomGoogleLoadCalled = function() {};

  return {
    value: {
      google: {
        bar: f
      }
    },
    customGoogleLoad: function(name, info) {
      window.google.bar.customGoogleLoadCalled = true;
      window.setTimeout(function() { info.callback(); }, 0);
    }
  };
});
