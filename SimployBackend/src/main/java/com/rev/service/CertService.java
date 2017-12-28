package com.rev.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.repository.CertRepository;

@Service
@Transactional
public class CertService {
	
	@Autowired
	private CertRepository certRepo;

}
