var run = function(speed){
    console.log(speed);
    console.log(this.firstSpeed);
}

// run('100 miles an hour');
var speedUpgrade = {firstSpeed: '50 more miles an hour', secondSpeed: '200 miles an hour'}
run.apply(speedUpgrade,['5000 miles an hour'])