import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchTweets, setTweetsToStore } from '../actions/TweetsActions';
import Tweets from '../components/Tweets/Tweets';

const mapStateToProps = ({ tweetsReducer }) => ({
    tweets: tweetsReducer.tweets || [],
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        searchTweets,
        setTweetsToStore,
    }, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tweets);