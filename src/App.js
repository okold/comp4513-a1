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
      current: null,
      single_view: false,

      loading: true, 
      favs: [], 
      filtered_plays: [],
      title_filter: null,
      date_start_filter: null,
      date_end_filter: null,
      genre_filter: null,
    };

    this.setCurrent=this.setCurrent.bind(this);
    this.closeCurrent=this.closeCurrent.bind(this);
    this.sortPlays=this.sortPlays.bind(this);

    this.filterPlays=this.filterPlays.bind(this);
    this.filterAll=this.filterAll.bind(this);
    this.clearFilter=this.clearFilter.bind(this);

    this.addToFavs=this.addToFavs.bind(this);
    this.getFavList=this.getFavList.bind(this);
    this.isFav=this.isFav.bind(this);
    this.removeFromFavs=this.removeFromFavs.bind(this);
    this.getFavFunctions=this.getFavFunctions.bind(this);
  }

  setCurrent(play) {
    this.setState({current: play, single_view: true});
  }

  closeCurrent() {
    this.setState({single_view: false});
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

	let verify = (key, filter_value, conditional) => exclude !== key && filter_value && conditional;

    if (verify("title", this.state.title_filter, (this.state.title_filter !== ""))) {
      new_plays = new_plays.filter(p => p.title.toUpperCase().includes(this.state.title_filter.toUpperCase()));
    }

    if (verify("start", this.state.date_start_filter, Number(this.state.date_start_filter))) {
      new_plays = new_plays.filter(p => p.likelyDate >= this.state.date_start_filter);
    }

    if (verify("end", this.state.date_end_filter, Number(this.state.date_end_filter))) {
      new_plays = new_plays.filter(p => p.likelyDate <= this.state.date_end_filter);
    }

    if (verify("genre", this.state.genre_filter, (this.state.genre_filter !== ""))) {
      new_plays = new_plays.filter(p => p.genre.toUpperCase().includes(this.state.genre_filter.toUpperCase()));
    }

    return new_plays;
  }

  // works with the year, not with the title. no idea why
  sortPlays(key) {
    let new_plays = [...this.state.plays];
    
    new_plays.sort((a, b) => a[key] - b[key]);
    let new_filtered_plays = this.filterAll("", new_plays);
    this.setState({plays: new_plays, filtered_plays: new_filtered_plays});
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
              title={this.state.title_filter}
              sortPlays={this.sortPlays}
              setCurrent={this.setCurrent}
              closeCurrent={this.closeCurrent}
              single_view={this.state.single_view}
              current={this.state.current}
              />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
