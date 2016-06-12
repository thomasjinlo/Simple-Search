var React = require('react')

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Concept (props) {
  return props.isLoading === true
    ? <div><h1>Currently Loading</h1></div>
    : <div>
        {puke(props.concepts)}
      </div>
}

module.exports = Concept;
