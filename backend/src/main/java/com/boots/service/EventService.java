package com.boots.service;



import com.boots.entity.Event;
import com.boots.entity.LikedPosts;
import com.boots.repository.EventRepository;
import com.boots.repository.LikedEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    LikedEventRepository likedEventRepository;
    @Autowired
    EventRepository eventRepository;


    public byte[] getImgString(Long idEvent){
        Optional<Event> event = eventRepository.findById(idEvent);
        return event.get().getSelectedFile();
    }

    public List<LikedPosts> getAllLikedEvents(){
        return likedEventRepository.findAll();
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

    public boolean deleteLikedEvent(Long event_id){
        if(likedEventRepository.findById(event_id).isPresent()){
            likedEventRepository.deleteById(event_id);
            return true;
        }
        return false;
    }

    public boolean saveEvent(Event event){
        eventRepository.save(event);
        event.getSelectedFile();
        return true;
    }

    public LikedPosts getEvent(Long id) {
        Optional<Event> event = eventRepository.findById(id);

        LikedPosts likedPosts = new LikedPosts();
            likedPosts.setSelectedFile(event.get().getSelectedFile());
            likedPosts.setTimeStartEvent(event.get().getDate());
            likedPosts.setNameEvent(event.get().getNameEvent());
            likedPosts.setDescription(event.get().getDescription());

        return likedEventRepository.save(likedPosts);
    }


}
