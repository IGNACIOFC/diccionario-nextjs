import React from "react";
import Accordion from "react-bootstrap/Accordion";
import ReactMarkdown from 'react-markdown';

const Acordeon = ({ data, category, sortedData }) => {
  function getCategories(inputObject) {
    return Object.keys(inputObject);
  }
  const categories = getCategories(sortedData);

  console.log('category data', data[categories[category]])
  return (
    <div>
        <div>
          <div className="d-flex justify-content-between mb-3">
            <h2>{categories[category]}</h2>
            <p>{data[categories[category]].length}</p>
          </div>
          {sortedData[categories[category]].length === 0 && (
            <div className="alert alert-warning" role="alert">
              No hay palabras en esta categoría
              </div>
              )
          }
          <Accordion>
            {sortedData[categories[category]].length && sortedData[categories[category]].map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{item.prompt}</Accordion.Header>
                <Accordion.Body>
                 <ReactMarkdown>{item.response}</ReactMarkdown>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
    </div>
  );
};

export default Acordeon;

