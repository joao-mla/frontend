package com.jmla.weather.rest.apis;

import com.jmla.weather.invokerPackage.ApiClient;
import com.jmla.weather.modelPackage.V1ForecastGet200Response;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestClientException;

import java.util.Collections;
import java.util.List;
import java.util.Locale;

@Component
@Getter
@Setter
public class DonkiApi {
    private ApiClient apiClient;

    public DonkiApi() {
        this(new ApiClient());
    }

    @Autowired
    public DonkiApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ResponseEntity<V1ForecastGet200Response> v1ForecastGetWithHttpInfo(Float latitude, Float longitude, List<String> hourly, List<String> daily, Boolean currentWeather, String temperatureUnit, String windSpeedUnit, String timeformat, String timezone, Integer pastDays) throws RestClientException {
        Object localVarPostBody = null;

        // verify the required parameter 'latitude' is set
        if (latitude == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'latitude' when calling v1ForecastGet");
        }

        // verify the required parameter 'longitude' is set
        if (longitude == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'longitude' when calling v1ForecastGet");
        }


        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(ApiClient.CollectionFormat.valueOf("csv".toUpperCase(Locale.ROOT)), "hourly", hourly));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(ApiClient.CollectionFormat.valueOf("multi".toUpperCase(Locale.ROOT)), "daily", daily));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "latitude", latitude));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "longitude", longitude));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "current_weather", currentWeather));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "temperature_unit", temperatureUnit));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "wind_speed_unit", windSpeedUnit));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "timeformat", timeformat));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "timezone", timezone));
        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "past_days", pastDays));


        final String[] localVarAccepts = {
                "application/json"
        };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = {  };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] {  };

        ParameterizedTypeReference<V1ForecastGet200Response> localReturnType = new ParameterizedTypeReference<V1ForecastGet200Response>() {};
        return apiClient.invokeAPI("/DONKI/CME", HttpMethod.GET, Collections.<String, Object>emptyMap(), localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }
}
