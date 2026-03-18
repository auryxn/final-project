package com.smartcity.eco.repository;

import com.smartcity.eco.model.RawApiLog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RawApiLogRepository extends MongoRepository<RawApiLog, String> {
    List<RawApiLog> findByProvider(String provider);
}
