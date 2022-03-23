package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "bannerdata")
public class BannerData {

    // empty constructor
    public BannerData(){}

    public BannerData(String favcategory, String bannername){
      this.bannerName = bannername;
      this.favouriteCategoryId = favcategory;
    }
    
    @Id
    @Column(name = "favcategory")
    private String favouriteCategoryId;
    
    @Column(name = "bannername")
    private String bannerName;

    
    public String getFavouriteCategoryId() {
    return favouriteCategoryId;
    }

    public void setFavouriteCategoryId(String favouriteCategoryId) {
    this.favouriteCategoryId = favouriteCategoryId;
    }

    public String getBannerName() {
        return bannerName;
      }
    
      public void setBannerName(String bannerName) {
        this.bannerName = bannerName;
      }
}
