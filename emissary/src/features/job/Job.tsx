import { Table } from 'antd';
import { jobColumns } from './metadata/jobMetadata';
import { useGetJobsQuery } from './jobAPI';
import { useJobs } from './hooks/useJobs';

export function Jobs() {
  const { data } = useGetJobsQuery();
  const dataSource = useJobs(data);

  return (
    <div>
      <Table dataSource={dataSource} columns={jobColumns} />;
    </div>
  );
}
