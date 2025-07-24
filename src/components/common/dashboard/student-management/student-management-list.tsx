"use client";
import React from "react";
import { Container } from "react-bootstrap";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useRouter } from "next/navigation";
import type { DataTableStateEvent } from "primereact/datatable";

interface StudentManagement {
  userId: number;
  name: string;
  surname: string;
  email: string;
  birthDay: string;
  studentPhoneNumber: string;
  motherName: string;
  fatherName: string;
  familyPhoneNumber: string;
  grade: string;
  highSchool: string;
  registerStatusName: string;
  paymentStatusName: string;
  registerDate: string;
}

interface Pageable {
  offset: number;
}

interface MessageListData {
  content: StudentManagement[];
  totalElements: number;
  size: number;
  pageable?: Pageable;
}

interface MessageListProps {
  data: MessageListData;
}

export const StudentList: React.FC<MessageListProps> = ({ data }) => {
  const { content, totalElements, size } = data;
  const offset = data.pageable?.offset ?? 0;
  const router = useRouter();
  const pagePath = "/dashboard/student-management";

  const onPage = (event: DataTableStateEvent) => {
    const page = event.page ?? 0;
    router.push(`${pagePath}?page=${page}`);
  };


  return (
    <Container>
      <DataTable
        dataKey="userId"
        value={content}
        showGridlines
        stripedRows
        paginator
        lazy
        rows={size}
        totalRecords={totalElements}
        onPage={onPage}
        first={offset}      >
        <Column
          header="#"
          body={(_rowData, options) => options.rowIndex + 1}
          headerStyle={{ width: "20px" }}
          bodyClassName="index"
        />
        <Column body={(rowData) => `${rowData.name} ${rowData.surname}`} header="İsim / Soyisim" bodyClassName="İsim / Soyisim"/>
        <Column field="email" header="Email" bodyClassName="Email" />
        <Column field="studentPhoneNumber" header="Telefon Numarası" bodyClassName="Telefon Numarası" />
        <Column field="highSchool" header="Lise" bodyClassName="Lise" />
         <Column body={(rowData) => `${rowData.motherName} / ${rowData.fatherName}`} header="Anne / Baba Adı" bodyClassName="Anne / Baba Adı"/>
        <Column field="familyPhoneNumber" header="Aile Telefon Numarası" bodyClassName="Aile Telefon Numarası" />
      </DataTable>
    </Container>
  );
};
export default StudentList;