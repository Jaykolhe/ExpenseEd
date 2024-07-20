package com.br.backendspringboot.controllers;

import com.br.backendspringboot.entities.Expense;
import com.br.backendspringboot.entities.User;
import com.br.backendspringboot.services.ExpenseService;
import com.br.backendspringboot.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService userService;
    @Autowired
    ExpenseService expenseService;

    @PostMapping("/register")
    public User add(@RequestBody User user) {
        System.out.println(user);

        return userService.saveUser(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        // ... login logic
        System.out.println(user.toString());
        User foundUser = userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());

        if (foundUser != null) {
            // Successful login
            System.out.println("user found!! :"+foundUser);
            return foundUser;
        } else {
            // Invalid credential
            System.out.println("No user");
            return null;
        }
    }

    @GetMapping("/expenses")
    public List<Expense> getExpenses(@RequestParam Long user_id) {
        System.out.println("User Id : "+user_id);
        return expenseService.getByUserId(user_id);
    }



}
