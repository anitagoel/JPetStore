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

import com.jpetstore.spring.datajpa.model.Signon;
import com.jpetstore.spring.datajpa.model.Account;
import com.jpetstore.spring.datajpa.model.BannerData;
import com.jpetstore.spring.datajpa.model.Profile;
import com.jpetstore.spring.datajpa.model.AccountProfile;
import com.jpetstore.spring.datajpa.repository.SignonRepository;
import com.jpetstore.spring.datajpa.repository.AccountRepository;
import com.jpetstore.spring.datajpa.repository.BannerDataRepository;
import com.jpetstore.spring.datajpa.repository.ProfileRepository;


@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class SignonController {

	@Autowired
	SignonRepository signonRepository;
	
	@Autowired
	ProfileRepository profileRepository;

	@Autowired
	AccountRepository accountRepository;

	@Autowired
	BannerDataRepository bannerDataRepository;

	@GetMapping("/signons/all")
	public ResponseEntity<List<Signon>> getAllUserCredentials(){
		try{
			List<Signon> Signons = new ArrayList<Signon>();
			signonRepository.findAll().forEach(Signons::add);
			return new ResponseEntity<>(Signons, HttpStatus.OK);
		} catch(Exception e){
			//thow error here
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}


	@GetMapping("/signons")
	public ResponseEntity<List<Signon>> getAllSignons(@RequestParam(required = false) String username) {
		try {
			List<Signon> Signons = new ArrayList<Signon>();

			if (username == null)
				signonRepository.findAll().forEach(Signons::add);
			else
				signonRepository.findByUsername(username).forEach(Signons::add);

			if (Signons.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(Signons, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/signons/{username}")
	public ResponseEntity<Signon> getSignonByUsername(@PathVariable("username") String username) {
		List<Signon> SignonData = signonRepository.findByUsername(username);

		if (SignonData.size()>0) {
			return new ResponseEntity<>(SignonData.get(0), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}


	@PostMapping("/signons")
	public ResponseEntity<Signon> createSignon(@RequestBody Signon Signon) {
		try {
			Signon _Signon = signonRepository
					.save(new Signon(Signon.getUsername(), Signon.getPassword()));
			return new ResponseEntity<>(_Signon, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/signup")
	public ResponseEntity<String> createSignup(@RequestBody AccountProfile ap) {
		try {
			
			if(ap.getSignon().getPassword() != "")
			{
				Signon _signon = signonRepository.save(new Signon(ap.getSignon().getUsername(), ap.getSignon().getPassword()));
			}
			
			Account _account = accountRepository.save(
				new Account(
					ap.getAccount().getUserId(), 
					ap.getAccount().getEmail(), 
					ap.getAccount().getFirstName(), 
					ap.getAccount().getLastName(), 
					ap.getAccount().getStatus(), 
					ap.getAccount().getAddress1(), 
					ap.getAccount().getAddress2(), 
					ap.getAccount().getCity(), 
					ap.getAccount().getState(), 
					ap.getAccount().getZip(), 
					ap.getAccount().getCountry(), 
					ap.getAccount().getPhone()
					)
			);
			
			

			// BannerData _bannerData = bannerDataRepository.save(
			// 	new BannerData(
			// 		ap.getBannerData().getFavouriteCategoryId(),
			// 		ap.getBannerData().getBannerName()
			// 	)
			// );

			Profile _profile = profileRepository.save(
				new Profile(
					ap.getProfile().getUserId(),
					ap.getProfile().getLanguagePreference(),
					ap.getProfile().getFavouriteCategoryId(),
					ap.getProfile().isListOption(),
					ap.getProfile().isBannerOption()
				)
			);
			
			return new ResponseEntity<>("{\"status\": \"Successfully inserted\"}", HttpStatus.CREATED);
		} catch (Exception e) {
			System.out.println(e);
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/signin")
	public ResponseEntity<String> signin(@RequestBody Signon signon) {
		String result;
		try {
				List<Signon> SignonData = signonRepository.findByUsername(signon.getUsername());
				if(SignonData.get(0).getPassword().equals(signon.getPassword()))
				{
					result = "{\"status\": true}"; 
					return new ResponseEntity<>(result , HttpStatus.OK);
				}
				else
				{
					result = "{\"status\": false}";
					return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR);
				}	
		} catch (Exception e) {
			result = "{\"status\": false}";
			return new ResponseEntity<>(result, HttpStatus.INTERNAL_SERVER_ERROR); 
		}
	}

	@DeleteMapping("/signons")
	public ResponseEntity<HttpStatus> deleteAllSignons() {
		try {
			signonRepository.deleteAll();
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}

	}
}
