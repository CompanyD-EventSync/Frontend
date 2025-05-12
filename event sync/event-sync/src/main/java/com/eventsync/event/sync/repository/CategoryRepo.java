package com.eventsync.event.sync.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.eventsync.event.sync.entity.Category;

public interface CategoryRepo extends JpaRepository<Category, Long> {



}
