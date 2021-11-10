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

    this.filterPlays=this.filterPlays.bind(this);
    this.filterAll=this.filterAll.bind(this);
    this.clearFilter=this.clearFilter.bind(this);

    this.addToFavs=this.addToFavs.bind(this);
    this.getFavList=this.getFavList.bind(this);
    this.isFav=this.isFav.bind(this);
    this.removeFromFavs=this.removeFromFavs.bind(this);
    this.getFavFunctions=this.getFavFunctions.bind(this);
  }

  // PLAY LIST & FILTER FUNCTIONS

  filterPlays(key, value) {

    let new_filtered_plays = [...this.state.plays];

    if (key === "title") {
      this.setState({title_filter: value})
      new_filtered_plays = new_filtered_plays.filter(p => p.title.toUpperCase().includes(value.toUpperCase()));
      new_filtered_plays = this.filterAll("title", new_filtered_plays);
    }

    if (key === "start" && Number(value)) {
      this.setState({date_start_filter: Number(value)})
      
      new_filtered_plays = new_filtered_plays.filter(p => p.likelyDate >= Number(value));
      new_filtered_plays = this.filterAll("start", new_filtered_plays);
    }

    if (key === "end" && Number(value)) {
      this.setState({date_end_filter: Number(value)})
      
      new_filtered_plays = new_filtered_plays.filter(p => p.likelyDate <= Number(value));
      new_filtered_plays = this.filterAll("end", new_filtered_plays);
    }

    if (key === "genre") {
      this.setState({genre_filter: value})
      new_filtered_plays = new_filtered_plays.filter(p => p.genre.toUpperCase().includes(value.toUpperCase()));
      new_filtered_plays = this.filterAll("genre", new_filtered_plays);
    }
    
    this.setState({filtered_plays: new_filtered_plays})
  }

  // filters all according to the state, except for the excluded key
  // this gets around a bug where filtering everything at once based on state would
  // make the filter lag behind by one step...
  filterAll(exclude, plays_init) {
    let new_plays = [...plays_init]

    if (exclude !== "title" && this.state.title_filter && this.state.title_filter !== "") {
      new_plays = new_plays.filter(p => p.title.toUpperCase().includes(this.state.title_filter.toUpperCase()));
    }

    if (exclude !== "start" && this.state.date_start_filter && Number(this.state.date_start_filter)) {
      new_plays = new_plays.filter(p => p.likelyDate >= this.state.date_start_filter);
    }

    if (exclude !== "end" && this.state.date_end_filter && Number(this.state.date_end_filter)) {
      new_plays = new_plays.filter(p => p.likelyDate <= this.state.date_end_filter);
    }

    if (exclude !== "genre" && this.state.genre_filter && this.state.genre_filter !== "") {
      new_plays = new_plays.filter(p => p.genre.toUpperCase().includes(this.state.genre_filter.toUpperCase()));
    }

    return new_plays;
  }

  clearFilter() {
    let new_filtered_plays = [...this.state.plays];

    this.setState({
      filtered_plays: new_filtered_plays,
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
      let new_filtered_plays = [...data];
      this.setState({filtered_plays: new_filtered_plays})
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
          <Route path="/comp4513-a1" element={
            <Home loading={this.state.loading} 
              filterPlays={this.filterPlays} 
              clearFilter={this.clearFilter} 
              title={this.state.title_filter}/>}/>
          <Route path="/comp4513-a1/browse" element={
            <PlayBrowser plays={this.state.filtered_plays} 
              getFavFunctions={this.getFavFunctions} 
              filterPlays={this.filterPlays} 
              clearFilter={this.clearFilter} 
              title={this.state.title_filter}/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
