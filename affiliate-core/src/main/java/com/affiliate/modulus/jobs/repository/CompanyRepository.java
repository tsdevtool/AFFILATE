package com.affiliate.modulus.jobs.repository;

import com.affiliate.modulus.jobs.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}
