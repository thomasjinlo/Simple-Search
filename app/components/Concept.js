var React = require('react');
var ConceptTypes = require('./ConceptTypes')

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Concept (props) {
  return props.isLoading === true
    ? <div><h1>Currently Loading</h1></div>
    : <ConceptTypes
        concepts={props.concepts}
        onClickType={props.onClickType}
        keywords={props.keywords} />
}

module.exports = Concept;
