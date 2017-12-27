package com.rev.domain;

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

@Component
@Entity
@Table(name = "SKILL")
public class Skill {

	@Id
	@Column(name = "skill_id")
	@SequenceGenerator(allocationSize = 1, name = "skillSeq", sequenceName = "SKILL_SEQ")
	@GeneratedValue(generator = "skillSeq", strategy = GenerationType.SEQUENCE)
	private Integer skill_id;

	@Column(name = "title")
	private String title;

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "skills")
	private List<Job> jobs;

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE }, mappedBy = "skills")
	private List<Resume> resumes;

	public Skill() {
		super();
	}

	public Skill(String title, List<Job> jobs, List<Resume> resumes) {
		super();
		this.title = title;
		this.jobs = jobs;
		this.resumes = resumes;
	}

	public Skill(Integer skill_id, String title, List<Job> jobs, List<Resume> resumes) {
		super();
		this.skill_id = skill_id;
		this.title = title;
		this.jobs = jobs;
		this.resumes = resumes;
	}

	public Integer getSkill_id() {
		return skill_id;
	}

	public void setSkill_id(Integer skill_id) {
		this.skill_id = skill_id;
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

	public List<Resume> getResumes() {
		return resumes;
	}

	public void setResumes(List<Resume> resumes) {
		this.resumes = resumes;
	}

	@Override
	public String toString() {
		return "Skill [skill_id=" + skill_id + ", title=" + title + ", jobs=" + jobs + ", resumes=" + resumes + "]";
	}

}
