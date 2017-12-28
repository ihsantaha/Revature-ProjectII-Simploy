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
@Table(name = "CERTIFICATION")
public class Certification {

	@Id
	@Column(name = "cert_id")
	@SequenceGenerator(allocationSize = 1, name = "certSeq", sequenceName = "CERT_SEQ")
	@GeneratedValue(generator = "certSeq", strategy = GenerationType.SEQUENCE)
	private Integer cert_id;

	@Column(name = "title", nullable=false)
	private String title;
	@Column(name = "gotyear", nullable=false)
	private String gotYear;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "resume_id", nullable = false)
	private Resume resume;

	public Certification() {
		super();
	}

	public Certification(String title, String gotYear, Resume resume) {
		super();
		this.title = title;
		this.gotYear = gotYear;
		this.resume = resume;
	}

	public Certification(Integer cert_id, String title, String gotYear, Resume resume) {
		super();
		this.cert_id = cert_id;
		this.title = title;
		this.gotYear = gotYear;
		this.resume = resume;
	}

	public Integer getCert_id() {
		return cert_id;
	}

	public void setCert_id(Integer cert_id) {
		this.cert_id = cert_id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getGotYear() {
		return gotYear;
	}

	public void setGotYear(String gotYear) {
		this.gotYear = gotYear;
	}

	public Resume getResume() {
		return resume;
	}

	public void setResume(Resume resume) {
		this.resume = resume;
	}

	@Override
	public String toString() {
		return "Certification [cert_id=" + cert_id + ", title=" + title + ", gotYear=" + gotYear + ", resume=" + resume
				+ "]";
	}

}
