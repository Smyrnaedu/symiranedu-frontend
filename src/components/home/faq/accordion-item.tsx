import React from "react";
import { Accordion } from "react-bootstrap";

interface ListItem {
  "li-text": string;
}

interface AccordionItemProps {
  eventKey: string;
  title: string;
  description: string;
  list?: ListItem[]; // Liste opsiyonel olabilir

}

const AccordionItem: React.FC<AccordionItemProps> = ({ eventKey, title, description, list }) => {
  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header >{title}</Accordion.Header>
      <Accordion.Body>
        <p>{description}</p>
        {list && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item["li-text"]}</li>
            ))}
          </ul>
        )}
        
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;
