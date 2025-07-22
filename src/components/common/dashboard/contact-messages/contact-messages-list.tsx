"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import { DataListHeader } from "../common/data-list-header";
import type { DataTableStateEvent } from "primereact/datatable";

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Pageable {
  offset: number;
}

interface MessageListData {
  content: ContactMessage[];
  totalElements: number;
  size: number;
  pageable?: Pageable;
}

interface MessageListProps {
  data: MessageListData;
}

export const MessageList: React.FC<MessageListProps> = ({ data }) => {
  const { content, totalElements, size } = data;
  const offset = data.pageable?.offset ?? 0;
  const router = useRouter();
  const pagePath = "/dashboard/contact-message";

  const onPage = (event: DataTableStateEvent) => {
    const page = event.page ?? 0;
    router.push(`${pagePath}?page=${page}`);
  };

  const header = <DataListHeader title="Messages" />;

  return (
    <Container>
      <DataTable
        dataKey="id"
        value={content}
        showGridlines
        stripedRows
        paginator
        lazy
        rows={size}
        totalRecords={totalElements}
        onPage={onPage}
        first={offset}
        header={header}
      >
        <Column
          header="#"
          body={(_rowData, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
          bodyClassName="index"
        />
        <Column field="name" header="Contact Name" bodyClassName="Contact Name" />
        <Column field="email" header="Email" bodyClassName="Email" />
        <Column field="subject" header="Subject" bodyClassName="Subject" />
        <Column field="message" header="Message" bodyClassName="Message" />
      </DataTable>
    </Container>
  );
};

export default MessageList;