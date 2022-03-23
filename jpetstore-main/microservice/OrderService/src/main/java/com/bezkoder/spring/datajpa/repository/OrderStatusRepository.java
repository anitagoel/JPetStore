package com.bezkoder.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bezkoder.spring.datajpa.model.OrderStatus;

public interface OrderStatusRepository extends JpaRepository<OrderStatus, Long> {

}
