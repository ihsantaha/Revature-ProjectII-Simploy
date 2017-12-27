package com.rev.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.rev.domain.User;
import com.rev.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/User")
public class UserController {

	@Autowired
	UserService service;

	static {
		System.out.println("in rest conroller");
	}
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> findAll() {
		return service.findAllUsers();
	}
	
	@RequestMapping(method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public User addFC(@RequestBody User u){
		User check=service.findUserByEmail(u.getEmail());
		if(check==null) {
			System.out.println("test");
			return service.addUser(u);
		}else
			return null;
	}
	
	@RequestMapping(value="/login", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody User login(@RequestBody User user){
		String email = user.getEmail();
		User check = service.findUserByEmail(email);
		if(check==null) return null;
		else {
			if(user.getPassword().equals(check.getPassword())){
				return check;
			}
			else{
				return null;
			}
		}
	}

}
