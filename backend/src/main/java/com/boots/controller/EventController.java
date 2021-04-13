package com.boots.controller;

import com.boots.entity.Event;
import com.boots.entity.LikedPosts;
import com.boots.repository.EventRepository;
import com.boots.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:3000")
public class EventController {

    @Autowired
    EventService eventService;

    @Autowired
    EventRepository eventRepository;


   @PostMapping(value = "/addEvent")
   public Event addEvent(@RequestPart Event event, @RequestPart MultipartFile  image) throws IOException {
       System.out.println(event);
       System.out.println("Image"+image.getBytes());
       event.setSelectedFile(image.getBytes());

       eventService.saveEvent(event);

       return event;
     }

    @RequestMapping(path="/getImage/{id}", method=RequestMethod.GET,produces = MediaType.IMAGE_JPEG_VALUE)
    public byte[] getStringImage(@PathVariable Long id)  {
        return eventService.getImgString(id);
    }

    @GetMapping("/event")
    public List<Event> getEvent(){
        return eventService.getEvents();
    }

    @DeleteMapping("/deleteEvent/{id}")
    public boolean deleteEvent(@RequestBody Long id) {
         return eventService.deleteEvent(id);
    }


    @GetMapping("/getLikedEvent{id}")
    public LikedPosts getLikedEvent(@PathVariable Long id){
        return eventService.getEvent(id);
    }
    @GetMapping("/getAllLikedEvents")
    public List<LikedPosts> getAllLikedEvents(){
       return eventService.getAllLikedEvents();
    }
    @DeleteMapping("/deleteLikedEvent/{id}")
    public boolean deleteLikedEvent(@PathVariable Long id){
       return eventService.deleteLikedEvent(id);
    }


}
