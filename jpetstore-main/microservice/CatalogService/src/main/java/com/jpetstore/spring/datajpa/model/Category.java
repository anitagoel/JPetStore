package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "category")
public class Category
{

    public Category(){}
    
    public Category(String catId, String name, String descn){
      this.catId = catId;
      this.name = name;
      this.descn = descn;
    }

    @Id
    @Column(name = "catid")
    private String catId;    

    @Column(name = "name")
    private String name;

    @Column(name = "descn")
    private String descn;

    public String getCatId() {
      return catId;
    }
  
    public void setCatId(String catId) {
      this.catId = catId;
    }
  
    public String getName() {
      return name;
    }
  
    public void setName(String name) {
      this.name = name;
    }
  
    public String getDescn() {
      return descn;
    }
  
    public void setDescn(String descn) {
      this.descn = descn;
    }
  
}