package com.boots.repository;

import com.boots.entity.LikedPosts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LikedEventRepository extends JpaRepository<LikedPosts, Long> {
}
