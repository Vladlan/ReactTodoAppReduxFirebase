var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass ({
    getInitialState: function () {
        debugger;
      return {
          count: 0,
          countdownStatus: 'stopped',
          place: 'Countdown.jsx'
      };
    },
    componentDidUpdate: function (prevProps, prevState) {
        console.log('componentDidUpdate');
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('componentWillUpdate');
    },
    componentWillMount: function () {
      console.log('componentWillMount');
    },
    componentDidMount: function () {
      console.log('componentDidMount')
    },
    componentWillUnmount: function () {
      console.log('componentDidUnmount');
        clearInterval(this.timer);
        this.timer = undefined;
    },
    startTimer: function () {
      this.timer = setInterval(() => {
          var newCount = this.state.count - 1;
          debugger;
          this.setState({
              count: newCount >= 0 ? newCount : 0
          });
          if (newCount === 0) {
              this.setState({
                  countdownStatus: 'stopped'
              });
          };
      }, 1000);
    },
    handleSetCountdown: function (seconds) {
       this.setState({
           count: seconds,
           countdownStatus: 'started'
       });
    },
    handleStatusChange: function (status) {
       this.setState({countdownStatus: status});
    },
    render: function () {
        var {count, countdownStatus, place} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} place={place}/>
            }
            else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        };
        return (
            <div>
                <p>Countdown</p>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});
module.exports = Countdown;