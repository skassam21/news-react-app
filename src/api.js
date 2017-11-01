const BASE_URL = "https://newsapi.org";
const SOURCE_URL= BASE_URL + "/v1/sources";
const ARTICLE_URL = BASE_URL + "/v1/articles";
const LANGUAGE = 'en';
const API_KEY = '3d926c6b3c5644219e551d2db4050ec3';



var Api = {
  getNewsSources: function(limit) {

    return new Promise((resolve, reject) => {
      $.ajax({
        url: SOURCE_URL,
        data: {
          language: LANGUAGE
        },
        success: function(result) {
          if (result.sources) {
            if (limit) {
              resolve(result.sources.slice(0, limit));
            } else {
              resolve(result.sources);
            }
					} else {
						reject({'error': 'No sources found'});
					}
        },
        error: function(err) {
          reject(err);
        }
      });
    });
  },
  getNewsArticles: function(source, sortBy, limit) {
    let params = {
      apiKey: API_KEY,
      source: source
    }
    if (sortBy) {
      params.sortBy = sortBy;
    }

    return new Promise((resolve, reject) => {
      $.ajax({
        url: ARTICLE_URL,
        data: params,
        success: function(result) {
          if (result.articles) {
              if (limit) {
                resolve(result.articles.slice(0, limit));
              } else {
                resolve(result.articles);
              }
					} else {
						reject({'error': 'No articles found'});
					}
        },
        error: function(err) {
          reject(err);
        }
      });
    });
  }
}

export default Api;
