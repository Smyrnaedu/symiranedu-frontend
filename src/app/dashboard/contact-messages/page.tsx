import DashboardContactMessagesList from '@/components/common/dashboard/contact-messages/contact-messages-list';
import PageHeader from '@/components/common/page-header/page-header';
import PageHeaderForDashboard from '@/components/common/page-header/page-header-for-dashboard';
import { getAllMessagesByPage } from '@/services/contact-service';
import React from 'react'

interface DashboardContactMessagesPageProps {
  searchParams: Record<string, any>;
}

const DashboardContactMessagesPage = async ({ searchParams }: DashboardContactMessagesPageProps) => {
 
    const { page } = await searchParams;
    const res = await getAllMessagesByPage(page);
    const data = await res.json();
      // data.content = data.content.map((item: any, index: number) => ({ ...item, id: index }));

  if (!res.ok) throw new Error(data.message);
    
  return (
    <>
        <PageHeaderForDashboard
        title={"İletişim Formu Mesajları"}
        />
        <section className='container'>
          <DashboardContactMessagesList data={data} />
        </section>
    </>
  )
}

export default DashboardContactMessagesPage