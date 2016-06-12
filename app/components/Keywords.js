var React = require('react');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function Keywords (props) {
  return <div>
          {puke(props.keywords)}
         </div>
}

module.exports = Keywords;
