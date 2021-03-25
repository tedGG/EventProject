package com.boots.controller;

import com.boots.entity.User;
import com.boots.repository.UserRepository;
import com.boots.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registration")
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;


    @GetMapping("/users")
    public List<User> getUsers(){
        return userService.allUsers();
    }

    @DeleteMapping("/deleteUser{id}")
    public boolean deleteUser(@PathVariable Long id){
        return userService.deleteUser(id);
    }

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user){
        userService.saveUser(user);
        return user;
    }
}
