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
    instance = new ProinApi.WorkpieceApi();
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

  describe('WorkpieceApi', function() {
    describe('createWorkpiece', function() {
      it('should call createWorkpiece successfully', function(done) {
        //uncomment below and update the code to test createWorkpiece
        //instance.createWorkpiece(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteWorkpiece', function() {
      it('should call deleteWorkpiece successfully', function(done) {
        //uncomment below and update the code to test deleteWorkpiece
        //instance.deleteWorkpiece(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getWorkpiece', function() {
      it('should call getWorkpiece successfully', function(done) {
        //uncomment below and update the code to test getWorkpiece
        instance.getWorkpiece(function(error) {
          if (error) throw error;
          expect().to.be();
        });
        done();
      });
    });
    describe('getWorkpieces', function() {
      it('should call getWorkpieces successfully', function(done) {
        //uncomment below and update the code to test getWorkpieces
        //instance.getWorkpieces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateWorkpiece', function() {
      it('should call updateWorkpiece successfully', function(done) {
        //uncomment below and update the code to test updateWorkpiece
        //instance.updateWorkpiece(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));