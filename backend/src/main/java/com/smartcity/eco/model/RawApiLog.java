package com.smartcity.eco.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Map;

@Document(collection = "raw_api_logs")
@Data
public class RawApiLog {
    @Id
    private String id;
    private String provider; // e.g. OpenWeather, TomTom
    private String rawJson;
    private Long receivedAt;
}
