// var React = require('react');
// var ReactDOM = require('react-dom');
// var expect = require('expect');
// var $ = require('jQuery');
// var TestUtils = require('react-addons-test-utils');
//
//
// var Controls = require('Controls');
//
// describe('Controls', ()=> {
//     it('should exist', () => {
//         expect(Controls).toExist();
//     });
//
//     describe('handleButtons', () => {
//         it('should render pause when countdown is started', () => {
//             var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
//             var $el = $(ReactDOM.findDOMNode(controls));
//             //search by tag value in DOM
//             var $pauseButton = $el.find('button:contains(Pause)');
//
//             expect($pauseButton.length).toBe(1);
//         });
//         it('should render start when countdown is paused', () => {
//             var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
//             var $el = $(ReactDOM.findDOMNode(controls));
//             //search by tag value in DOM
//             var $startButton = $el.find('button:contains(Start)');
//
//             expect($startButton.length).toBe(1);
//         });
//
//     });
//
// });