import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (
    (dispatch) => {
      var options = {
        key: YOUTUBE_API_KEY,
        query: q
      };

      searchYouTube(options, (videos) => {
        //instead of setState
        dispatch(changeVideo(videos[0]));
        dispatch(changeVideoList(videos));
        // this.setState({
        //   videos:videos,
        //   currentVideo:videos[0]
        // })

      });
    }

  );
};

export default handleVideoSearch;
