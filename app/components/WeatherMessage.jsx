var React=require('react');
var WeatherMessage= ({temp,location}) => {
        return(
            <div>
                <h2>The weather is {temp} in {location}!!!!</h2>
            </div>
        );
    };
module.exports=WeatherMessage;