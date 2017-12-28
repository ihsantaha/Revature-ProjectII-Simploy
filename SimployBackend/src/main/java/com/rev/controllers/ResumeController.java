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

import com.rev.domain.Resume;
import com.rev.domain.User;
import com.rev.service.ResumeService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Resume")
public class ResumeController {
	
	@Autowired
	ResumeService service;
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Resume> findAll() {
		return service.findAllResumes();
	}
	
	@RequestMapping(method=RequestMethod.POST)
	public Resume addFC(@RequestBody Resume r){
		return service.addResume(r);
	}
	
	@RequestMapping(value="/id", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Resume findById(@RequestBody Integer id){
		return service.findResumeByResId(id);
	}

}
