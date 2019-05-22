import React from 'react';

const ApprovalCardCss = {
  marginTop: '50px',
  boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.25)',
  borderRadius: '6px',
  maxWidth: '400px'
}

const contentCss = {
  padding: '20px',
  fontSize: '16px',
}

const greenButtonCss = {
  padding: '10px 15px',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  background: '#4CAF50',
  cursor: 'pointer',
  margin: '20px 10px 20px 20px',
  fontSize: '14px',
}

const redButtonCss = {
  padding: '10px 15px',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  background: '#F44336',
  cursor: 'pointer',
  margin: '20px 20px 20px 10px',
  fontSize: '14px',
}


const ApprovalCard = (props) => {
  console.log(props.children);
  return (
    <div className="ApprovalCard" style={ApprovalCardCss}>
      <div className ="content" style={contentCss}>
        {props.children}
      </div>
      <div className="buttonRow">
        <button style={greenButtonCss}>Approve</button>
        <button style={redButtonCss}>Reject</button>
      </div>
    </div>
  )
};


export default ApprovalCard;
