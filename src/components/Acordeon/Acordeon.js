import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import transformArray from "@/utils/transformArray";

const Acordeon = ({ data }) => {
  const dataFormat = transformArray(data);
  const [sortedData, setSortedData] = useState(dataFormat);
  const [isSorted, setIsSorted] = useState(false);

  const handleSort = () => {
    if (!isSorted) {
      const sorted = [...sortedData].sort((a, b) => a.prompt.localeCompare(b.prompt));
      setSortedData(sorted);
    } else {
      setSortedData(dataFormat);
    }
    setIsSorted(!isSorted);
  };

  return (
    <>
      <div className="d-flex justify-content-start mb-3">
        <Button variant="primary" onClick={handleSort}>
          {isSorted ? "Desordenar" : "Ordenar alfabéticamente"}
        </Button>
      </div>
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
    </>
  );
};

export default Acordeon;
