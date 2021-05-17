import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./message.css";
const Students = () => {
  const codeBlock = `function manipulateStudentRecord(obj, operation, prop, newValue) {
  if(operation === 'delete') {
    if(obj && obj.hasOwnProperty(prop)){
      delete obj[prop]
    }
    return obj
    
  } else if(operation === 'edit') {
    if(obj && obj.hasOwnProperty(prop)){
      obj[prop] = newValue
      return obj;
    } else {
     return obj
    }
  }
}

const obj = {
  name: 'John',
  lastName: 'Bliss',
  city: 'Florida'
}

console.log(manipulateStudentRecord(obj, "edit", "city", "Seattle"))
console.log(manipulateStudentRecord(obj, "edit", "abc", "Seattle"))
console.log(manipulateStudentRecord(obj, "delete", "city", "Seattle"))
`;
  return (
    <div className="code-container">
      <SyntaxHighlighter
        className="code-block"
        language="javascript"
        style={dracula}
      >
        {codeBlock}
      </SyntaxHighlighter>
    </div>
  );
};

export default Students;
