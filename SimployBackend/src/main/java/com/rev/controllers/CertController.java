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

import com.rev.domain.Certification;
import com.rev.domain.Project;
import com.rev.domain.Resume;
import com.rev.service.CertService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Certification")
public class CertController {
	
	@Autowired
	CertService service;
	
	@RequestMapping(method=RequestMethod.POST)
	public Certification addFC(@RequestBody Certification e){
		return service.addCert(e);
	}
	
	@RequestMapping(method = RequestMethod.GET,  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Certification> findAll() {
		return service.findAllCertifications();
	}
	
	@RequestMapping(value="/id", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Certification findById(@RequestBody Certification c){
		Integer id = c.getCert_id();
		return service.findOne(id);
	}
	
	@RequestMapping(value="/delete", method = RequestMethod.POST, produces=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody void delete(@RequestBody Certification c){
		Integer id = c.getCert_id();
		service.delete(id);
	}

}
