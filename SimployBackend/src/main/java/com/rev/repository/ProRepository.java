package com.rev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.domain.Project;

@Repository
public interface ProRepository extends JpaRepository<Project, Integer> {

}
