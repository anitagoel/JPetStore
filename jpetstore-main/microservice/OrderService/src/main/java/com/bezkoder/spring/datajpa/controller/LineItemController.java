package com.bezkoder.spring.datajpa.controller;

import javax.annotation.Generated;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.bezkoder.spring.datajpa.model.LineItem;
import com.bezkoder.spring.datajpa.repository.LineitemRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class LineItemController {
    @Autowired
	LineitemRepository lineitemRepository;

    @GetMapping("/lineitem/{orderId}")
	public ResponseEntity<List<LineItem>> getLineItemByOrderId(@PathVariable("orderId") int orderId) {
		List<LineItem> accountData = lineitemRepository.findByOrderId(orderId);

		if (accountData.size()>0) {
			return new ResponseEntity<>(accountData, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
