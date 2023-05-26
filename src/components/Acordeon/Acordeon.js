import React from "react";
import Accordion from "react-bootstrap/Accordion";
import transformObject from "@/utils/transformArray";

const Acordeon = ({ data, category, sortedData }) => {
  function getCategories(inputObject) {
    return Object.keys(inputObject);
  }
  const categories = getCategories(sortedData);

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
                  {item.response.split("\n").map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
    </div>
  );
};

export default Acordeon;

