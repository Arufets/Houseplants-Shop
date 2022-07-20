package com.example.sklep_stephura.controller;

import com.example.sklep_stephura.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.sklep_stephura.service.UserServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired

    private final UserServiceImpl userService;

    public UserController(UserServiceImpl userServiceImpl) {
        this.userService = userServiceImpl;
    }

    @GetMapping("/getUsers")
    public @ResponseBody List<User> listUser(){
        return userService.getAllUser();
    }

    @PostMapping( "/register")
    public String addUser(@RequestBody User user){
        try {
            userService.addUser(user);
        } catch (Exception ex){
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
        }
        return "New user is added";
    }

    @PostMapping("/editUser/{userId}")
    public String editUser(@PathVariable Integer userId, @RequestBody User user){
        try {
            user.setId(userId);
            userService.editUser(userId, user);
        } catch (Exception ex){
            String errorMessage = ex.getMessage();
            System.out.println(errorMessage);
        }
        return "User info edited";
    }

    @GetMapping("/userById/{id}")
    public @ResponseBody User findUserById(@PathVariable("id") Integer id){
        return userService.getUserById(id);
    }
}
