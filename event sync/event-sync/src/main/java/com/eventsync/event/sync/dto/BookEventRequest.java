package com.eventsync.event.sync.dto;

import lombok.Data;

@Data
public class BookEventRequest {

    private Long eventId;
    private int quantity;

    
}
