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

import com.rev.domain.Education;
import com.rev.domain.Project;
import com.rev.service.EduService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Education")
public class EduController {
	
	@Autowired
	EduService service;
	
	@RequestMapping(method=RequestMethod.POST)
	public Education addFC(@RequestBody Education e){
		return service.addEdu(e);
	}
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Education> findAll() {
		return service.findAllEducations();
	}
	
	@RequestMapping(value="/id", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Education findById(@RequestBody Education e){
		Integer id = e.getEdu_id();
		return service.findOne(id);
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody void delete(@RequestBody Education e){
		Integer id = e.getEdu_id();
		service.delete(id);
	}

}
