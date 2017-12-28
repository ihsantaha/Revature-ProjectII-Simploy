package com.rev.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name="USERS")
public class User {
	
	@Id
	@Column(name="user_id")
	@SequenceGenerator(allocationSize = 1, name = "userSeq", sequenceName = "USER_SEQ")
	@GeneratedValue(generator = "userSeq", strategy = GenerationType.SEQUENCE)
	private Integer id;
	
	@Column(name="firstname", nullable=false)
	private String firstName;
	
	@Column(name="lastname", nullable=false)
	private String lastName;
	
	@Column(name="email", nullable=false)
	private String email;
	
	@Column(name="pnumber", nullable=false)
	private String pnumber;
	
	@Column(name="password", nullable=false)
	private String password;
	
	@Column(name="role", nullable=false)
	private Integer role;
	
	@OneToOne(fetch = FetchType.LAZY, cascade =  CascadeType.ALL, mappedBy = "user")
	private Resume resume;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "user")
	private List<Job> jobs=new ArrayList<>();
	
	public User() {
		super();
	}

	public User(String firstName, String lastName, String email, String pnumber, String password, Integer role) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.pnumber = pnumber;
		this.password = password;
		this.role = role;
	}

	public User(Integer id, String firstName, String lastName, String email, String pnumber, String password,
			Integer role) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.pnumber = pnumber;
		this.password = password;
		this.role = role;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPnumber() {
		return pnumber;
	}

	public void setPnumber(String pnumber) {
		this.pnumber = pnumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getRole() {
		return role;
	}

	public void setRole(Integer role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "User [user_id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
				+ ", pnumber=" + pnumber + ", password=" + password + ", role=" + role + "]";
	}

}
