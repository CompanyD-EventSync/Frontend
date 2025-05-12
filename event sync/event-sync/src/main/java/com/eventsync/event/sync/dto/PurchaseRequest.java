package com.eventsync.event.sync.dto;

import java.math.BigDecimal;
import java.util.List;

import com.eventsync.event.sync.entity.Payment;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class PurchaseRequest {

    private BigDecimal totalPrice;
    private List<BookEventRequest> events;
    private Payment paymentInfo;
    
    
}
