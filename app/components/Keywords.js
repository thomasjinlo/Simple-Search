var React = require('react');
var styles = require('../styles');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Keywords (props) {
  return <div>
            <div style={styles.keywordsContainer} className="row">
              {props.keywords.map((keyword) => {
                return <div className="col-md-3">
                         <div style={styles.titleContainer}>
                           <h1 style={styles.keywordTitle} className="text-center">{keyword['keyword']}</h1>
                         </div>
                         <div style={styles.summaryContainer}>
                           {keyword['summary']}
                         </div>
                       </div>
              })}
            </div>
         </div>
}

module.exports = Keywords;
