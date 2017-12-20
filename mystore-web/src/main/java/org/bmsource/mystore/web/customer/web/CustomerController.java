package org.bmsource.mystore.web.customer.web;

import org.bmsource.mystore.web.customer.Customer;
import org.bmsource.mystore.web.customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerRepository repository;

    @GetMapping
    public List<Customer> getCustomers() {
        return repository.findAll();
    }

    @GetMapping("/{customerId}")
    public Customer getCustomer(@PathVariable("customerId") String id) {
        return repository.findOne(id);
    }

    @PostMapping()
    public Customer createCustomer(@RequestBody Customer customer) {
        return repository.insert(customer);
    }

    @PutMapping("/{customerId}")
    public Customer updateCustomer(@RequestBody Customer customer) {
        return repository.save(customer);
    }
}
