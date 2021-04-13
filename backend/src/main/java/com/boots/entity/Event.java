package com.boots.entity;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEvent;

    private String filename;

    private String type_file;

    @Lob
    private byte[] selectedFile;

    private String nameEvent;

    private String description;

    private String organizer;

    private String type_event;

    private String location;

    private Date Date;

    @Transient
    @ManyToMany(mappedBy = "create_event")
    private Set<User> users;

    /*public Event(String filename, String type_file, byte[] data) {
        this.filename = filename;
        this.type_file = type_file;
        this.selectedFile = data;
    }*/
}
