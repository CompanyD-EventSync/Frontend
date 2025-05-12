package com.eventsync.event.sync.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.eventsync.event.sync.entity.Event;

public interface EventRepo extends JpaRepository<Event, Long> {

    List<Event> findByCategoryId(Long categoryId);
    List<Event> findByNameContainingOrDescriptionContaining(String name, String description);
    
    //Optional<BookEvent> findAllById(int eventId);
    
    // Custom query methods can be defined here if needed
    // For example, to find events by category or date range
    
    // Example:
    // List<Event> findByCategory(Category category);
    
    // Example:
    // List<Event> findByDateBetween(LocalDate startDate, LocalDate endDate);
    
}
