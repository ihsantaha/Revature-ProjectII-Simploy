package com.rev.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.repository.EduRepository;

@Service
@Transactional
public class EduService {
	
	@Autowired
	private EduRepository eduRepo;

}
