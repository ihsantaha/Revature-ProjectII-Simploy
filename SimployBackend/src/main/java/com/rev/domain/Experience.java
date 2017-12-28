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
@Table(name="EXPERIENCE")
public class Experience {

	@Id
	@Column(name="exp_id")
	@SequenceGenerator(allocationSize = 1, name = "expSeq", sequenceName = "EXP_SEQ")
	@GeneratedValue(generator = "expSeq", strategy = GenerationType.SEQUENCE)
	private Integer exp_id;
	
	@Column(name="company", nullable=false)
	private String company;
	
	@Column(name="title", nullable=false)
	private String title;
	
	@Column(name="startYear", nullable=false)
	private String startYear;
	
	@Column(name="endYear", nullable=false)
	private String endYear;
	
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "resume_id", nullable = false)
    private Resume resume;

	public Experience() {
		super();
	}

	public Experience(String company, String title, String startYear, String endYear, Resume resume) {
		super();
		this.company = company;
		this.title = title;
		this.startYear = startYear;
		this.endYear = endYear;
		this.resume = resume;
	}

	public Experience(Integer exp_id, String company, String title, String startYear, String endYear, Resume resume) {
		super();
		this.exp_id = exp_id;
		this.company = company;
		this.title = title;
		this.startYear = startYear;
		this.endYear = endYear;
		this.resume = resume;
	}

	public Integer getExp_id() {
		return exp_id;
	}

	public void setExp_id(Integer exp_id) {
		this.exp_id = exp_id;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getStartYear() {
		return startYear;
	}

	public void setStartYear(String startYear) {
		this.startYear = startYear;
	}

	public String getEndYear() {
		return endYear;
	}

	public void setEndYear(String endYear) {
		this.endYear = endYear;
	}

	public Resume getResume() {
		return resume;
	}

	public void setResume(Resume resume) {
		this.resume = resume;
	}

	@Override
	public String toString() {
		return "Experience [exp_id=" + exp_id + ", company=" + company + ", title=" + title + ", startYear=" + startYear
				+ ", endYear=" + endYear + ", resume=" + resume + "]";
	}
	
	
}
