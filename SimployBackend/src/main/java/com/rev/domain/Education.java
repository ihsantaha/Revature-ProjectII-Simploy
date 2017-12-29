package com.rev.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Component
@Entity
@Table(name = "Education")
public class Education {

	@Id
	@Column(name = "edu_id")
	@SequenceGenerator(allocationSize = 1, name = "eduSeq", sequenceName = "EDU_SEQ")
	@GeneratedValue(generator = "eduSeq", strategy = GenerationType.SEQUENCE)
	private Integer edu_id;

	@Column(name = "school")
	private String school;
	@Column(name = "type")
	private String type;
	@Column(name = "gradYear")
	private Integer gradYear;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "resume_id", nullable = false)
	private Resume resume;

	public Education() {
		super();
	}

	public Education(String school, String type, Integer gradYear, Resume resume) {
		super();
		this.school = school;
		this.type = type;
		this.gradYear = gradYear;
		this.resume = resume;
	}

	public Education(Integer edu_id, String school, String type, Integer gradYear, Resume resume) {
		super();
		this.edu_id = edu_id;
		this.school = school;
		this.type = type;
		this.gradYear = gradYear;
		this.resume = resume;
	}

	public Integer getEdu_id() {
		return edu_id;
	}

	public void setEdu_id(Integer edu_id) {
		this.edu_id = edu_id;
	}

	public String getSchool() {
		return school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Integer getGradYear() {
		return gradYear;
	}

	public void setGradYear(Integer gradYear) {
		this.gradYear = gradYear;
	}

	public Resume getResume() {
		return resume;
	}

	public void setResume(Resume resume) {
		this.resume = resume;
	}

	@Override
	public String toString() {
		return "Education [edu_id=" + edu_id + ", school=" + school + ", type=" + type + ", gradYear=" + gradYear
				+ ", resume=" + resume + "]";
	}

}
