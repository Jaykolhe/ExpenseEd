package com.br.backendspringboot.services;

import com.br.backendspringboot.entities.Expense;
import com.br.backendspringboot.entities.User;

import java.math.BigDecimal;
import java.util.List;

public interface ExpenseService {
    public Expense saveExpense(Expense expense);
    public List<Expense> getByUserId(Long userId);




}
