package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    // empty constructor
    public Product(){}

    public Product(String productId, String category, String name, String descn){
      this.productId = productId;
      this.category = category;
      this.name = name;
      this.descn = descn;
    }
    
    @Id
    @Column(name = "productid")
    private String productId;
    
    @Column(name = "category")
    private String category;

    @Column(name = "name")
    private String name;
    
    @Column(name = "descn")
    private String descn;
    
    public String getProductId() {
      return this.productId;
    }

    public void setProductId(String productId) {
      this.productId = productId;
    }

    public String getCategory() {
        return this.category;
    }
    
    public void setCategory(String category) {
      this.category = category;
    }

    public String getName() {
      return this.name;
    }
    
    public void setName(String name) {
      this.name = name;
    }

    public String getDescn() {
      return this.descn;
    }
    
    public void setDescn(String descn) {
      this.descn = descn;
    }
}
