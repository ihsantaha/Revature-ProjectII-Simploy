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

import com.rev.domain.Job;
import com.rev.domain.Project;
import com.rev.service.JobService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Job")
public class JobController {
	
	@Autowired
	JobService service;
	
	@RequestMapping(method=RequestMethod.POST)
	public Job addFC(@RequestBody Job j){
		return service.addJob(j);
	}
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Job> findAll() {
		return service.findAllJobs();
	}
	
	@RequestMapping(value="/id", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Job findById(@RequestBody Job j){
		Integer id = j.getjobId();
		return service.findOne(id);
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody void delete(@RequestBody Job j){
		Integer id = j.getjobId();
		service.delete(id);
	}

}
