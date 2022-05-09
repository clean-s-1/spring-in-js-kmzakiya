const getStatistics = require("./statistics");
class EmailAlert {
  emailSent = false;
}
class LEDAlert {
  ledGlows = false;
}
class StatsAlerter {
  constructor(maxThreshold, alerters) {
    this.emailAlert = alerters[0];
    this.ledAlert = alerters[1];
    this.maxThreshold = maxThreshold;
  }
  checkAndAlert(numbers) {
    const stats = getStatistics(numbers);
    if (stats.max > this.maxThreshold) {
      this.emailAlert.emailSent = true;
      this.ledAlert.ledGlows = true;
    }
  }
}
module.exports = { StatsAlerter, EmailAlert, LEDAlert };
