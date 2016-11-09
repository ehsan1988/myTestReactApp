var React=require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var openWeatherMap=require('openWeatherMap');
var Weather=React.createClass({
    getInitialState:function () {
      return{
      }
    },
    handleSearch:function (location) {
        var that=this;
        openWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location:location,
                temp:temp-37
            });
        },function (errorMessage) {
            alert(errorMessage);
        })

    },
    render:function () {
        var{location, temp}=this.state;
        return(
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={location} temp={temp} />
                <h2>Weather component</h2>
            </div>
        );
    }
});
module.exports=Weather;