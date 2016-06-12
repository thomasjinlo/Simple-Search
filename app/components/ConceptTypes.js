var React = require('react');
var styles = require('../styles');
var Keywords = require('./Keywords');
var Link = require('react-router').Link;

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function toggleActiveType (active) {
  if (active) {
    return styles.activeType
  } else {
    return styles.types
  }
}

function ConceptTypes (props) {
  return <div>
           <Link to='/' style={styles.logo}>
              Simple Search
           </Link>
           <div style={styles.typesWrapper}>
              {props.concepts.map(function(concept, idx) {
                return <div style={toggleActiveType(concept.active)} onClick={props.onClickType.bind(this, concept.keywords, idx)}>{concept.type}</div>
              })}
           </div>
           <Keywords
             concepts={props.concepts}
             keywords={props.keywords} />
         </div>
}

module.exports = ConceptTypes;
