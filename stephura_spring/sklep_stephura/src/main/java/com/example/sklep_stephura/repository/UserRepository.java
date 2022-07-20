package com.example.sklep_stephura.repository;

import com.example.sklep_stephura.entity.User;

import java.util.List;

public interface UserRepository {
    List<User> getAllUser();
    Boolean addUser(User user);
    User getUserById(Integer id);
    Boolean editUser(Integer id, User user);
}
