export const simulateSleep = (ms: number) => {
  let now = Date.now();
  while (Date.now() < now + ms) {
    // noop
  }
};

export const sendAnalyticsPing = (value: string) => {
  performance.mark("analytics-start");
  simulateSleep(25);
  performance.mark("analytics-end");
  performance.measure(
    "Analytics: " + value,
    "analytics-start",
    "analytics-end"
  );
};
