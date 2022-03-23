package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

public class Keyword
{

    public Keyword(){}

    public Keyword(String keyword){
      this.keyword = keyword;
    }

    private String keyword;    

    public String getKeyword() {
      return this.keyword;
    }
  
    public void setKeyword(String keyword) {
      this.keyword = keyword;
    }
}