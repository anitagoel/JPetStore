package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "signon")
public class Supplier {

	//empty constructor
	public Supplier(){}

	public Supplier(int suppId, String name, String status, String addr1, String addr2, String city, String state, String zip, String phone){
		this.suppId = suppId;
		this.name = name;
		this.status = status;
		this.address1 = addr1;
		this.address2 = addr2;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
	  }
  
	  @Id
	  @Column(name = "suppid")
	  private int suppId;    
  
	  @Column(name = "name")
	  private String name;
  
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
  
	  @Column(name = "phone")
	  private String phone;
	
	  public int getSuppId() {
		return suppId;
	  }
	
	  public void setSuppId(int suppId) {
		this.suppId = suppId;
	  }
	
	  public String getName() {
		return name;
	  }
	
	  public void setName(String name) {
		this.name = name;
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
	
	  public String getPhone() {
		return this.phone;
	  }
	
	  public void setPhone(String phone) {
		this.phone = phone;
	  } 

}
