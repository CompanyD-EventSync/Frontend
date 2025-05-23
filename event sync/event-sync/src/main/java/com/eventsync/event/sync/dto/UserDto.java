package com.eventsync.event.sync.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonIgnoreProperties(ignoreUnknown = true)
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    
    private Long id;
    private String email;
    private String name;
    private String password;
    private String phoneNumber;
    private String role;
    private List<BookEventDto> bookEventList;
    private AddressDto address;

}
