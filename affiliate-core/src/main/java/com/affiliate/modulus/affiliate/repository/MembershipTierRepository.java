package com.affiliate.modulus.affiliate.repository;

import com.affiliate.modulus.affiliate.entity.MembershipTier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembershipTierRepository extends JpaRepository<MembershipTier, Integer> {
    MembershipTier findByTierName(String tierName);
}
