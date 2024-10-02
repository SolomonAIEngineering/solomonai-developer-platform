export class NoopMetrics {
  emit(_metric) {
    return Promise.resolve();
  }
  async flush() {}
}
