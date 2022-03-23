package com.jpetstore.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "signon")
public class Signon {

	@Id
	@Column(name = "username")
	private String username;

	@Column(name = "password")
	private String password;

	//empty constructor
	public Signon() {}

	public Signon(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return this.username;
	}

	public String getPassword() {
		return this.password;
	}

	@Override
	public String toString() {
		return "Signon [username=" + username + ", password=" + password+"]";
	}

}
