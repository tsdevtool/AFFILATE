package com.affiliate.modulus.affiliate.repository;

import com.affiliate.modulus.affiliate.entity.Affiliate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface AffiliateRepository extends JpaRepository<Affiliate, Integer> {
    @Query("SELECT a FROM Affiliate a WHERE a.user.id = :userId")
    Optional<Affiliate> findByUserId(String userId);
    Optional<Affiliate> findByReferralCode(String referralCode);
}
