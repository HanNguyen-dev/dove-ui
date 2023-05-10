import { useMemo } from "react";
import { Job } from "../domain/model/Job"

const MS_TO_DAY = 1000 * 60 * 60 * 24;

export const useJobs = (jobs: Job[] | undefined) => {
  return useMemo(() => {
    return jobs?.map((job, index) => {
      const appliedDate = job.appliedDate && new Date(job.appliedDate + 'T04:00:00Z');
      const completedDate = job.completedDate && new Date(job.completedDate + 'T04:00:00Z');

      return {
        ...job,
        key: job.jobId,
        title: { text: job.title, link: job.url },
        appliedDate:  appliedDate && typeof appliedDate != 'string' ? appliedDate.toDateString() : "",
        completedDate: completedDate && typeof completedDate != 'string' ? completedDate.toDateString() : "",
        duration: appliedDate &&
          Math.ceil(
            ((completedDate instanceof Date ? completedDate.getTime() : Date.now()) - appliedDate.getTime()) / MS_TO_DAY)
      }
    });
  }, [jobs]);
}