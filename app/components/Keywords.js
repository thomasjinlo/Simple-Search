var React = require('react');
var styles = require('../styles');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Keywords (props) {
  return <div>
            <div style={styles.keywordsContainer} className="row">
              {props.keywords.map((keyword) => {
                return <div  className="col-md-3">
                    <div style={styles.summaryContainer}>
                      <h1>{keyword['keyword']}</h1>
                      {keyword['summary']}
                    </div>
                  </div>
              })}
            </div>
         </div>
}

module.exports = Keywords;
