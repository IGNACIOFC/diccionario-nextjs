import transformArray from "@/utils/transformArray";
import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const Acordeon = ({data}) => {

  const dataFormat = transformArray(data)
  console.log(dataFormat)
  return (
    <Accordion>
      {dataFormat.map((item, index) => (
        <Accordion.Item key={index} eventKey={index.toString()}>
          <Accordion.Header>{item.prompt}</Accordion.Header>
          <Accordion.Body>{item.response}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Acordeon;
