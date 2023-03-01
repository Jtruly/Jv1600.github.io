function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    let daysLeft = convertToDaysLeft(timeleft)
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let hoursLeft = convertToHoursLeft(timeleft)
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
    let minutesLeft = convertToMinutesLeft(timeleft) 
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
    let secondsLeft = convertToSecondsLeft(timeleft)
  }
  function setCountdown{
    let now = new Date();
    let timeleft = deadline.getTime() - now.getTime();
  }

  function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
    formatCountdownText(daysLeft, hoursLeft, minutesLeft, secondsLeft);
  setInterval(setCountdown, 1000)
}