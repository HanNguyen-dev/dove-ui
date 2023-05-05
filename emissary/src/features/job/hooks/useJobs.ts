import { useMemo } from "react";
import { Job } from "../domain/model/Job"

export const useJobs = (jobs: Job[] | undefined) => {
  return useMemo(() => {
    return jobs?.map((job, index) => {
      const appliedDate = job.appliedDate && new Date(job.appliedDate + 'T04:00:00Z');

      return {
        ...job,
        key: job.jobId,
        title: { text: job.title, link: job.url },
        appliedDate:  appliedDate && typeof appliedDate != 'string' ? appliedDate.toDateString() : "",
        duration: appliedDate && Math.ceil((Date.now() - appliedDate.getTime()) / (1000 * 60 * 60 * 24))
      }
    });
  }, [jobs]);
}