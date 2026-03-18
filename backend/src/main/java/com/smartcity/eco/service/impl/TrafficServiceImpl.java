package com.smartcity.eco.service.impl;

import com.smartcity.eco.dto.TrafficResponse;
import com.smartcity.eco.model.RawApiLog;
import com.smartcity.eco.repository.RawApiLogRepository;
import com.smartcity.eco.repository.TrafficMetricRepository;
import com.smartcity.eco.service.TrafficService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TrafficServiceImpl implements TrafficService {

    private final TrafficMetricRepository trafficMetricRepository;
    private final RawApiLogRepository rawApiLogRepository;

    @Override
    public List<TrafficResponse> getLatestMetrics() {
        return trafficMetricRepository.findAll().stream()
                .map(m -> new TrafficResponse(m.getId(), m.getTrafficVolume(), m.getWeatherMain(), m.getTemp(), m.getDateTime()))
                .collect(Collectors.toList());
    }

    @Override
    public void logRawApiData(String rawJson) {
        RawApiLog log = new RawApiLog();
        log.setRawContent(rawJson);
        log.setReceivedAt(LocalDateTime.now());
        rawApiLogRepository.save(log);
    }
}
