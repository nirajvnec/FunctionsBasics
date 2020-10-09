var run = (function(){
    var DEFAULTS = {
        topSpeed: '250 miles an hour'
    };
    return{
        speed: function(){
            var allArguments = arguments[0] || '';
            var myStatements = allArguments.topSpeed || DEFAULTS.topSpeed;
            console.log(myStatements);
        }
    }
})();