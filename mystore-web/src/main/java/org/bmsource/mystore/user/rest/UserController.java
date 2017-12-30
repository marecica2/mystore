package org.bmsource.mystore.user.rest;

import org.bmsource.mystore.user.User;
import org.bmsource.mystore.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository repository;

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
