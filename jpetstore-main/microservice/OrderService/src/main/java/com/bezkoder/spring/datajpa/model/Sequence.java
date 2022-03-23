package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "sequence")
public class Sequence {

	//empty constructor
	public Sequence(){}

	public Sequence(String name, int nextId){
		this.name = name;
		this.nextId = nextId;
	  }
  
	  @Id
	  @Column(name = "name")
	  private String name;    
  
	  @Column(name = "nextid")
	  private int nextId;

	
	  public String getName() {
		return name;
	  }
	
	  public void setName(String name) {
		this.name = name;
	  }
	
	  public int getNextId() {
		return this.nextId;
	  }
	
	  public void setNextId(int nextId) {
		this.nextId = nextId;
	  }

}
