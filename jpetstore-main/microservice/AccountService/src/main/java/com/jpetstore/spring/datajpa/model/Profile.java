package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {

    //empty constructor
    public Profile(){}
    
    public Profile(String userId, String languagePreference, String favouriteCategoryId, boolean listOption, boolean bannerOption) {
        this.userId = userId;
        this.languagePreference = languagePreference;
        this.favouriteCategoryId = favouriteCategoryId;
        this.listOption = listOption;
        this.bannerOption = bannerOption;
    }

    @Id
    @Column(name = "userid")
    private String userId;

    @Column(name = "favcategory")
    private String favouriteCategoryId;

    @Column(name = "langpref")
    private String languagePreference;

    @Column(name = "mylistopt")
    private boolean listOption;

    @Column(name = "banneropt")
    private boolean bannerOption;

    public String getUserId() {
    return userId;
    }

    public void setUserId(String userId) {
    this.userId = userId;
    }
    
    public String getFavouriteCategoryId() {
    return favouriteCategoryId;
    }

    public void setFavouriteCategoryId(String favouriteCategoryId) {
    this.favouriteCategoryId = favouriteCategoryId;
    }

    public String getLanguagePreference() {
    return languagePreference;
    }

    public void setLanguagePreference(String languagePreference) {
    this.languagePreference = languagePreference;
    }

    public boolean isListOption() {
    return listOption;
    }

    public void setListOption(boolean listOption) {
    this.listOption = listOption;
    }

    public boolean isBannerOption() {
    return bannerOption;
    }

    public void setBannerOption(boolean bannerOption) {
    this.bannerOption = bannerOption;
    }
}
