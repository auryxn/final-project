package com.smartcity.eco.controller;

import com.smartcity.eco.model.TrafficMetric;
import com.smartcity.eco.repository.TrafficMetricRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/traffic")
public class TrafficController {

    @Autowired
    private TrafficMetricRepository repository;

    @GetMapping("/history")
    public List<TrafficMetric> getAllMetrics() {
        return repository.findAll();
    }

    @PostMapping("/report")
    public TrafficMetric reportMetric(@RequestBody TrafficMetric metric) {
        return repository.save(metric);
    }
}
