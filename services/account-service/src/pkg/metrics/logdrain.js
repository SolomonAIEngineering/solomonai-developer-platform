import { Log } from "../logger/log.js";
export class LogdrainMetrics {
    requestId;
    isolateId;
    environment;
    constructor(opts) {
        this.requestId = opts.requestId;
        this.isolateId = opts.isolateId;
        this.environment = opts.environment;
    }
    emit(metric) {
        const log = new Log({
            requestId: this.requestId,
            isolateId: this.isolateId,
            environment: this.environment,
            application: "api",
            type: "metric",
            time: Date.now(),
            metric,
        });
        console.info(log.toString());
    }
    async flush() {
        return Promise.resolve();
    }
}
