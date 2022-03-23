package com.jpetstore.spring.datajpa.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.jpetstore.spring.datajpa.model.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findByItemId(String itemId);

}
