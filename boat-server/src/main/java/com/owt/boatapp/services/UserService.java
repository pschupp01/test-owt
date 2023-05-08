package com.owt.boatapp.services;

import com.owt.boatapp.entities.User;
import com.owt.boatapp.repositories.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUser(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            return user.get();
        }
        return null;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
