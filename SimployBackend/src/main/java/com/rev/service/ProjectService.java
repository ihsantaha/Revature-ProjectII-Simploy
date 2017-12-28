package com.rev.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.repository.ProRepository;

@Service
@Transactional
public class ProjectService {
	
	@Autowired
	private ProRepository proRepo;

}
