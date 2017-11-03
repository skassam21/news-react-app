import React, { Component } from 'react';

class FeedPage extends Component {

  //var htmlForPage = "";

  constructor(props) {
    super(props)
    this.getStarted = () => this._getStarted();
    console.log(this.props["articles"][0]["description"]);
    var i = 0;
    for ( i =0; i < 3; i++)
    {
      //this.htmlForPage = React.render("<div>success</div>",document.getElementById('root'))
    }
  }

  _getStarted() {
    this.props.changePage('firstQuestion');
  }




  render() {
    return (

      <div id="page" className="hfeed site site-container">
    <div className="site-pusher">
      <section className="lifesection">
        <div className="gridcontainer">
              <input type="search" className="search-input" placeholder="Search Your Life Style" value="" name="s"  title="Search for:"></input>
              <input type="submit" id="srch-btn-go" className="btn btn-peach searchbox-submit" value="GO" name="sa"></input>
              <div className="searchbtn"><i className="fa fa-search" aria-hidden="true"></i></div>
          <ul id="lifegrid">
            <li className="col-md-4 col-xs-12 life-content oddpost show">
            <div className="lifeimgcont">
              <a href="#"><img src={this.props["articles"][0]["urlToImage"]} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" sizes="(max-width: 510px) 100vw, 510px"></img> </a>
              <div className="eventdate"> <strong>15</strong> May </div>
            </div>
            <h4 className="evntheader"><a href="#"> {this.props["articles"][0]["title"]} </a></h4>
            <article id="post-316" className="post-316 post type-post status-publish format-standard has-post-thumbnail hentry category-health category-inspiration tag-fitness tag-health tag-workout tag-workout-tip">
              <div className="entry-content">
                <p>{this.props["articles"][0]["description"]}</p>
              </div>
            </article>
            <div className=""> <a href="#" target="_blank" className="fb-share"><i className="fa fa-facebook" aria-hidden="true"></i></a> <a href="#" target="_blank" className="fb-share"><i className="fa fa-twitter" aria-hidden="true"></i></a> </div>

            </li>
            <li className="col-md-4 col-xs-12 life-content oddpost show">
            <div className="lifeimgcont">
              <a href="#"><img src={this.props["articles"][0]["urlToImage"]} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" sizes="(max-width: 510px) 100vw, 510px"></img> </a>
              <div className="eventdate"> <strong>15</strong> May </div>
            </div>
            <h4 className="evntheader"><a href="#"> {this.props["articles"][0]["title"]} </a></h4>
            <article id="post-316" className="post-316 post type-post status-publish format-standard has-post-thumbnail hentry category-health category-inspiration tag-fitness tag-health tag-workout tag-workout-tip">
              <div className="entry-content">
                <p>{this.props["articles"][0]["description"]}</p>
              </div>
            </article>
            <div className=""> <a href="#" target="_blank" className="fb-share"><i className="fa fa-facebook" aria-hidden="true"></i></a> <a href="#" target="_blank" className="fb-share"><i className="fa fa-twitter" aria-hidden="true"></i></a> </div>

            </li>
          </ul>
          <div className="clearfix"></div>
          <div className="paging">
           <a href="" className="paging-button com-btn">></a> </div>
        </div>
      </section>
    </div>
  </div>
    )
  }
}

export default FeedPage;
