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
@Table(name = "PROJECT")
public class Project {

	@Id
	@Column(name = "pro_id")
	@SequenceGenerator(allocationSize = 1, name = "proSeq", sequenceName = "PRO_SEQ")
	@GeneratedValue(generator = "proSeq", strategy = GenerationType.SEQUENCE)
	private Integer pro_id;

	@Column(name = "description")
	private String description;
	@Column(name = "startdate")
	private String startDate;
	@Column(name = "enddate")
	private String endDate;
	@Column(name = "title")
	private String title;
	@Column(name = "groupSize")
	private Integer groupSize;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "resume_id", nullable = false)
	private Resume resume;

	public Project() {
		super();
	}

	public Project(String description, String startDate, String endDate, String title, Integer groupSize,
			Resume resume) {
		super();
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.title = title;
		this.groupSize = groupSize;
		this.resume = resume;
	}

	public Project(Integer pro_id, String description, String startDate, String endDate, String title,
			Integer groupSize, Resume resume) {
		super();
		this.pro_id = pro_id;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.title = title;
		this.groupSize = groupSize;
		this.resume = resume;
	}

	public Integer getPro_id() {
		return pro_id;
	}

	public void setPro_id(Integer pro_id) {
		this.pro_id = pro_id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getGroupSize() {
		return groupSize;
	}

	public void setGroupSize(Integer groupSize) {
		this.groupSize = groupSize;
	}

	public Resume getResume() {
		return resume;
	}

	public void setResume(Resume resume) {
		this.resume = resume;
	}

	@Override
	public String toString() {
		return "Project [pro_id=" + pro_id + ", description=" + description + ", startDate=" + startDate + ", endDate="
				+ endDate + ", title=" + title + ", groupSize=" + groupSize + ", resume=" + resume + "]";
	}

}
