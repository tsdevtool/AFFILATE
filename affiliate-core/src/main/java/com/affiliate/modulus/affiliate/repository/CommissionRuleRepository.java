package com.affiliate.modulus.affiliate.repository;

import com.affiliate.modulus.affiliate.entity.CommissionRule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CommissionRuleRepository extends JpaRepository<CommissionRule, Integer> {
    Optional<CommissionRule> findByName(String name);
}
