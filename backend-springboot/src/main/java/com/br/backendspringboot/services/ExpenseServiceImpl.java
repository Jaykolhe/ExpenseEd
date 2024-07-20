package com.br.backendspringboot.services;

import com.br.backendspringboot.entities.Expense;
import com.br.backendspringboot.entities.User;
import com.br.backendspringboot.repositories.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class ExpenseServiceImpl implements ExpenseService{

    @Autowired
    private ExpenseRepo expenseRepo;

    @Override
    public Expense saveExpense(Expense expense) {
        return expenseRepo.save(expense);
    }

    @Override
    public List<Expense> getByUserId(Long userId) {
        return expenseRepo.getByUserId(userId);
    }



}
