import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

class App extends React.Component {

  state = { videos: [],
            selectedVideo: null
          };

  componentDidMount() {

    console.log("in mount: ", process.env.REACT_APP_DEFAULT_SEARCH);
    this.onSearchSubmit(process.env.REACT_APP_DEFAULT_SEARCH);
  }

  onSearchSubmit = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchTerm
      }
    });
    this.setState({
      videos:response.data.items,
      selectedVideo: response.data.items[0] // set Default selected video
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container">

        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <div className="search-bar">
              <SearchBar onSearchSubmit={this.onSearchSubmit}/>
              </div>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column right-side">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
