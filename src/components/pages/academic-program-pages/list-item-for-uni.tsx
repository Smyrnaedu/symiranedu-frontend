import { p } from "framer-motion/client";
import React from "react";

interface ListItemForUniProps {
  list: {
    title?: string;
    description?: string;
    uni1?: string;
    uni2?: string;
    uni3?: string;
  }[];
}

const ListItemForUni: React.FC<ListItemForUniProps> = (props) => {
  return (
    <>
      {props.list.map((item, index) => (
        <div key={index} className="ms-4">
          {item.title && <h5>{item.title}</h5>}

          {item.uni1 && <li>{item.uni1}</li>}
          {item.uni2 && <li>{item.uni2}</li>}
          {item.uni3 && <li>{item.uni3}</li>}
          {item.description && <p> {item.description}</p>}
        </div>
      ))}
    </>
  );
};

export default ListItemForUni;
