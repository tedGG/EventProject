package com.boots.controller;

import com.boots.Response.ResponseMessage;
import com.boots.entity.Event;
import com.boots.repository.EventRepository;
import com.boots.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    EventService eventService;

    @Autowired
    EventRepository eventRepository;

//    @PostMapping(value = "/addEvent",produces = { "application/json; charset=utf-8" },consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, MediaType.APPLICATION_OCTET_STREAM_VALUE,MediaType.APPLICATION_JSON_VALUE})
//    public Event addEvent(@RequestPart Event event, @RequestPart MultipartFile image) throws IOException {
//       event.setSelectedFile(image.getBytes());
//        eventService.saveEvent(event);
//        return event;
//    }

    @PostMapping(value = "/addEvent")
    public Event addEvent(@RequestBody Event event) throws IOException {
//      event.setSelectedFile(image.getBytes());
        eventService.saveEvent(event);
        return event;
    }

    @GetMapping("/event")
    public List<Event> getEvent(){
        return eventService.getEvents();
    }

    @DeleteMapping("/events/{id}")
    public boolean deleteEvent(@RequestBody Long id) {
         return eventService.deleteEvent(id);
    }
}
