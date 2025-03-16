package com.affiliate.modulus.jobs.repository;

import com.affiliate.modulus.jobs.entity.Job;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobRepository extends JpaRepository<Job, Long> {
    @EntityGraph(attributePaths = {"company"})
    List<Job> findAll();
}
