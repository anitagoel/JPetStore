package com.jpetstore.spring.datajpa.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jpetstore.spring.datajpa.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long>  {
    List<Item> findByItemId(String itemId);
    List<Item> findItemByProductId(String productId);
}
