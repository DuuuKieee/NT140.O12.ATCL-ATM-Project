import React, { useState } from 'react';

const PrettyDebug = ({ data }) => {
  const [show, setShow] = useState(true);

  const style = {
    backgroundColor: '#1f4662',
    color: '#fff',
    fontSize: '12px',
  };

  const headerStyle = {
    backgroundColor: '#193549',
    padding: '5px 10px',
    fontFamily: 'monospace',
    color: '#ffc600',
  };

  const preStyle = {
    display: 'block',
    padding: '10px 30px',
    margin: '0',
    overflow: 'scroll',
  };

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div style={style}>
      <div style={headerStyle} onClick={toggle}>
        <strong>Response API</strong>
      </div>
      {show && (
        <pre style={preStyle}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default PrettyDebug;