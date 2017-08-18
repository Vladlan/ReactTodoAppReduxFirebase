var React = require('react');

var Controls = React.createClass ({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired,
        place: React.PropTypes.string.isRequired
    },

    onStatusChange: function (Status) {
        return () => {
            this.props.onStatusChange(Status);
        };
    },
    componentWillReceiveProps: function (newProps) {
        console.log('componentWillReceiveProps: ' + newProps.countdownStatus);
    },
    render: function () {
        var {countdownStatus, place} = this.props;

        var renderStopStartButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
            }
            else if (countdownStatus === 'paused')
            {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
            else if (countdownStatus === 'stopped')
            {
                return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
            }
        };
        return (
            <div className="controls">
                {renderStopStartButton()}
                <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
            </div>
        );
    }
});

module.exports = Controls;