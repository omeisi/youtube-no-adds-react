import _ from 'lodash';
import React, { Component } from 'react';
import YTsearch from 'youtube-api-search';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDitail from './components/video_ditail';


const API_KEY = 'AIzaSyBKSYbOb53iKtCxjhvf2YKQ9xvNZbKcuLY';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTsearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDitail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
