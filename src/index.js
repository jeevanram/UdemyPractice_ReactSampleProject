//Import react to JS file
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash'

//Import Component
import SearchBar from './component/search'
import VideoList from './component/videoList'
import VideoDetail from './component/video_detail'

//Import Youtube APIs 
import YTSearch from 'youtube-api-search'

const API_KEY='AIzaSyD9flbk08vmJMySJXgk2D-N85NATtxlPqo';

//component to produce some HTML
/*
const App = () =>
{
	return <div>
	<SearchBar />
	<VideoList />
	</div>;
}
*/

class App extends Component
{
	constructor(props)
	{
		super(props);
		
		this.state = { 
		videos : [],
		selectedVideo : null};
		
		this.videoSearch('Sai Baba');
	}
	
	videoSearch(searchVideo) {
		YTSearch({key:API_KEY,term:searchVideo},(videos) => {
			this.setState({
				videos : videos,
				selectedVideo : videos[0]
				});
			//this.setstate(){videos = videos});
		});
		
	}
	render()
	{
		const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
			return (<div>
			<SearchBar onSearchChange={searchVideo => videoSearch(searchVideo)} />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
			onVideoSelect={selectedVideo => this.setState({selectedVideo})}
			videos={this.state.videos}
			/>
			</div>);
	}
}

//Use the HTML from component and put it on the page DOM

/* passing component class App to RenderDOM.Render is wrong, instead pass the instance 
ReactDOM.render(App);
*/

/* <App /> is component instance but now a target DOM container is not mentioned 
ReactDOM.render(<App />);
*/

ReactDOM.render(<App />,document.querySelector('.container'));