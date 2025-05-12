package com.eventsync.event.sync.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventsync.event.sync.entity.User;

public interface UserRepo extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);

    
}
