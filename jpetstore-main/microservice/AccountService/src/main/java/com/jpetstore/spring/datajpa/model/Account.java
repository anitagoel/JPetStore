package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "account")
public class Account
{
    //empty constructor
    public Account(){} 

    public Account(String userId, String email, String fName, String lName, String status, String addr1, String addr2, String city, String state, String zip, String country, String phone){
      this.userId = userId;
      this.email = email;
      this.firstName = fName;
      this.lastName = lName;
      this.status = status;
      this.address1 = addr1;
      this.address2 = addr2;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.country = country;
      this.phone = phone;
    }

    @Id
    @Column(name = "userid")
    private String userId;    

    @Column(name = "email")
    private String email;

    @Column(name = "firstname")
    private String firstName;

    @Column(name = "lastname")
    private String lastName;

    @Column(name = "status")
    private String status;

    @Column(name = "addr1")
    private String address1;

    @Column(name = "addr2")
    private String address2;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "zip")
    private String zip;

    @Column(name = "country")
    private String country;

    @Column(name = "phone")
    private String phone;
  
    public String getUserId() {
      return userId;
    }
  
    public void setUserId(String userId) {
      this.userId = userId;
    }
  
    public String getEmail() {
      return email;
    }
  
    public void setEmail(String email) {
      this.email = email;
    }
  
    public String getFirstName() {
      return firstName;
    }
  
    public void setFirstName(String firstName) {
      this.firstName = firstName;
    }
  
    public String getLastName() {
      return lastName;
    }
  
    public void setLastName(String lastName) {
      this.lastName = lastName;
    }
  
    public String getStatus() {
      return status;
    }
  
    public void setStatus(String status) {
      this.status = status;
    }
  
    public String getAddress1() {
      return address1;
    }
  
    public void setAddress1(String address1) {
      this.address1 = address1;
    }
  
    public String getAddress2() {
      return address2;
    }
  
    public void setAddress2(String address2) {
      this.address2 = address2;
    }
  
    public String getCity() {
      return city;
    }
  
    public void setCity(String city) {
      this.city = city;
    }
  
    public String getState() {
      return state;
    }
  
    public void setState(String state) {
      this.state = state;
    }
  
    public String getZip() {
      return zip;
    }
  
    public void setZip(String zip) {
      this.zip = zip;
    }
  
    public String getCountry() {
      return country;
    }
  
    public void setCountry(String country) {
      this.country = country;
    }
  
    public String getPhone() {
      return this.phone;
    }
  
    public void setPhone(String phone) {
      this.phone = phone;
    }  
}