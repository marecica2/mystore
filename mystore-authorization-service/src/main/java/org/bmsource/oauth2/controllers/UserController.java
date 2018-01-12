package org.bmsource.oauth2.controllers;

import org.bmsource.oauth2.models.Account;
import org.bmsource.oauth2.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@PreAuthorize("#oauth2.hasScope('read')")
public class UserController {

    @Autowired
    AccountService accountService;

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping
    public Iterable<Account> getAccounts() {
		return accountService.findAll();
    }
}
