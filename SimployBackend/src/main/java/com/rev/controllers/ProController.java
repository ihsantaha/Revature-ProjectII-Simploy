package com.rev.controllers;

import java.util.ArrayList;
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
import com.rev.domain.Resume;
import com.rev.domain.User;
import com.rev.service.ProjectService;
import com.rev.service.ResumeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Project")
public class ProController {

	@Autowired
	ProjectService service;
	ResumeService resService;
	
	@RequestMapping(method=RequestMethod.POST)
	public Project addFC(@RequestBody Project p){
		return service.addProject(p);
	}
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Project> findAll() {
		return service.findAllProjects();
	}
	
	@RequestMapping(value="/id")
	public @ResponseBody Project findById(@RequestBody Project p){
		return service.findOne(p.getproId());
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody void delete(@RequestBody Project p){
		Integer id = p.getproId();
		service.delete(id);
	}
	
	@RequestMapping(value="/resid", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody <List>Project findByResId(@RequestBody Resume r){
		Resume b = resService.findResumeByResId(r.getResId());
		System.out.println("RESUME " + b);
		System.out.println("TEST1");
		return service.findProjectByResid(b);
	}
	
	@RequestMapping(value="/title")
	public @ResponseBody Project findByTitle(@RequestBody String title){
		return service.findProjectByTitle(title);
	}
}
