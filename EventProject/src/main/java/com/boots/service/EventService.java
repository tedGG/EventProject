package com.boots.service;


import com.boots.entity.Event;
import com.boots.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class EventService {

    @Autowired
    EventRepository eventRepository;

   /* public Event store(MultipartFile file) throws Exception{
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Event fileDb = new Event(fileName,file.getContentType(), file.getBytes());

        return eventRepository.save(fileDb);

    }*/

    public Event getFile(Long id){
        return eventRepository.findById(id).get();
    }

    public List<Event> getEvents(){
       return eventRepository.findAll();
    }

    public boolean deleteEvent(Long event_id){
        if(eventRepository.findById(event_id).isPresent()){
            eventRepository.deleteById(event_id);
            return true;
        }
        return false;
    }
        public boolean saveEvent(Event event){
//        Event eventFro/mDb = eventRepository.findByNameEvent(event.getNameEvent());

//        if(eventFromDb != null){
//            return false;
//        }

        eventRepository.save(event);
        return true;
    }

}
