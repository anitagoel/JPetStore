package com.jpetstore.spring.datajpa.controller;

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

import com.jpetstore.spring.datajpa.model.BannerData;
import com.jpetstore.spring.datajpa.repository.BannerDataRepository;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class BannerDataController {
    @Autowired
	BannerDataRepository bannerDataRepository;

    @GetMapping("/bannerdata/{favouriteCategoryId}")
	public ResponseEntity<BannerData> getSignonByUsername(@PathVariable("favouriteCategoryId") String favouriteCategoryId) {
		List<BannerData> accountData = bannerDataRepository.findByFavouriteCategoryId(favouriteCategoryId);

		if (accountData.size()>0) {
			return new ResponseEntity<>(accountData.get(0), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
