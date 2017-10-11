/**
 * ProIn.WebApi
 * This is a ProIn data access WebApi
 *
 * OpenAPI spec version: 1.0.0
 * Contact: zwq00000@hotmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProinApi);
  }
}(this, function(expect, ProinApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProinApi.MeasureRecord();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('MeasureRecord', function() {
    it('should create an instance of MeasureRecord', function() {
      // uncomment below and update the code to test MeasureRecord
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be.a(ProinApi.MeasureRecord);
    });

    it('should have the property sessionId (base name: "SessionId")', function() {
      // uncomment below and update the code to test the property sessionId
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

    it('should have the property specId (base name: "SpecId")', function() {
      // uncomment below and update the code to test the property specId
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

    it('should have the property time (base name: "Time")', function() {
      // uncomment below and update the code to test the property time
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

    it('should have the property count (base name: "Count")', function() {
      // uncomment below and update the code to test the property count
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

    it('should have the property stdev (base name: "Stdev")', function() {
      // uncomment below and update the code to test the property stdev
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

    it('should have the property mean (base name: "Mean")', function() {
      // uncomment below and update the code to test the property mean
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

    it('should have the property range (base name: "Range")', function() {
      // uncomment below and update the code to test the property range
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "Values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new ProinApi.MeasureRecord();
      //expect(instance).to.be();
    });

  });

}));