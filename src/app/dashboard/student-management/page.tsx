
import StudentList from '@/components/common/dashboard/student-management/student-management-list';
import PageHeaderForDashboard from '@/components/common/page-header/page-header-for-dashboard';

import { getAllStudentsByPage } from '@/services/student_service';
import React from 'react'

interface DashboardContactMessagesPageProps {
  searchParams: Record<string, any>;
}

const StudentManagementsPage = async ({ searchParams }: DashboardContactMessagesPageProps) => {
 
    const { page } = await searchParams;
    const res = await getAllStudentsByPage(page);
    const data = await res.json();
      // data.content = data.content.map((item: any, index: number) => ({ ...item, id: index }));
  if (!res.ok) throw new Error(data.message);
    
  return (
    <>
        <PageHeaderForDashboard
        title={"Öğrenci Bilgileri"}
        />
        <section className='container'>
          <StudentList data={data.object} />
        </section>
    </>
  )
}

export default StudentManagementsPage