export const jobColumns = [
  {
    title: 'Job title',
    dataIndex: 'title',
    key: 'title',
    render: ({text, link}: { text: string, link: string }) =>
      link ? <a href={link} target='_blank' rel="noreferrer" >{text}</a> : text
  },
  {
    title: 'Frontend',
    dataIndex: 'frontend',
    key: 'frontend',
  },
  {
    title: 'Backend',
    dataIndex: 'backend',
    key: 'backend',
  },
  {
    title: 'Database',
    dataIndex: 'storeDb',
    key: 'storeDb',
  },
  {
    title: 'Cloud providers',
    dataIndex: 'cloud',
    key: 'cloud',
  },
  {
    title: 'Languages',
    dataIndex: 'languages',
    key: 'languages',
  },
  {
    title: 'Years of experience',
    dataIndex: 'experience',
    key: 'experience',
  },
  {
    title: 'Applied Date',
    dataIndex: 'appliedDate',
    key: 'appliedDate',
  },
  {
    title: 'Completed Date',
    dataIndex: 'completedDate',
    key: 'completedDate',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Company',
    dataIndex: 'companyName',
    key: 'companyName',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
];