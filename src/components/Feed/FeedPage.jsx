import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Api from './../../api';


class ArticleView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgStyle = {
      backgroundImage: 'url(' + this.props.article.urlToImage + ')',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover',
      height: '300px',
      width: '95%',
      borderRadius: '10px',
      margin: '10px auto 10px'
    }

    let overlayStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      background: 'rgba(10, 24, 41, 0.5)',
      color: 'white'
    }

    let sourceNameStyle = {
      textTransform: 'uppercase'
    }

    let textWrapperStyle = {
      position: 'absolute',
      width: '85%',
      bottom: '10px',
      textAlign: 'left',
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0'
    }

    let date
    let mydate = new Date(this.props.article.publishedAt);

    return (
      <div className="col-md-6 col-xs-12">
        <a href={this.props.article.url} target="_blank">
          <div style={imgStyle}>
            <div style={overlayStyle}>
              <div style={textWrapperStyle}>
                <h3 style={sourceNameStyle}>{this.props.article.source.name}</h3>
                <h4>{this.props.article.title}</h4>
                <h6>{this.props.article.description}</h6>
                <h6>{mydate.toDateString()}</h6>
              </div>
            </div>
          </div>
        </a>
    </div>
    )
  }
}

class SourceView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.selectedSources);
    return (
      <div className="checkbox">
        <label><input type="checkbox" value=""></input>{this.props.source.name}</label>
      </div>
    )
  }
}


class LoadingView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="spinner-wrapper">
            <div className="bubblingG">
                <span id="bubblingG_1"></span>
                <span id="bubblingG_2"></span>
                <span id="bubblingG_3"></span>
            </div>
        </div>
    )
  }
}



class FeedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      sources: [],
      selectedSources: []
    }
  }

  componentDidMount() {
    let selectedSources = this.props.sources;
    if (selectedSources.length === 0) {
      selectedSources = ['bbc-news', 'techcrunch', 'business-insider', 'google-news']
    }
    // Get the articles
    Api.getArticlesFromSources(selectedSources).then(articles => {
      if (articles.length > 0) {
        this.setState({
            articles: articles,
            selectedSources: selectedSources
        });
      } else {
        // Get the default sources
        let selectedSources = ['bbc-news', 'techcrunch', 'business-insider', 'google-news']
        Api.getArticlesFromSources(sources).then(articles => {
          this.setState({
              articles: articles,
              selectedSources: selectedSources
          });
        });
      }
    });

    // Get the sources
    Api.getNewsSources().then(sources => {
      this.setState({
        sources
      });
    });
  }



  render() {

    let view = null;

    if (this.state.articles.length > 0) {
      view = (<div className="container">
          <div className="row" style={{paddingTop: '70px'}}>
              {
                this.state.articles.map(function(article){
                  return <ArticleView key={article.title} article={article} />;
                })
              }
        </div>
      </div>)
    } else {
      view = <LoadingView />;
    }

    let onSelect = this.onSelectSource;

    return (
    <div>
      <NavBar openSettings={this.openSettings} />
      {view}
      <div id="settingsModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Manage your subscriptions</h4>
            </div>
            <div className="modal-body">
              {
                this.state.sources.map(function(source) {
                  return <SourceView key={source.id} source={source}
                    onSelectSource={onSelect} selectedSources={this.state.selectedSources} />;
                })
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>
      </div>
    )
  }
}

export default FeedPage;
