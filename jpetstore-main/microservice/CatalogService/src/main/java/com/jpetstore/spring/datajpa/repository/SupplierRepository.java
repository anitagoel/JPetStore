package com.jpetstore.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jpetstore.spring.datajpa.model.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
	
}
