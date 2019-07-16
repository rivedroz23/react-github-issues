import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';

function Issue(props) {
  return (
  <div className="issues">
        {props.issues.map((issue, i) => (
        <Link to={`/issues/${issue.number}`}>
            <h4 key={i}>{issue.title}</h4>
            <p>#{issue.number}</p>
            </Link>

        ))
        }
      
  </div>
  
  );
   
}

export {Issue as default};