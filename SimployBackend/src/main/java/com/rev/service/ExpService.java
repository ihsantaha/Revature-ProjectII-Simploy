package com.rev.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.repository.ExpRepository;

@Service
@Transactional
public class ExpService {
	
	@Autowired
	private ExpRepository expRepo;

}
