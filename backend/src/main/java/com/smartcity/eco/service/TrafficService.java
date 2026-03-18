package com.smartcity.eco.service;

import com.smartcity.eco.dto.TrafficResponse;
import java.util.List;

public interface TrafficService {
    List<TrafficResponse> getLatestMetrics();
    void logRawApiData(String rawJson);
}
