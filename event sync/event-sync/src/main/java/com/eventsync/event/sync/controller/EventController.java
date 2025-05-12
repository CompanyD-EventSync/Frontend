package com.eventsync.event.sync.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.eventsync.event.sync.dto.Response;
import com.eventsync.event.sync.exception.InvalidCredentialsException;
import com.eventsync.event.sync.service.interf.EventService;

import java.math.BigDecimal;

@RestController
@RequestMapping("/event")
@RequiredArgsConstructor
public class EventController {

    private final EventService eventService;


    @PostMapping("/create")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> createEvent(
            @RequestParam Long categoryId,
            @RequestParam MultipartFile image,
            @RequestParam String name,
            @RequestParam String description,
            @RequestParam BigDecimal price
    ){
      if (categoryId == null || image.isEmpty() || name.isEmpty() || description.isEmpty() || price == null){
          throw new InvalidCredentialsException("All Fields are Required");
      }
    return ResponseEntity.ok(eventService.createEvent(categoryId, image, name, description, price));
    }


    @PutMapping("/update")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> updateEvent(
            @RequestParam Long eventId,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false)  MultipartFile image,
            @RequestParam(required = false)  String name,
            @RequestParam(required = false)  String description,
            @RequestParam(required = false)  BigDecimal price
    ){
        return ResponseEntity.ok(eventService.updateEvent(eventId, categoryId, image, name, description, price));
    }

    @DeleteMapping("/delete/{eventId}")
    @PreAuthorize("hasAuthority('ADMIN')")
    public ResponseEntity<Response> deleteEvent(@PathVariable Long eventId){
        return ResponseEntity.ok(eventService.deleteEvent(eventId));

    }


    @GetMapping("/get-by-event-id/{eventId}")
    public ResponseEntity<Response> getEventById(@RequestParam Long eventId){
        return ResponseEntity.ok(eventService.getEventById(eventId));
    }

    @GetMapping("/get-all")
    public ResponseEntity<Response> getAllEvents(){
        return ResponseEntity.ok(eventService.getAllEvents());
    }


    @GetMapping("/get-by-category-id/{categoryId}")
    public ResponseEntity<Response> getEventsByCategory(@PathVariable Long categoryId){
        return ResponseEntity.ok(eventService.getEventsByCategory(categoryId));
    }

    @GetMapping("/search")
    public ResponseEntity<Response> searchForEvent(@RequestParam String searchValue){
        return ResponseEntity.ok(eventService.searchEvent(searchValue));
    }
}