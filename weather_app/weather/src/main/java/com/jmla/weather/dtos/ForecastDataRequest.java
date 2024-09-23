package com.jmla.weather.dtos;

import lombok.Data;

import java.util.List;

@Data
public class ForecastDataRequest {
    float latitude; // required
    float longitude; // required
    List<String> hourly;
    List<String> daily;
    List<String> current;
    String temperatureUnit;
    String windSpeedUnit;
    String timeFormat;
    String timezone;
    Integer pastDays;
}
