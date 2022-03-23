package com.jpetstore.spring.datajpa.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jpetstore.spring.datajpa.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long>{
    List<Account> findByUserId(String username);
}
