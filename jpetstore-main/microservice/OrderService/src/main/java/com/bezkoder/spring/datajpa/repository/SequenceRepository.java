package com.bezkoder.spring.datajpa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bezkoder.spring.datajpa.model.Sequence;

public interface SequenceRepository extends JpaRepository<Sequence, Long> {
	Sequence findNextIdByName(String name);
}
