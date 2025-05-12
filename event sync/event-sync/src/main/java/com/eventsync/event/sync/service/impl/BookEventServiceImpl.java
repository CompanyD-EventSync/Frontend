package com.eventsync.event.sync.service.impl;

import com.eventsync.event.sync.dto.BookEventDto;
import com.eventsync.event.sync.dto.PurchaseRequest;
import com.eventsync.event.sync.dto.Response;
import com.eventsync.event.sync.entity.BookEvent;
import com.eventsync.event.sync.entity.Purchase;
import com.eventsync.event.sync.entity.User;
import com.eventsync.event.sync.entity.Event;
import com.eventsync.event.sync.enums.BookingStatus;
import com.eventsync.event.sync.exception.NotFoundException;
import com.eventsync.event.sync.repository.BookEventRepo;
import com.eventsync.event.sync.repository.EventRepo;
import com.eventsync.event.sync.mapper.EntityDtoMapper;
import com.eventsync.event.sync.repository.PurchaseRepo;
//import com.eventsync.event.sync.service.interf.AddressService;
import com.eventsync.event.sync.service.interf.BookEventService;
import com.eventsync.event.sync.service.interf.UserService;
import com.eventsync.event.sync.specification.BookEventSpecification;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookEventServiceImpl implements BookEventService {

    private final PurchaseRepo purchaseRepo;
    private final BookEventRepo bookEventRepo;
    private final EventRepo eventRepo;
    private final UserService userService;
    private final EntityDtoMapper entityDtoMapper;

    @Override
    public Response placeBook(PurchaseRequest purchaseRequest) {
        User user = userService.getLoginUser();

        List<BookEvent> bookEvents = purchaseRequest.getEvents().stream().map(bookEventRequest -> {
            Event event = eventRepo.findById(bookEventRequest.getEventId())
                    .orElseThrow(() -> new NotFoundException("Event not found"));

            BookEvent bookEvent = new BookEvent();
            bookEvent.setEvent(event);
            bookEvent.setQuantity(bookEventRequest.getQuantity());
            bookEvent.setPrice(event.getPrice().multiply(BigDecimal.valueOf(bookEventRequest.getQuantity())));
            bookEvent.setStatus(BookingStatus.PENDING);
            bookEvent.setUser(user);
            bookEvent.setStatus(BookingStatus.PENDING);
            return bookEvent;
        }).collect(Collectors.toList());

        BigDecimal totalPrice = purchaseRequest.getTotalPrice() != null && purchaseRequest.getTotalPrice().compareTo(BigDecimal.ZERO) > 0
                ? purchaseRequest.getTotalPrice()
                : bookEvents.stream().map(BookEvent::getPrice).reduce(BigDecimal.ZERO, BigDecimal::add);

        Purchase purchase = new Purchase();
        purchase.setBookEventList(bookEvents);
        purchase.setTotalPrice(totalPrice);


        bookEvents.forEach(bookEvent -> bookEvent.setPurchase(purchase));
        purchaseRepo.save(purchase);

        return Response.builder()
                .status(200)
                .message("Booking successfully created")
                .build();

    }

    @Override
    public Response updateBookEventStatus(Long bookEventId, String status){
        BookEvent bookEvent = bookEventRepo.findById(bookEventId)
                .orElseThrow(() -> new NotFoundException("BookEvent not found"));

        bookEvent.setStatus(BookingStatus.valueOf(status.toUpperCase()));
        bookEventRepo.save(bookEvent);
        return Response.builder()
                .status(200)
                .message("Booking status updated successfully")
                .build();
    }

    
    @Override
    public Response filterBookEvents(BookingStatus status, LocalDateTime startDate, LocalDateTime endDate, Long eventId, Pageable pageable) {
        Specification<BookEvent> spec = Specification.where(BookEventSpecification.hasStatus(status))
                .and(BookEventSpecification.createdBetween(startDate, endDate))
                .and(BookEventSpecification.hasEventId(eventId));

        Page<BookEvent> bookEventPage = bookEventRepo.findAll(spec, pageable);

        if(bookEventPage.isEmpty()){
            throw new NotFoundException("No BookEvents found");

        }
        List<BookEventDto> bookEventDtos = bookEventPage.getContent().stream()
                .map(entityDtoMapper::mapBookEventToDtoPlusEventAndUser)
                .collect(Collectors.toList());

        return Response.builder()
                .status(200)
                .bookEventList(bookEventDtos)
                .totalPage(bookEventPage.getTotalPages())
                .totalElements(bookEventPage.getTotalElements())
                .build();


    }
        
    

    
    
}
