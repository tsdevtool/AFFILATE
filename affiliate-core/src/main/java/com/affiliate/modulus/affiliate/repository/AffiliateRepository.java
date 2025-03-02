package com.affiliate.modulus.affiliate.repository;

import com.affiliate.modulus.affiliate.entity.Affiliate;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AffiliateRepository extends JpaRepository<Affiliate, Integer> {
    Optional<Affiliate> findByUserId(String userId);
    Optional<Affiliate> findByReferralCode(String referralCode);
}
