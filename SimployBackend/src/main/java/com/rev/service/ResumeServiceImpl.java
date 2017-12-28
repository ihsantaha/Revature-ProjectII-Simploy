package com.rev.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.domain.Resume;
import com.rev.repository.ResumeRepository;

@Service
@Transactional
public class ResumeServiceImpl implements ResumeService {

	@Autowired
	private ResumeRepository resRepo;

	public Resume addResume(Resume r) {
		return resRepo.save(r);
	}

	public List<Resume> findAllResumes() {
		System.out.println("LETS TRY THIS");
		return resRepo.findAll();
	}

	public Resume findResumeByResId(Integer id) {
		System.out.println(id);
		return resRepo.findResumeByResid(id);
	}
}
