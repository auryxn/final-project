package com.smartcity.eco.repository;

import com.smartcity.eco.model.TrafficMetric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface TrafficMetricRepository extends JpaRepository<TrafficMetric, Long> {
    List<TrafficMetric> findByTimestampBetween(LocalDateTime start, LocalDateTime end);
    List<TrafficMetric> findByWeatherCondition(String condition);
}
