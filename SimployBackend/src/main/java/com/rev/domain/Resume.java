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
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "RESUME")
public class Resume {

	@Id
	@Column(name = "resume_id")
	@SequenceGenerator(allocationSize = 1, name = "resumeSeq", sequenceName = "RESUME_SEQ")
	@GeneratedValue(generator = "resumeSeq", strategy = GenerationType.SEQUENCE)
	private Integer resume_id;

	@Column(name = "description")
	private String description;

	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id", nullable = false)
	private User user;

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "resume")
	private List<Education> educations = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "resume")
	private List<Experience> experiences = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "resume")
	private List<Project> projects = new ArrayList<>();

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "resume")
	private List<Certification> certifications = new ArrayList<>();

	@ManyToMany(fetch = FetchType.LAZY, cascade = { CascadeType.PERSIST, CascadeType.MERGE })
	@JoinTable(name = "resume_skills", joinColumns = { @JoinColumn(name = "resume_id") }, inverseJoinColumns = {
			@JoinColumn(name = "skill_id") })
	private List<Skill> skills;

	public Resume() {
		super();
	}

	public Resume(String description, User user, List<Education> educations, List<Experience> experiences,
			List<Project> projects, List<Certification> certifications, List<Skill> skills) {
		super();
		this.description = description;
		this.user = user;
		this.educations = educations;
		this.experiences = experiences;
		this.projects = projects;
		this.certifications = certifications;
		this.skills = skills;
	}

	public Resume(Integer resume_id, String description, User user, List<Education> educations,
			List<Experience> experiences, List<Project> projects, List<Certification> certifications,
			List<Skill> skills) {
		super();
		this.resume_id = resume_id;
		this.description = description;
		this.user = user;
		this.educations = educations;
		this.experiences = experiences;
		this.projects = projects;
		this.certifications = certifications;
		this.skills = skills;
	}

	public Integer getResume_id() {
		return resume_id;
	}

	public void setResume_id(Integer resume_id) {
		this.resume_id = resume_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Education> getEducations() {
		return educations;
	}

	public void setEducations(List<Education> educations) {
		this.educations = educations;
	}

	public List<Experience> getExperiences() {
		return experiences;
	}

	public void setExperiences(List<Experience> experiences) {
		this.experiences = experiences;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}

	public List<Certification> getCertifications() {
		return certifications;
	}

	public void setCertifications(List<Certification> certifications) {
		this.certifications = certifications;
	}

	public List<Skill> getSkills() {
		return skills;
	}

	public void setSkills(List<Skill> skills) {
		this.skills = skills;
	}

	@Override
	public String toString() {
		return "Resume [resume_id=" + resume_id + ", description=" + description + ", user=" + user + ", educations="
				+ educations + ", experiences=" + experiences + ", projects=" + projects + ", certifications="
				+ certifications + ", skills=" + skills + "]";
	}

}
