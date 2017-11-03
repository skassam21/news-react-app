import React, { Component } from 'react';
import LandingPage from './../LandingPage/LandingPage';
import FirstQuestion from './../Questions/Questions';
import FeedPage from './../Feed/FeedPage';
import Api from './../../api';
import s from './App.scss';

const ARTICLES = [

{
  author: "Khaled Tito Hamze",
  title: "Crunch Report",
  description: "Your daily roundup of the biggest TechCrunch stories and startup news.",
  url: "https://techcrunch.com/video/crunchreport/",
  urlToImage: "https://tctechcrunch2011.files.wordpress.com/2015/03/tccrshowogo.jpg?w=500&h=200&crop=1",
  publishedAt: "2017-10-30T20:00:57Z",
  source: {
    "id": "abc-news-au",
    "name": "ABC News (AU)",
    "description": "Australia's most trusted source of local, national and world news. Comprehensive, independent, in-depth analysis, the latest business, sport, weather and more.",
    "url": "http://www.abc.net.au/news",
    "category": "general",
    "language": "en",
    "country": "au",
    "urlsToLogos": {
    "small": "",
    "medium": "",
    "large": ""
},
"sortBysAvailable": [
"top"
]
}
},
{
author: "Rachel Kaser",
title: "Apple’s iOS 11.1 update brings amazing emoji and is available now",
description: "iOS 11.1, the latest iOS update, is out today for everyone to download. Front and center in its release notes is a plethora of new emoji. Included in those are a few new emoji that ...",
url: "https://thenextweb.com/apple/2017/10/31/apples-latest-emoji-include-vampires-fairies-mermaids/",
urlToImage: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/10/Emoji-iOS-11.1-social.jpg",
publishedAt: "2017-10-31T22:33:54Z"
},
{
author: "Shimon Prokupecz, Eric Levenson, Brynn Gingras and Ray Sanchez, CNN",
title: "Truck attack in Manhattan kills 8 in 'act of terror'",
description: "The driver of a rental truck drove down a busy bicycle path in New York near the World Trade Center, killing eight people and injuring about a dozen others in what officials said was an \"act of terror.\"",
url: "http://www.cnn.com/2017/10/31/us/new-york-shots-fired/index.html",
urlToImage: "http://cdn.cnn.com/cnnnext/dam/assets/171031154321-01-manhatten-shooting-1031-screengrab-super-tease.jpg",
publishedAt: "2017-11-01T00:11:46Z"
}]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'feed',
      articles: ARTICLES,
      sources: []
    }

    this.changePage = (newPage) => this._changePage(newPage);
  }

  _changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  render() {
    let pageView = null;

    if (this.state.page === 'landingPage') {
      pageView = <LandingPage changePage={this.changePage} />;
    } else if (this.state.page === 'firstQuestion') {
      pageView = <FirstQuestion />;
    } else if (this.state.page === 'feed') {
      pageView = <FeedPage articles={this.state.articles}
        changePage={this.changePage}/>;
    }

    let styles = {
      textAlign: 'center',
      paddingTop: '200px'
    }

    return (
      <div className="intro-page container" style={styles}>
        {pageView}
      </div>
    )
  }
}

export default App;
