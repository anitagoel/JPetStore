package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "item")
public class Item {

    //empty constructor
    public Item(){}
    
    public Item(String itemId, String productId, String listPrice, String unitCost, int supplier, String status, String attr1, String attr2, String attr3, String attr4, String attr5) {
        this.itemId=itemId;
        this.productId = productId;
        this.listPrice = listPrice;
        this.unitCost  = unitCost;
        this.supplier = supplier;
        this.status = status;
        this.attr1 = attr1;
        this.attr2 = attr2; 
        this.attr3 = attr3; 
        this.attr4 = attr4; 
        this.attr5 = attr5;
    }

    @Id
    @Column(name = "itemid")
    private String itemId;
    
    @Column(name = "productid")
    private String productId;

    @Column(name = "listprice")
    private String listPrice;

    @Column(name = "unitcost")
    private String unitCost;
    
    @Column(name = "supplier")
    private int supplier;

    @Column(name = "status")
    private String status;
    
    @Column(name = "attr1")
    private String attr1;

    @Column(name = "attr2")
    private String attr2;
    
    @Column(name = "attr3")
    private String attr3;
    
    @Column(name = "attr4")
    private String attr4;

    @Column(name = "attr5")
    private String attr5;
    
    public String getItemId() {
        return this.itemId;
    }
    
    public void setItemId(String itemId) {
        this.itemId = itemId;
    }
    
    public String getProductId() {
    return this.productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }
    
    public String getListPrice() {
        return this.listPrice;
    }

    public void setListPrice(String listPrice) {
        this.listPrice = listPrice;
    }

    public String getUnitCost() {
        return this.unitCost;
    }

    public void setUnitCost(String unitCost) {
    this.unitCost = unitCost;
    }

    public int getSupplier() {
        return this.supplier;
    }

    public void setSupplier(int supplier) {
    this.supplier = supplier;
    }

    public String getStatus() {
		return status;
	  }
	
    public void setStatus(String status) {
		this.status = status;
	}

    public String getAttr1() {
        return this.attr1;
    }

    public void setAttr1(String attr1) {
    this.attr1 = attr1;
    }

    public String getAttr2() {
        return this.attr2;
    }

    public void setAttr2(String attr2) {
    this.attr2 = attr2;
    }

    public String getAttr3() {
        return this.attr3;
    }

    public void setAttr3(String attr3) {
    this.attr3 = attr3;
    }

    public String getAttr4() {
        return this.attr4;
    }

    public void setAttr4(String attr4) {
    this.attr4 = attr4;
    }

    public String getAttr5() {
        return this.attr5;
    }

    public void setAttr5(String attr5) {
    this.attr5 = attr5;
    }

}
