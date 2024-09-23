package com.jmla.weather.dtos;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

public enum Hourly {
    TEMPERATURE_2M ("temperature_2m"),
    RELATIVE_HUMIDITY_2M ("relative_humidity_2m"),
    DEW_POINT_2M ("dew_point_2m"),
    APPARENT_TEMPERATURE ("apparent_temperature"),
    PRESSURE_MSL ("pressure_msl"),
    SURFACE_PRESSURE ("surface_pressure"),
    CLOUD_COVER ("cloud_cover"),
    CLOUD_COVER_LOW ("cloud_cover_low"),
    CLOUD_COVER_MID ("cloud_cover_mid"),
    CLOUD_COVER_HIGH ("cloud_cover_high"),
    WIND_SPEED_10M ("wind_speed_10m"),
    WIND_SPEED_80M ("wind_speed_80m"),
    WIND_SPEED_120M ("wind_speed_120m"),
    WIND_SPEED_180M ("wind_speed_180m"),
    WIND_DIRECTION_10M ("wind_direction_10m"),
    WIND_DIRECTION_80M ("wind_direction_80m"),
    WIND_DIRECTION_120M ("wind_direction_120m"),
    WIND_DIRECTION_180M ("wind_direction_180m"),
    WIND_GUSTS_10M ("wind_gusts_10m"),
    SHORTWAVE_RADIATION ("shortwave_radiation"),
    DIRECT_RADIATION ("direct_radiation"),
    DIRECT_NORMAL_IRRADIANCE ("direct_normal_irradiance"),
    DIFFUSE_RADIATION ("diffuse_radiation"),
    GLOBAL_TILTED_IRRADIANCE ("global_tilted_irradiance"),
    VAPOUR_PRESSURE_DEFICIT ("vapour_pressure_deficit"),
    CAPE ("cape"),
    EVAPOTRANSPIRATION ("evapotranspiration"),
    ET0_FAO_EVAPOTRANSPIRATION ("et0_fao_evapotranspiration"),
    PRECIPITATION ("precipitation"),
    SNOWFALL ("snowfall"),
    PRECIPITATION_PROBABILITY ("precipitation_probability"),
    RAIN ("rain"),
    SHOWERS ("showers"),
    WEATHER_CODE ("weather_code"),
    SNOW_DEPTH ("snow_depth"),
    FREEZING_LEVEL_HEIGHT ("freezing_level_height"),
    VISIBILITY ("visibility"),
    SOIL_TEMPERATURE_0CM ("soil_temperature_0cm"),
    SOIL_TEMPERATURE_6CM ("soil_temperature_6cm"),
    SOIL_TEMPERATURE_18CM ("soil_temperature_18cm"),
    SOIL_TEMPERATURE_54CM ("soil_temperature_54cm"),
    SOIL_MOISTURE_0_TO_1CM ("soil_moisture_0_to_1cm"),
    SOIL_MOISTURE_1_TO_3CM ("soil_moisture_1_to_3cm"),
    SOIL_MOISTURE_3_TO_9CM ("soil_moisture_3_to_9cm"),
    SOIL_MOISTURE_9_TO_27CM ("soil_moisture_9_to_27cm"),
    SOIL_MOISTURE_27_TO_81CM ("soil_moisture_27_to_81cm"),
    IS_DAY ("is_day");

    final String property;

    Hourly(String property) {
        this.property = property;
    }

    public String getProperty() {
        return property;
    }

    public static List<String> getAllProperties() {
        return Arrays.stream(Hourly.class.getEnumConstants())
                .map(Hourly::getProperty)
                .toList();
    }
}
