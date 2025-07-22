import React from 'react'

type PageHeaderForDashboardProps = {
  title: string;
}

const PageHeaderForDashboard: React.FC<PageHeaderForDashboardProps> = ({title}: PageHeaderForDashboardProps) => {
  return (
    <h1>{title}</h1>
  )
}

export default PageHeaderForDashboard