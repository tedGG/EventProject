package com.boots.entity;


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
@Table(name = "liked_posts")
public class LikedPosts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long IdEvent;

    @Lob
    private byte[] selectedFile;

    private String description;

    private String nameEvent;

    private Date timeStartEvent;




}
