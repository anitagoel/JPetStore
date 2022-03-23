package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;

@Entity
@IdClass(LineItemKey.class)
@Table(name = "lineitem")
public class LineItem {

	//empty constructor
	public LineItem(){}

	public LineItem(int orderId, int linenum, String itemId, int quantity, String unitprice){
		this.orderId = orderId;
		this.linenum = linenum;
		this.itemId = itemId;
		this.quantity = quantity;
		this.unitprice = unitprice;
	  }
  
	  @Id
	  @Column(name = "orderid")
	  private int orderId;    
	  
	  @Id
	  @Column(name = "linenum")
	  private int linenum;
  
	  @Column(name = "itemid")
	  private String itemId;
  
	  @Column(name = "quantity")
	  private int quantity;
  
	  @Column(name = "unitprice")
	  private String unitprice;
  
	  public int getOrderId() {
		return this.orderId;
	  }
	
	  public void setOrderId(int orderId) {
		this.orderId = orderId;
	  }
	
	  public int getLinenum() {
		return this.linenum;
	  }
	
	  public void setLinenum(int linenum) {
		this.linenum = linenum;
	  }
	
	  public String getItemId() {
		return this.itemId;
	  }
	
	  public void setItemId(String itemId) {
		this.itemId = itemId;
	  }
	
	  public int getQuantity() {
		return quantity;
	  }
	
	  public void setQuantity(int quantity) {
		this.quantity = quantity;
	  }
	
	  public String getUnitprice() {
		return unitprice;
	  }
	
	  public void setUnitprice(String unitprice) {
		this.unitprice = unitprice;
	  }
}
