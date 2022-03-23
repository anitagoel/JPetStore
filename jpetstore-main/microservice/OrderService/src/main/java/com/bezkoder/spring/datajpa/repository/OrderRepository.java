package com.bezkoder.spring.datajpa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bezkoder.spring.datajpa.model.Orders;


import java.util.List;

public interface OrderRepository extends JpaRepository<Orders, Long>{
    List<Orders> findByOrderId(int orderId);
    List<Orders> findOrdersByUserId(String userId);
}
