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
public class InventoryController {
    
    @Autowired
    InventoryRepository inventoryRepository;

    @PostMapping("/inventory")
	public ResponseEntity<String> updateInventory(@RequestBody List<Inventory> inventoryList) {
		try{
			for(Inventory item: inventoryList){
				List<Inventory> itemList = inventoryRepository.findByItemId(item.getItemId());
				if(itemList.size()<1){
					//return false
					return new ResponseEntity<>("Failed", HttpStatus.BAD_REQUEST);
				}
				Inventory item2 = itemList.get(0);				
				item2.setQuantity(item2.getQuantity()-item.getQuantity());
				inventoryRepository.save(item2);
			}
			return new ResponseEntity<>("Success", HttpStatus.OK);		
		} catch(Exception ex){
			System.out.print("Exception occurred!!"+ex);
			return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
		}

	}
}