let line = gets().split(" ");
let H = parseInt(line[0]);
let P = parseInt(line[1]);

let media = P / 12 * H ;        
let mediaFinal = media.toFixed(3);
print(" " + mediaFinal);