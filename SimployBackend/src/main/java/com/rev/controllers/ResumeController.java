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
import com.rev.service.ResumeService;
import com.rev.service.UserService;

@CrossOrigin()
@RestController
@RequestMapping(value = "/Resume")
public class ResumeController {
	
	@Autowired
	ResumeService service;
	
	@CrossOrigin()
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Resume> findAll() {
		return service.findAllResumes();
	}
	
	@CrossOrigin()
	@RequestMapping(method=RequestMethod.POST)
	public Resume addFC(@RequestBody Resume r){
		return service.addResume(r);
	}
	
	@CrossOrigin()
	@RequestMapping(value="/id", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Resume findById(@RequestBody Resume r){
		System.out.println("IN FINDBYID");
		return service.findResumeByResId(r.getResId());
	}
	
	@CrossOrigin()
	public Resume findById2(Integer r) {
		System.out.println("IN FINDBYID2");
		return service.findResumeByResId(r);
	}
	
	@CrossOrigin()
	@RequestMapping(value="/uid", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Resume findByUId(@RequestBody User u){
		ArrayList<Resume> here=new ArrayList<>(); 
		here=(ArrayList<Resume>) service.findAllResumes();
		for(Resume r: here) {
			if(r.getUser().getId()==u.getId())
				return r;
		}
		return null;
	}

}
