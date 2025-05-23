import { ProgramItem } from "@/types/programTypes";
import React from "react";

interface ListItemProps {
  item: ProgramItem;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <li>
      {item.title && <strong>{item.title}</strong>}
      {item.title && item.description && <span>:&nbsp;</span>}
      {item.description && <span>{item.description}</span>}
    </li>
  );
};

export default ListItem;
