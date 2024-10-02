import { exampleJob } from "./basic/basic";
export class JobManager {
    jobMap;
    constructor() {
        this.jobMap = new Map();
        this.addJob(exampleJob);
    }
    /**
     * Retrieves all registered jobs for the application.
     *
     * @returns An array of Job objects.
     */
    getAllJobs() {
        return Array.from(this.jobMap.values());
    }
    /**
     * Retrieves a specific job by its ID.
     *
     * @param jobId The ID of the job to retrieve.
     * @returns The job with the specified ID, or undefined if not found.
     */
    getJobById(jobId) {
        return this.jobMap.get(jobId);
    }
    /**
     * Attaches all jobs to the provided TriggerClient.
     *
     * @param client The TriggerClient to attach jobs to.
     */
    attachJobsToClient(client) {
        this.jobMap.forEach((job) => job.attachToClient(client));
    }
    /**
     * Adds a new job to the job map.
     *
     * @param job The job to add.
     * @throws Error if a job with the same ID already exists.
     */
    addJob(job) {
        if (this.jobMap.has(job.id)) {
            throw new Error(`Job with ID ${job.id} already exists.`);
        }
        this.jobMap.set(job.id, job);
    }
    /**
     * Removes a job from the job map.
     *
     * @param jobId The ID of the job to remove.
     * @returns True if the job was removed, false if it didn't exist.
     */
    removeJob(jobId) {
        return this.jobMap.delete(jobId);
    }
    /**
     * Updates an existing job in the job map.
     *
     * @param job The updated job.
     * @throws Error if the job doesn't exist.
     */
    updateJob(job) {
        if (!this.jobMap.has(job.id)) {
            throw new Error(`Job with ID ${job.id} does not exist.`);
        }
        this.jobMap.set(job.id, job);
    }
}
// Create and export a singleton instance of JobManager
export const jobManager = new JobManager();
// Export individual jobs for direct access
export { exampleJob };
