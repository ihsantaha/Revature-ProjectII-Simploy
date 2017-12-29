package com.rev.domain;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Component
@Entity
@Table(name = "SKILL")
public class Skill {

	@Id
	@Column(name = "skillId")
	@SequenceGenerator(allocationSize = 1, name = "skillSeq", sequenceName = "SKILL_SEQ")
	@GeneratedValue(generator = "skillSeq", strategy = GenerationType.SEQUENCE)
	private Integer skillId;

	@Column(name = "title")
	private String title;

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "skills")
	private List<Job> jobs=new ArrayList<>();

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "skills")
	private List<Resume> resumes= new ArrayList<>();

	public Skill() {
		super();
	}

	public Skill(String title, List<Job> jobs, List<Resume> resumes) {
		super();
		this.title = title;
		this.jobs = jobs;
		this.resumes = resumes;
	}

	public Skill(Integer skillId, String title, List<Job> jobs, List<Resume> resumes) {
		super();
		this.skillId = skillId;
		this.title = title;
		this.jobs = jobs;
		this.resumes = resumes;
	}

	public Integer getskillId() {
		return skillId;
	}

	public void setskillId(Integer skillId) {
		this.skillId = skillId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Job> getJobs() {
		return jobs;
	}

	public void setJobs(List<Job> jobs) {
		this.jobs = jobs;
	}
	
	@JsonIgnore
	public List<Resume> getResumes() {
		return resumes;
	}

	public void setResumes(List<Resume> resumes) {
		this.resumes = resumes;
	}

	@Override
	public String toString() {
		return "Skill [skillId=" + skillId + ", title=" + title + ", jobs=" + jobs + ", resumes=" + resumes + "]";
	}

}
