package com.jpetstore.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.jpetstore.spring.datajpa.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	List<Product> findByProductId(String productId);
	List<Product> findProductByCategory(String category);
	
	List<Product> findByNameContaining(String keyword);
}
