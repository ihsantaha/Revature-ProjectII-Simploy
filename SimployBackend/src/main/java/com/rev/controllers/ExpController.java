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

import com.rev.domain.Experience;
import com.rev.domain.Project;
import com.rev.service.ExpService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Experience")
public class ExpController {

	@Autowired
	ExpService service;
	
	@RequestMapping(method=RequestMethod.POST)
	public Experience addFC(@RequestBody Experience e){
		return service.addExp(e);
	}
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Experience> findAll() {
		return service.findAllExperiences();
	}
	
	@RequestMapping(value="/id", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Experience findById(@RequestBody Experience e){
		Integer id = e.getexpId();
		return service.findOne(id);
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody void delete(@RequestBody Experience e){
		Integer id = e.getexpId();
		service.delete(id);
	}
}
