package com.smartcity.eco.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "traffic_metrics")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class TrafficMetric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime timestamp;
    private Double temperature;
    private Double rainIntensity;
    private Integer cloudCoverage;
    private String weatherCondition;
    private Integer trafficVolume;
    
    // Relation to CityZone placeholder
    private String zoneId;
}
