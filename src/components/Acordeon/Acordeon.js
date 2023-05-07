import React from "react";
import Accordion from "react-bootstrap/Accordion";
import transformArray from "@/utils/transformArray";

const Acordeon = ({ data, sortedData }) => {
  const dataFormat = transformArray(data);

  return (
    <Accordion>
      {sortedData.map((item, index) => (
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
  );
};

export default Acordeon;
