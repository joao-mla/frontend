package com.jmla.weather.rest.apis;

import com.jmla.weather.dtos.ForecastDataRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import com.jmla.weather.apiPackage.WeatherForecastApisApi;
import com.jmla.weather.modelPackage.V1ForecastGet200Response;
@Slf4j
@RequiredArgsConstructor
@Component
public class WeatherApi {
    private final WeatherForecastApisApi weatherOutApi;

    public V1ForecastGet200Response getForecast(ForecastDataRequest request) {
        return weatherOutApi.v1ForecastGet(
                request.getLatitude(),
                request.getLongitude(),
                request.getHourly(),
                request.getDaily(),
                true,
                request.getTemperatureUnit(),
                request.getWindSpeedUnit(),
                request.getTimeFormat(),
                request.getTimezone(),
                request.getPastDays());
    }

}
