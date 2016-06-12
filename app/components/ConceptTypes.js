var React = require('react');
var styles = require('../styles');
var Keywords = require('./Keywords');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConceptTypes (props) {
  return <div>
           <div style={styles.typesWrapper}>
              {props.concepts.map((concept) => {
                return <div style={styles.types} onClick={props.onClickType.bind(this, concept.keywords)}>{concept.type}</div>
              })}
           </div>
           <Keywords
             concepts={props.concepts}
             keywords={props.keywords}  />
         </div>
}

module.exports = ConceptTypes;
