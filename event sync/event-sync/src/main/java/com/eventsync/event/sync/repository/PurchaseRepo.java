package com.eventsync.event.sync.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventsync.event.sync.entity.Purchase;

public interface PurchaseRepo extends JpaRepository<Purchase, Long> {
    
    // Custom query methods can be defined here if needed
    // For example, find by user ID or event ID


    
}
