package com.affiliate.modulus.jobs.repository;

import com.affiliate.modulus.jobs.entity.JobApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
}
