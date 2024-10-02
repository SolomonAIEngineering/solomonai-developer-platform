import { Log } from "./log.js";
export class ConsoleLogger {
  requestId;
  environment;
  application;
  defaultFields;
  constructor(opts) {
    this.requestId = opts.requestId;
    this.environment = opts.environment;
    this.application = opts.application;
    this.defaultFields = opts.defaultFields ?? {};
  }
  marshal(level, message, fields) {
    return new Log({
      type: "log",
      environment: this.environment,
      application: this.application,
      requestId: this.requestId,
      time: Date.now(),
      level,
      message,
      context: { ...this.defaultFields, ...fields },
    }).toString();
  }
  debug(message, fields) {
    console.debug(this.marshal("debug", message, fields));
  }
  info(message, fields) {
    console.info(this.marshal("info", message, fields));
  }
  warn(message, fields) {
    console.warn(this.marshal("warn", message, fields));
  }
  error(message, fields) {
    console.error(this.marshal("error", message, fields));
  }
  fatal(message, fields) {
    console.error(this.marshal("fatal", message, fields));
  }
  setRequestId(requestId) {
    this.requestId = requestId;
  }
}
