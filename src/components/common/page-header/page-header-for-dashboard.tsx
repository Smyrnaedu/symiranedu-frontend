import { section } from 'framer-motion/client';
import React from 'react'
import { Spacer } from '../spacer';

type PageHeaderForDashboardProps = {
  title: string;
}

const PageHeaderForDashboard: React.FC<PageHeaderForDashboardProps> = ({title}: PageHeaderForDashboardProps) => {
  return (
   <section className='container text-center'>
      <Spacer />
     <h1>{title}</h1>
      <Spacer />
   </section>
  )
}

export default PageHeaderForDashboard