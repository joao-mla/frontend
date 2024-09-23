package com.jmla.weather.rest;

import com.jmla.weather.dtos.ForecastDataRequest;
import com.jmla.weather.dtos.Hourly;
import com.jmla.weather.rest.apis.WeatherApi;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.jmla.weather.modelPackage.V1ForecastGet200Response;

@RestController
@RequiredArgsConstructor
@Slf4j
public class WeatherController {
    private final WeatherApi weatherApi;

    @PostMapping(value = "/v1/forecast")
    public ResponseEntity<V1ForecastGet200Response> getForecast(@RequestBody(required = true) ForecastDataRequest request) {
        return ResponseEntity.ok().body(weatherApi.getForecast(request));
    }

    @GetMapping(value = "/v1/forecast")
    public ResponseEntity<V1ForecastGet200Response> getForecast(float latitude, float longitude) {
        ForecastDataRequest request = new ForecastDataRequest();
        request.setLatitude(latitude);
        request.setLongitude(longitude);
        request.setHourly(Hourly.getAllProperties());
        return ResponseEntity.ok().body(weatherApi.getForecast(request));
    }
}
