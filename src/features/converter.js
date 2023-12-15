export const convertMsToTime = (sourceSeconds) => {
    const ms = Math.ceil(sourceSeconds * 1000)
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;

    let durationParts = [];
    if (hours > 0) {
        durationParts.push(hours.toString().padStart(2, '0'));
    }
    durationParts.push(minutes.toString().padStart(2, '0'));
    durationParts.push(seconds.toString().padStart(2, '0'));

    return durationParts.join(":");
 }