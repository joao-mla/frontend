package com.jmla.weather.rest;

import com.jmla.weather.apiPackage.WeatherForecastApisApi;
import com.jmla.weather.invokerPackage.ApiClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Configuration
public class Config {

    @Value("${weather-site.url}")
    private String weatherUrl;

    @Bean
    @Primary
    public WeatherForecastApisApi weatherForecastApisApi(ApiClient apiClient) {
        apiClient.setBasePath(weatherUrl);
        return new WeatherForecastApisApi(apiClient);
    }

    @Bean
    @Primary
    public

    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }
}
