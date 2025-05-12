package com.eventsync.event.sync.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import com.eventsync.event.sync.entity.BookEvent;

public interface BookEventRepo extends JpaRepository<BookEvent, Long>, JpaSpecificationExecutor<BookEvent> {
    
    // Custom query methods can be defined here if needed
    // For example, find by event name or date, etc.
    
}
