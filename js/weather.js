/* weather.js */
export default class Weather {
    /** @param {object} details */
  
      // your code
  constructor(data){
    this.data = data;
  }
  getLocation(){
    return this.data.location.name
  }
  getIcon(){
    return this.data.current.weather_icons[0]
  }
  getTemperature(){
    return `${this.data.current.temperature}&deg;С`}
}