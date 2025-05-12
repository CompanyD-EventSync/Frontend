package com.eventsync.event.sync.mapper;

import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.eventsync.event.sync.dto.AddressDto;
import com.eventsync.event.sync.dto.BookEventDto;
import com.eventsync.event.sync.dto.CategoryDto;
import com.eventsync.event.sync.dto.EventDto;
import com.eventsync.event.sync.dto.UserDto;
import com.eventsync.event.sync.entity.Address;
import com.eventsync.event.sync.entity.BookEvent;
import com.eventsync.event.sync.entity.Category;
import com.eventsync.event.sync.entity.Event;
import com.eventsync.event.sync.entity.User;

@Component
public class EntityDtoMapper {
    public UserDto mapUserToDtoBasic(User user){
        UserDto userDto = new UserDto();
        userDto.setId(user.getId());
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setRole(user.getRole().name());
        return userDto;
    }

    //Address to DTO Basic

    public AddressDto mapAddressToDtoBasic(Address address){
        AddressDto addressDto = new AddressDto();
        addressDto.setId(address.getId());
        addressDto.setStreet(address.getStreet());
        addressDto.setCity(address.getCity());
        addressDto.setState(address.getState());
        addressDto.setCountry(address.getCountry());
        addressDto.setZipCode(address.getZipCode());
        return addressDto;
    }

    //Category to DTO Basic

    public CategoryDto mapCategoryToDtoBasic(Category category){
        CategoryDto categoryDto = new CategoryDto();
        categoryDto.setId(category.getId());
        categoryDto.setName(category.getName());
        return categoryDto;
    }

    //Ordertem to DTO Basic

    public BookEventDto mapBookEventToDtoBasic(BookEvent bookEvent){
        BookEventDto bookEventDto = new BookEventDto();
        bookEventDto.setId(bookEvent.getId());
        bookEventDto.setQuantity(bookEvent.getQuantity());
        bookEventDto.setPrice(bookEvent.getPrice());
        bookEventDto.setStatus(bookEvent.getStatus().name());
        bookEventDto.setCreatedAt(bookEvent.getCreatedAt());
        return bookEventDto;
    }

    //Event to DTO Basic

    public EventDto mapEventToDtoBasic(Event event){
        EventDto eventDto = new EventDto();
        eventDto.setId(event.getId());
        eventDto.setName(event.getName());
        eventDto.setDescription(event.getDescription());
        eventDto.setPrice(event.getPrice());
        eventDto.setImageUrl(event.getImageUrl());
        return eventDto;
    }

    //User to DTO Basic

    public UserDto mapUserToDtoPlusAddress(User user){
        UserDto userDto = mapUserToDtoBasic(user);
        if (user.getAddress() != null) {
            AddressDto addressDto = mapAddressToDtoBasic(user.getAddress());
            userDto.setAddress(addressDto);
        }
        
        return userDto;
    }

    //BookEvent to DTO Plus Event
    public BookEventDto mapBookEventToDtoPlusEvent(BookEvent bookEvent){
        BookEventDto bookEventDto = mapBookEventToDtoBasic(bookEvent);
        if (bookEvent.getEvent() != null) {
            EventDto eventDto = mapEventToDtoBasic(bookEvent.getEvent());
            bookEventDto.setEvent(eventDto);
        }
        
        return bookEventDto;
    }

    //BookEvent to DTO Plus event and user

    public BookEventDto mapBookEventToDtoPlusEventAndUser(BookEvent bookEvent){
        BookEventDto bookEventDto = mapBookEventToDtoPlusEvent(bookEvent);
        if (bookEvent.getUser() != null) {
            UserDto userDto = mapUserToDtoBasic(bookEvent.getUser());
            bookEventDto.setUser(userDto);
        }
        
        return bookEventDto;
    }
    //User to DTO with address and Purchase History
    public UserDto mapUserToDtoPlusAddressAndPurchaseHistory(User user){
        UserDto userDto = mapUserToDtoPlusAddress(user);
        if (user.getBookEventList() != null && !user.getBookEventList().isEmpty()) {
            userDto.setBookEventList(user.getBookEventList().stream()
                .map(this::mapBookEventToDtoPlusEvent)
                .collect(Collectors.toList()));
        }
        
        return userDto;
    }




    
}


