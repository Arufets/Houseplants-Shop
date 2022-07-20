package com.example.sklep_stephura.service;

import com.example.sklep_stephura.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.sklep_stephura.repository.UserRepositoryImpl;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepositoryImpl userRepository;
    @Override
    public List<User> getAllUser() {
        return userRepository.getAllUser();
    }
    @Override
    public Boolean addUser(User user){
        return userRepository.addUser(user);
    }
    @Override
    public User getUserById(Integer id){
        return userRepository.getUserById(id);
    }
    @Override
    public Boolean editUser(Integer id, User user){
        return userRepository.editUser(id, user);
    }
}
