import React from 'react';
import {Link} from 'react-router-dom';

const IssueShow = props => {
    let issue = props.issues.find((issue) => {
      return issue.number === parseInt(props.match.params.id);
    });
    return (
    <>
        <h1>{issue.title}</h1>
        <p>#{issue.number}</p>
        <p id='state'>{issue.state}</p>
        <p>{issue.user.login}</p>
        <hr/>
        <div className="issuebody">
            <p>{issue.body}</p>
        </div>


    </>
   
    );
      }

export default IssueShow;