function parentProcess(){
    var speed = '100 miles an hour';

    function childProcess(){
        console.log(speed);
    }

    childProcess();
}

parentProcess();