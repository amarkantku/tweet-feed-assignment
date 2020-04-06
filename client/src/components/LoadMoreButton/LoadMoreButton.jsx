import React, { Component } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';
import styles from './LoadMoreButton.css';

const cx = classNames.bind(styles);
const windowTime = 500;

class LoadMoreButton extends Component {
    static defaultProps = {
        btnText: 'Load More',
        id: 'btn-load-more-items',
        type: 'button',
    };

    static propTypes ={
        loadMore: PropTypes.func.isRequired,
        btnText: PropTypes.string,
        buttonType: PropTypes.string,
        automationId: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.string,
    }

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleClickThrottled = throttle(this.handleClick, windowTime);
    }

    componentWillUnmount() {
        this.handleClickThrottled.cancel();
    }
    handleClick() {
        this.props.loadMore();
    }

    render() {
        return (
            <button
                type={this.props.type}
                id={this.props.automationId}
                name={this.props.name}
                className={cx('btnDefault', 'btnLoadMore')}
                onClick={this.handleClickThrottled}>
                {this.props.btnText}
            </button>
        );
    }
}
export default LoadMoreButton;
