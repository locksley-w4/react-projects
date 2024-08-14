import React from 'react';

const CurrentDetails = ({weather}) => {
    const current = weather.current
    function getWindDir(dirCode) {
        let dir = "";
        switch (dirCode){
            case "N": 
            dir  = "Сев."
            break;
            case "E": 
            dir  = "Вост."
            break;
            case "S": 
            dir  = "Южн."
            break;
            case "W": 
            dir  = "Запад."
            break;
            default: 
                dir = "undefinable"
        }
        return dir
    }
    return (
        <table className='currentDetails'>
            <tbody>
            <tr>
                <td>Ощущение</td>
                <td>{current?.feelslike_c}°C</td>
            </tr>
            <tr>
                <td>Влажность</td>
                <td>{current?.humidity}</td>
            </tr>
            <tr>
                <td>Облачность</td>
                <td>{current?.cloud*100}%</td>
            </tr>
            <tr>
                <td>Скорость ветра</td>
                <td>{current?.wind_mph} м/с</td>
            </tr>
            <tr>
                <td>Направление ветра</td>
                <td>{getWindDir(current?.wind_dir)}</td>
            </tr>
            <tr>
                <td>Давление</td>
                <td>{current?.pressure_mb} мбар</td>
            </tr>
            </tbody>
        </table>
    );
}
export default CurrentDetails;
