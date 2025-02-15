import { Table, Pagination } from "antd";
import { jobColumns } from "./metadata/jobMetadata";
import { useGetJobsQuery } from "./jobAPI";
import { useJobs } from "./hooks/useJobs";

export function Jobs() {
  const { data } = useGetJobsQuery();
  let dataSource = useJobs(data);

  // if (dataSource?.length) {
  //   dataSource = [...dataSource, ...dataSource];
  // }

  return (
    <div>
      <Table
        dataSource={dataSource}
        columns={jobColumns}
        size="small"
        pagination={{
          showSizeChanger: true,
          showTotal: (total) => `Total ${total} items`,
        }}
      />
      {/* <Pagination
        total={85}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={20}
        defaultCurrent={1}
      /> */}
    </div>
  );
}
