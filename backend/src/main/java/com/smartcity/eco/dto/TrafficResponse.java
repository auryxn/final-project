package com.smartcity.eco.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TrafficResponse {
    private Long id;
    private Integer volume;
    private String weather;
    private Double temperature;
    private LocalDateTime timestamp;
}
