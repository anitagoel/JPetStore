package com.jpetstore.spring.datajpa.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

import com.jpetstore.spring.datajpa.model.Category;
import com.jpetstore.spring.datajpa.model.Inventory;
import com.jpetstore.spring.datajpa.model.Item;
import com.jpetstore.spring.datajpa.model.Product;
import com.jpetstore.spring.datajpa.model.Supplier;
import com.jpetstore.spring.datajpa.repository.CategoryRepository;
import com.jpetstore.spring.datajpa.repository.InventoryRepository;
import com.jpetstore.spring.datajpa.repository.ItemRepository;
import com.jpetstore.spring.datajpa.repository.ProductRepository;
import com.jpetstore.spring.datajpa.repository.SupplierRepository;



@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class CategoryController {
    
    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/category/all")
	public ResponseEntity<List<Category>> getAllCategories(){	
		try{
			List<Category> categoryList = new ArrayList<Category>();
			categoryRepository.findAll().forEach(categoryList::add);
			return new ResponseEntity<>(categoryList, HttpStatus.OK);
		} catch(Exception e){
			//thow error here
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    @GetMapping("/category/{catId}")
	public ResponseEntity<Category> getCategoryById(@PathVariable("catId") String catId) {
		List<Category> categoryData = categoryRepository.findByCatId(catId);
		if (categoryData.size()>0) {
			return new ResponseEntity<>(categoryData.get(0), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
