import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

function Issue(props) {
  return (
    <div>
      <h1>100 Open Issues</h1>
      <ul> 
          {props.issues.map(issue => <li key={issue.id}>{issue.title},{issue.state}</li>)}
     </ul>
      
    </div>
  );
}

export {Issue as default};