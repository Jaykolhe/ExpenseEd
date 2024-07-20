package com.br.backendspringboot.repositories;

import com.br.backendspringboot.entities.Expense;
import com.br.backendspringboot.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.math.BigDecimal;
import java.util.List;

public interface ExpenseRepo extends JpaRepository<Expense, Long> {
    @Query("SELECT e FROM Expense e WHERE e.user.user_id = :userId")
    public List<Expense> getByUserId(@Param("userId") Long userId);

    @Query("SELECT SUM(e.amount) FROM Expense e WHERE e.user = ?1 AND e.category = 'EXPENSE'")
    BigDecimal getExpensesTotal(User user);

    @Query("SELECT SUM(e.amount) FROM Expense e WHERE e.user = ?1 AND e.category = 'INCOME'")
    BigDecimal getIncomeTotal(User user);

    List<Expense> findByUserAndCategory(User user, String expense);
}
