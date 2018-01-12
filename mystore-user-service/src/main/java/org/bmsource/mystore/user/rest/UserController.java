package org.bmsource.mystore.user.rest;

import java.util.List;

import org.bmsource.mystore.user.User;
import org.bmsource.mystore.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@PreAuthorize("#oauth2.hasScope('read')")
public class UserController {

    @Autowired
    UserRepository repository;

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping
    public List<User> getUsers() {
		return repository.findAll();
    }

    @GetMapping("/{userId}")
    public User getCustomer(@PathVariable("userId") String id) {
        return repository.findOne(id);
    }

    @PostMapping()
    public User createUser(@RequestBody User user) {
        return repository.insert(user);
    }

    @PutMapping("/{userId}")
    public User updateUser(@RequestBody User user) {
        return repository.save(user);
    }
    
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") String id) {
		repository.delete(id);
    }
}
