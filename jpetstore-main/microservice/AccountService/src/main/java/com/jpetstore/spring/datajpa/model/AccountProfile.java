package com.jpetstore.spring.datajpa.model;

public class AccountProfile {
    Account account;
    Profile profile;
    Signon signon;

    AccountProfile(String userId, String email, String fName, String lName, String status, String addr1, String addr2, String city, String state, String zip, String country, String phone, String favcategory, String languagePreference, boolean listOption, boolean bannerOption, String password){
        
        account = new Account(userId, email, fName, lName, status, addr1, addr2, city, state, zip, country, phone);
        
        profile = new Profile(userId, languagePreference, favcategory, listOption, bannerOption);
        
        signon = new Signon(userId, password);
            
    }

    public Account getAccount(){
        return this.account;
    }
    
    public Profile getProfile(){
        return this.profile;
    }

    public Signon getSignon(){
        return this.signon;
    }

}