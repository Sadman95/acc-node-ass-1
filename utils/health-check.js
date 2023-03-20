const healthCheck = async (_req, res, _next) => {
  const health = {
    uptime: process.uptime(),
    responseTime: process.hrtime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.send(health);
  } catch (e) {
    health.message = e;
    res.status(503).send();
  }
};

module.exports = healthCheck;
