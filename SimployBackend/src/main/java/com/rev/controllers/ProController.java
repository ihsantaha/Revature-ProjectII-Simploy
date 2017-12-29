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

import com.rev.domain.Project;
import com.rev.domain.User;
import com.rev.service.ProjectService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Project")
public class ProController {

	@Autowired
	ProjectService service;
	
	@RequestMapping(method=RequestMethod.POST)
	public Project addFC(@RequestBody Project p){
		return service.addProject(p);
	}
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Project> findAll() {
		return service.findAllProjects();
	}
	
	@RequestMapping(value="/id", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Project findById(@RequestBody Project p){
		Integer id = p.getproId();
		return service.findOne(id);
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody void delete(@RequestBody Project p){
		Integer id = p.getproId();
		service.delete(id);
	}
}
