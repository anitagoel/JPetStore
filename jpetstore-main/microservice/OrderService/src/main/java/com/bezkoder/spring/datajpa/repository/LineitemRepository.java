package com.bezkoder.spring.datajpa.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
// import com.bezkoder.spring.datajpa.model.Lineitem;
import com.bezkoder.spring.datajpa.model.LineItem;

public interface LineitemRepository extends JpaRepository<LineItem, Long>  {
    List<LineItem> findByOrderId(int orderId);
}
