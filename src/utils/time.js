export function twoDigits(d){
    return (d < 10) ? '0'+d : d;
}

export function threeDigits(d){
  return (d < 100 ? '0' + twoDigits(d) : d);
}

export function extractTime(time){
  var date = new Date(time),
        h = date.getUTCHours(),
        m = date.getUTCMinutes(),
        s = date.getUTCSeconds(),
        ms = date.getUTCMilliseconds();
  return { h, m, s, ms };
}
