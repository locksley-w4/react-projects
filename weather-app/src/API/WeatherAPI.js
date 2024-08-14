import axios from "axios";
class WeatherAPI {
    static getKey = () => "e394b4fd8d0e4c4a8f8101523241208";
    static async getWeather(query) {
        const res = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${WeatherAPI.getKey()}&q=${query || "Tashkent"}&lang=ru`);
        return res.data
    }
}
export default WeatherAPI