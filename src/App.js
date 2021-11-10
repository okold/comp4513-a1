import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PlayBrowser from './components/PlayBrowser.js';
import Home from './components/Home.js';

import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: [], 
      loading: true, 
      favs: [], 
      filtered_plays: [],
      title_filter: null,
      date_start_filter: null,
      date_end_filter: null,
      genre_filter: null
    };

    this.isLoading=this.isLoading.bind(this);
    this.getPlayList=this.getPlayList.bind(this);
    this.filterPlays=this.filterPlays.bind(this);
    this.clearFilter=this.clearFilter.bind(this);

    this.addToFavs=this.addToFavs.bind(this);
    this.getFavList=this.getFavList.bind(this);
    this.isFav=this.isFav.bind(this);
    this.removeFromFavs=this.removeFromFavs.bind(this);
    this.getFavFunctions=this.getFavFunctions.bind(this);
  }

  isLoading() {
    if (this.state.loading) { // do this for safety?
      return true;
    }
    return false;
  }

  // PLAY LIST & FILTER FUNCTIONS
  getPlayList() {
    if (this.state.filtered_plays.length > 0)
      return this.state.filtered_plays;
    
    return this.state.plays;
  }

  filterPlays(key, value) {

    if (key === "title")
      this.setState({title_filter: value})
    else if (key === "date_start")
      this.setState({date_start_filter: value})
    else if (key === "date_end")
      this.setState({date_end_filter: value})
    else if (key === "genre")
      this.setState({genre_filter: value})

    let new_filtered_plays = [...this.state.plays];
    
    if (this.state.title_filter) 
      new_filtered_plays = new_filtered_plays.filter(p => p.title.toUpperCase().includes(this.state.title_filter.toUpperCase()));

    if (this.state.date_start_filter) 
      new_filtered_plays = new_filtered_plays.filter(p => p.likelyDate >= this.state.date_start_filter);

    if (this.state.date_end_filter) 
      new_filtered_plays = new_filtered_plays.filter(p => p.likelyDate <= this.state.date_end_filter);

    if (this.state.genre_filter) 
      new_filtered_plays = new_filtered_plays.filter(p => p.genre === this.state.genre_filter);
    
    this.setState({filtered_plays: new_filtered_plays})
  }

  clearFilter() {
    this.setState({
      filtered_plays: [],
      title_filter: null,
      date_start_filter: null,
      date_end_filter: null,
      genre_filter: null});
  }

  // FAVOURITES FUNCTIONS
  getFavList() {
    return this.state.favs;
  }

  isFav(play) {
    return this.state.favs.includes(play);
  }
  
  addToFavs(play) {
      if (!this.isFav(play)) {
      let new_favs = [...this.state.favs];
      new_favs.push(play); 
      this.setState({favs: new_favs});
    }
  }

  removeFromFavs(play) {
    if (this.isFav(play)) {
      let new_favs = [...this.state.favs];
      new_favs = new_favs.filter(p => p.id !== play.id); 
      this.setState({favs: new_favs});
    }
  }

  getFavFunctions() {
    return { 
      addToFavs: this.addToFavs, 
      getFavList: this.getFavList, 
      isFav: this.isFav,
      removeFromFavs: this.removeFromFavs }
  }

  async componentDidMount() {
    try {
      let data = localStorage.getItem("shakespeare_data");
      if (data) {
        data = JSON.parse(data);
      }
      else {
        const response = await fetch("https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php");
        data = await response.json();
        data.sort((a, b) => b.title - a.title);
        localStorage.setItem("shakespeare_data", JSON.stringify(data));
      }
      this.setState({plays: data});
      this.setState({loading: false});
    }
    catch {
      console.error("Oh God");
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/comp4513-a1" element={<Home isLoading={this.isLoading} filterPlays={this.filterPlays} clearFilter={this.clearFilter} title={this.state.title_filter}/>}/>
          <Route path="/comp4513-a1/browse" element={<PlayBrowser getPlayList={this.getPlayList} getFavFunctions={this.getFavFunctions} filterPlays={this.filterPlays} clearFilter={this.clearFilter} title={this.state.title_filter}/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
