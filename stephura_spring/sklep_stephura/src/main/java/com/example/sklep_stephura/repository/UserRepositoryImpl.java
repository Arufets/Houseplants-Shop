package com.example.sklep_stephura.repository;
import com.example.sklep_stephura.entity.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class UserRepositoryImpl implements UserRepository {

    @PersistenceContext
    private EntityManager em;
    @Override
    public List<User> getAllUser(){
        return em.createNamedQuery("User.findAll").getResultList();
    }

    @Override
    public Boolean addUser(User user){
        if(user != null && user.getId() == null){
            em.persist(user);
            return true;
        }
        return false;
    }
    @Override
    public User getUserById(Integer id){
        return em.find(User.class, id);
    }

    private final PasswordEncoder passwordEncoder;
    public UserRepositoryImpl(PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public Boolean editUser(Integer id, User user){
        User u = getUserById(id);
        if(user != null && id !=null) {
            u.setName(user.getName());
            u.setSurname(user.getSurname());
            u.setLogin(user.getLogin());
            String passOld = u.getPassword();
            String passNew = user.getPassword();
            if(!passOld.equals(passNew))
                u.setPassword(passwordEncoder.encode(user.getPassword()));
            else u.setPassword(passOld);
            //u.setPassword(user.getPassword());
            u.setEmail(user.getEmail());
            u.setPhone(user.getPhone());
            u.setUserDesc(user.getUserDesc());
            em.persist(u);
            return true;
        }
        return false;
    }
}

